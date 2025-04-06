import { Alert } from "react-native";
import {
    requestForegroundPermissionsAsync,
    getCurrentPositionAsync
} from "expo-location"

export default async function requestLocationPermission(){
    const { granted } = await requestForegroundPermissionsAsync();

    if (granted) {
      const location = await getCurrentPositionAsync();

    } else {
      Alert.alert("Precisamos de permissão para acessar sua localização");
    }

}