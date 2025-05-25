import { api } from "../api/axiosInstance";
import { getToken } from "../../utils/secureStore";


export const getRoutes = async () => {
    const token = await getToken();
    const response = await api.get("/routes", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data;
};


export const getRoutesCount = async () => {
    const token = await getToken();
    const response = await api.get("/routes/count", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data;
};
