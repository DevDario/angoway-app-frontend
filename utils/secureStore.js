import { MMKV } from "react-native-mmkv"

const TOKEN_KEY = process.env.EXPO_PUBLIC_TOKEN_KEY || "access_token"

export const storage = new MMKV({
    id: "secureStore",
    //encryptionKey: process.env.EXPO_PUBLIC_MMKV_ENCRYPTION_KEY
})

export function saveToken(token) {
    if (typeof window !== "undefined") {
        localStorage.setItem(TOKEN_KEY, token);
    } else {
        storage.set(TOKEN_KEY, token);
    }
}

export function getToken() {
    if (typeof window !== "undefined") {
        return localStorage.getItem(TOKEN_KEY);
    } else {
        return storage.getString(TOKEN_KEY);
    }
}

export function removeToken() {
    if (typeof window !== "undefined") {
        localStorage.removeItem(TOKEN_KEY);
    } else {
        storage.delete(TOKEN_KEY);
    }
}