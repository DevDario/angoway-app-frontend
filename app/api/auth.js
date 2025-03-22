import { api } from "./axiosInstance"

export const loginUseCase = async ({ phoneNumber, password }) => {
    const response = await api.post("/auth/login", {
        phoneNumber,
        password
    })
    return response.data
}

export const signupUseCase = async ({ email, phoneNumber, password }) => {
    const response = await api.post("/auth/signup", {
        email,
        phoneNumber,
        password
    })
    return response
}