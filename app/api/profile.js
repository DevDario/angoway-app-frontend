import { getToken, getUserId } from "../../utils/secureStore";
import { api } from "./axiosInstance";

export const updateCredentialsUseCase = async ({ email, number }) => {
    const token = await getToken()
    const response = await api.patch("/profile/", {
        email: email,
        number: number
    }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    return response.data
}

export const updateAccessibilityUseCase = async ({ option }) => {
    const token = await getToken()
    const userId = await getUserId()
    const response = await api.put(`/user/${userId}`, { option }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    return response.data
}

export const updatePasswordUseCase = async ({ password }) => {

    const token = await getToken()
    const userId = await getUserId();

    if (!userId) throw new Error("User ID not found in token");

    const response = await api.put(`/user/profile/${userId}`, {
        password
    }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    return response.data
}

export const getProfileDetails = async () => {
    const token = await getToken()
    const response = await api.get("/user/me", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    return response.data
}