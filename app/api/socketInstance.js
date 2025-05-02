import { io } from "socket.io-client";
import { getToken } from "../../utils/secureStore";


const BACKEND_URL = process.env.EXPO_PUBLIC_API_BASE_URL

export const socket = io(BACKEND_URL, {
    autoConnect: false,
    transports: ["websocket"],
    auth: async (cb) => {
        const token = await getToken();
        cb({ token });
    },
})