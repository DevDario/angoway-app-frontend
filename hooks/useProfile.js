import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCredentialsUseCase, updateAccessibilityUseCase, updatePasswordUseCase } from "../app/api/profile";
import { useState } from "react";


const useProfileMutationMessages = () => {
    const [successMessage, setSuccessMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    const handleSuccess = (message) => {
        setSuccessMessage(message || null);
        setErrorMessage(null);
    };

    const handleError = (error, fallback) => {
        setErrorMessage(error.message || fallback);
        setSuccessMessage(null);
    };

    return { successMessage, errorMessage, handleSuccess, handleError };
};

export const useUpdatePassword = (
) => {
    const queryClient = useQueryClient();
    const { successMessage, errorMessage, handleSuccess, handleError } =
        useProfileMutationMessages();
    const mutation = useMutation({
        mutationFn: (password) => updatePasswordUseCase(password),
        onSuccess: (res) => {
            queryClient.invalidateQueries({ queryKey: ["profile-details"] });
            handleSuccess(res.message);
        },
        onError: (req) => {
            handleError(req, "Erro ao atualizar senha.");
        },
    });
    return { ...mutation, successMessage, errorMessage };
};

export const useUpdateAccessibility = (
) => {
    const queryClient = useQueryClient();
    const { successMessage, errorMessage, handleSuccess, handleError } =
        useProfileMutationMessages();
    const mutation = useMutation({
        mutationFn: (disability) => updateAccessibilityUseCase(disability),
        onSuccess: (res) => {
            queryClient.invalidateQueries({ queryKey: ["profile-details"] });
            handleSuccess(res.message);
        },
        onError: (req) => {
            handleError(req, "Erro ao atualizar preferências.");
        },
    });
    return { ...mutation, successMessage, errorMessage };
};

export const useUpdateCredentials = (
) => {
    const queryClient = useQueryClient();
    const { successMessage, errorMessage, handleSuccess, handleError } =
        useProfileMutationMessages();
    const mutation = useMutation({
        mutationFn: (email, number) => updateCredentialsUseCase(email, number),
        onSuccess: (res) => {
            queryClient.invalidateQueries({ queryKey: ["profile-details"] });
            handleSuccess(res.message);
        },
        onError: (req) => {
            handleError(req, "Erro ao atualizar. Tente novamente");
        },
    });
    return { ...mutation, successMessage, errorMessage };
};