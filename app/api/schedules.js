import { api } from "./axiosInstance"
import { getToken } from "../../utils/secureStore";

export const getRegisteredSchedules = async () => {
    const token = await getToken()
    const response = await api.get("/schedules/", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    return response.data
}

export const searchScheduleByRouteUseCase = async (query) => {
    const token = await getToken()
    const response = await api.get("/schedules/", {
        params: {
            "query":query
        },
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return response.data
}