import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginUseCase, signupUseCase } from "../app/api/auth";
import { useEffect, useState } from "react";
import { getToken, saveToken, removeToken } from "../utils/secureStore";
import { useRouter } from "expo-router";

export function useAuth() {
    const queryClient = useQueryClient()
    const router = useRouter()
    const [authToken, setAuthToken] = useState(null)
    const [isCheckingAuth, setIsCheckingAuth] = useState(true);
    const [authError, setAuthError] = useState(null);


    useEffect(() => {
        async function checkToken() {
            const token = await getToken();
            setAuthToken(token);
            setIsCheckingAuth(false)
        }
        checkToken()
    }, []);

    const useLogin = useMutation({
        mutationFn: loginUseCase,
        onMutate: () => {
            setIsCheckingAuth(true)
            setAuthError(null)
        },
        onSuccess: async (data) => {
            saveToken(data.access_token)
            setAuthToken(data.access_token)
            router.replace("/routes")
            queryClient.invalidateQueries(["user"])
        },
        onError: (req) => {
            setAuthError(req.response.data.message)
        },
        onSettled: () => {
            setIsCheckingAuth(false)
        },
    })

    const useSignup = useMutation({
        mutationFn: signupUseCase,
        onMutate: () => {
            setIsCheckingAuth(true)
            setAuthError(null)
        },
        onSuccess: async () => {
            router.replace("/auth/login")
            queryClient.invalidateQueries(["user"])
        },
        onError: async (req) => {
            setAuthError(req.response.data.message)
        },
        onSettled: () => {
            setIsCheckingAuth(false)
        },
    })

    const logout = async () => {
        removeToken();
        router.replace("/auth/login")
        queryClient.clear();
    }

    return {
        useLogin,
        useSignup,
        logout,
        authToken,
        isCheckingAuth,
        authError
    }
}
