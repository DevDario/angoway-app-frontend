const { default: AsyncStorage } = require("@react-native-async-storage/async-storage")

async function saveFavoriteLocation(location) {
    try {
        const currentFavorites = await AsyncStorage.getItem("key_example")
        const newFavorites = [...currentFavorites, location]

        await AsyncStorage.setItem("@fav_locations", JSON.stringify(newFavorites))

    } catch (error) {
        console.log("ERROR: COULDNT SAVE TO STORAGE: " ,error)
    }
}

async function getFavoriteLocations() {
    const locations = await AsyncStorage.getItem("key_example")
    if (locations !== null) {
        return JSON.parse(locations)
    } else {
        console.log("ERROR: NO LOCATIONS WHERE FOUND");
        return []
    }
}

module.exports = {
    saveFavoriteLocation,
    getFavoriteLocations
}