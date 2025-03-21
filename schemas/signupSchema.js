import { z } from "zod";

export const signupSchema = z.object({
    email: z
        .string()
        .email("E-mail inválido"),
    phoneNumber: z
        .string()
        .min(9, "O número deve ter pelo menos 9 dígitos")
        .max(9, "O número deve ter no máximo 9 dígitos")
        .regex(/^(?:\+244|244)?9[1-9]\d{7}$/, "Formato de telefone inválido (deve ser 9xx xxx xxx)"),
    password: z
        .string()
        .min(8, "A senha deve ter pelo menos 8 caracteres")
        .regex(/[A-Z]/, "A senha deve conter pelo menos uma letra maiúscula")
        .regex(/[a-z]/, "A senha deve conter pelo menos uma letra minúscula")
        .regex(/\d/, "A senha deve conter pelo menos um número")
})