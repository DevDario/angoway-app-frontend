import { z } from "zod";

export const updateCredentialsSchema = z.object({
    email: z
        .string()
        .nonempty("Insira o novo e-mail para atualizar")
        .email("E-mail inválido"),
    number: z
        .string()
        .nonempty("Insira o novo número para atualizar")
        .min(9, "O número deve ter pelo menos 9 dígitos")
        .max(9, "O número deve ter no máximo 9 dígitos")
        .regex(/^(?:\+244|244)?9[1-9]\d{7}$/, "Formato de telefone inválido (deve ser 9xx xxx xxx)"),
})