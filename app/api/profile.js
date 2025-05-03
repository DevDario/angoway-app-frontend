import { getToken } from "../../utils/secureStore";
import { api } from "./axiosInstance";

export const updateCredentialsUseCase = async ({ email, number }) => {
    const token = await getToken()
    const config = {
        headers: {
            Accept: '*/*',
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        email: email,
        number: number
    }
    const response = await api.patch("/profile/", config)

    return response.data
}

export const updateAccessibilityUseCase = async ({ option }) => {
    const token = await getToken()
    const config = {
        headers: {
            Accept: '*/*',
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        option: option
    }
    const response = await api.patch("/user/", config)

    return response.data
}

export const updatePasswordUseCase = async ({ password }) => {
    const token = await getToken()
    const config = {
        headers: {
            Accept: '*/*',
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        password: password
    }
    const response = await api.put("/user/profile/", config)

    return response.data
}