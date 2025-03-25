import { api } from "./axiosInstance";

export const updateCredentialsUseCase = async ({ email, number }) => {
    const response = await api.patch("/profile/", {
        email,
        number
    })

    return response.data
}