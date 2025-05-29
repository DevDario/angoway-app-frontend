import { getUserId } from "../../utils/secureStore"
import { api } from "./axiosInstance"

export const loginUseCase = async ({ number, password }) => {
    const response = await api.post("/auth/login", {
        number,
        password
    })
    return response.data
}

export const signupUseCase = async ({ name, email, number, password, disability }) => {
    const response = await api.post("/user", {
        name,
        email,
        number,
        password,
        disability
    })
    return response
}

export const deleteAccountUseCase = async () => {
    const userId = await getUserId()
    const response = await api.delete(`/user/${userId}`)
    return response.data
}