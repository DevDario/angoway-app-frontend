import { io } from "socket.io-client";


const BACKEND_URL = "http://172.20.10.4:3000"

export const socket = io(BACKEND_URL, {
    autoConnect: false,
    transports: ["websocket"]
})