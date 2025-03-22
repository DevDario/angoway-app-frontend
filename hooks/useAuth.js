import { useMutation } from "@tanstack/react-query";
import { loginUseCase, signupUseCase } from "../app/api/auth";

export const useLogin = () => {
    return useMutation({
        mutationFn: loginUseCase
    })
}

export const useSignup = () => {
    return useMutation({
        mutationFn: signupUseCase
    })
}