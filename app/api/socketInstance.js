import { io } from "socket.io-client";


const BACKEND_URL = process.env.EXPO_PUBLIC_BACKEND_URL || "https://angoway-app-backend.onrender.com"

export const socket = io(BACKEND_URL, {
    autoConnect: false,
    transports:["websocket"]
})