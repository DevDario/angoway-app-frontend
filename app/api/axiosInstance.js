import axios from "axios"

export const api = axios.create({
    baseURL: process.env.EXPO_PUBLIC_API_BASE_URL || "https://angoway-app-backend.onrender.com",
    headers: {
        "Content-Type": "application/json"
    },
})
