import { io } from "socket.io-client";
import { getToken } from "../../utils/secureStore";


const BACKEND_URL = "http://172.20.10.4:3000"

export const socket = io(BACKEND_URL, {
    autoConnect: false,
    transports: ["websocket"],
    auth: async (cb) => {
        const token = await getToken();
        cb({ token });
    },
})