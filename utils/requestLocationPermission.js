import {
    requestForegroundPermissionsAsync
} from "expo-location"

export default async function requestLocationPermission(){
  const { status } = await requestForegroundPermissionsAsync();

  if (status !== "granted") {
    console.warn("Permission to access location was denied");
    return false;
  }
  
  return true

}