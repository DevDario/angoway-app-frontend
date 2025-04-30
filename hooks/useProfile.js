import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCredentialsUseCase, updateAccessibilityUseCase } from "../app/api/profile";
import { useEffect, useState } from "react";
import { getToken } from "../utils/secureStore";
import { useRouter } from "expo-router";

export function useProfile() {
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

    const useUpdateCredentials = useMutation({
        mutationFn: updateCredentialsUseCase,
        onMutate: () => {
            setIsCheckingAuth(true)
            setAuthError(null)
        },
        onSuccess: async () => {
            setIsCheckingAuth(true)
            setAuthError(null)
            router.reload()
        },
        onError: async (req) => {
            setAuthError(req.response.data.message)
        },
        onSettled: () => {
            setIsCheckingAuth(false)
        },
    })

    const useUpdateAccessibility = useMutation({
        mutationFn: updateAccessibilityUseCase,
        onMutate: () => {
            setIsCheckingAuth(true)
            setAuthError(null)
        },
        onSuccess: () => {
            setIsCheckingAuth(true)
            setAuthError(null)
            router.reload()
        },
        onError: (req) => {
            setAuthError(req.response.data.message)
        },
        onSettled: () => {
            setIsCheckingAuth(false)
        },
    })

    return {
        useUpdateCredentials,
        useUpdateAccessibility,
        authToken,
        isCheckingAuth,
        authError
    }
}
