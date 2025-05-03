import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCredentialsUseCase, updateAccessibilityUseCase, updatePasswordUseCase } from "../app/api/profile";
import { useEffect, useState } from "react";
import { getToken } from "../utils/secureStore";

export function useProfile() {
    const queryClient = useQueryClient()
    const [authToken, setAuthToken] = useState(null)
    const [isCheckingAuth, setIsCheckingAuth] = useState(true);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);


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
            setError(null)
        },
        onSuccess: async () => {
            setIsCheckingAuth(true)
            setError(null)
        },
        onError: async (req) => {
            setError(req.message)
        },
        onSettled: () => {
            setIsCheckingAuth(false)
        },
    })

    const useUpdatePassword = useMutation({
        mutationFn: updatePasswordUseCase,
        onMutate: () => {
            setIsCheckingAuth(true)
            setError(null)
        },
        onSuccess: async (req) => {
            setIsCheckingAuth(true)
            setError(null)
            setSuccess(req.message)
        },
        onError: async (req) => {
            setError(req.message)
        },
        onSettled: () => {
            setIsCheckingAuth(false)
        },
    })

    const useUpdateAccessibility = useMutation({
        mutationFn: updateAccessibilityUseCase,
        onMutate: () => {
            setIsCheckingAuth(true)
            setError(null)
        },
        onSuccess: () => {
            setIsCheckingAuth(true)
            setError(null)
        },
        onError: (req) => {
            setError(req.message)
        },
        onSettled: () => {
            setIsCheckingAuth(false)
        },
    })

    return {
        useUpdateCredentials,
        useUpdatePassword,
        useUpdateAccessibility,
        authToken,
        isCheckingAuth,
        error,
        success
    }
}
