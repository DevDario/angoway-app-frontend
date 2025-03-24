import { api } from "./axiosInstance"

export const loginUseCase = async ({ number, password }) => {
    const response = await api.post("/auth/login", {
        number,
        password
    })
    return response.data
}

export const signupUseCase = async ({ email, number, password }) => {
    const response = await api.post("/auth/signup", {
        email,
        number,
        password
    })
    return response
}