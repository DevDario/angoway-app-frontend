import { getToken } from "../../utils/secureStore";
import { api } from "./axiosInstance";

export const updateCredentialsUseCase = async ({ email, number }) => {
    const token = await getToken()
    const response = await api.patch("/profile/", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        email,
        number
    })

    return response.data
}

export const updateAccessibilityUseCase = async ({option}) => {
    const token = await getToken()
    const response = await api.patch("user/7", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        option
    },)

    return response.data
}