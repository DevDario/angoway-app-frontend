import AsyncStorage from '@react-native-async-storage/async-storage'

const TOKEN_KEY = process.env.EXPO_PUBLIC_TOKEN_KEY || 'access_token'
const PROFILE_DATA_KEY = process.env.EXPO_PUBLIC_PROFILE_DATA_KEY || 'profile_data'

export async function saveToken(token) {
    try {
        await AsyncStorage.setItem(TOKEN_KEY, token)
    } catch (error) {
        console.error('Error saving token:', error)
    }
}

export async function getToken() {
    try {
        return await AsyncStorage.getItem(TOKEN_KEY)
    } catch (error) {
        console.error('Error getting token:', error)
        return null
    }
}

export async function removeToken() {
    try {
        await AsyncStorage.removeItem(TOKEN_KEY)
    } catch (error) {
        console.error('Error removing token:', error)
    }
}

export async function saveProfileData(data) {
    try {
        const jsonValue = JSON.stringify(data)
        await AsyncStorage.setItem(PROFILE_DATA_KEY, jsonValue)
    } catch (error) {
        console.error('Error saving profile data:', error)
    }
}

export async function getProfileData() {
    try {
        const jsonValue = await AsyncStorage.getItem(PROFILE_DATA_KEY)
        return jsonValue != null ? JSON.parse(jsonValue) : null
    } catch (error) {
        console.error('Error getting profile data:', error)
        return null
    }
}

export async function removeProfileData() {
    try {
        await AsyncStorage.removeItem(PROFILE_DATA_KEY)
    } catch (error) {
        console.error('Error removing profile data:', error)
    }
}
