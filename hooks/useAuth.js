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
            const token = getToken();
            setAuthToken(token);
            setIsCheckingAuth(false)
        }
        checkToken()
    }, []);

    const useLogin = useMutation({
        mutationFn: loginUseCase,
        onMutate: () => {
            setIsCheckingAuth(true)
        },
        onSuccess: async (data) => {
            saveToken(data.access_token)
            setAuthToken(data.access_token)
            setAuthError(null)
            router.replace("/routes")
            queryClient.invalidateQueries(["user"])
        },
        onError: async (req) => {
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
        },
        onSuccess: async () => {
            setAuthError(null)
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
        setAuthToken(null);
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
