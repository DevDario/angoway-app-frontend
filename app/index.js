import React, { useRef } from "react";
import Login from "./auth/login";
import { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
  watchPositionAsync,
  LocationAccuracy
} from "expo-location";

export default function Index() {
  const router = useRouter();
  const [location, setLocation] = useState(null);

  // gets user permission to access location
  async function getLocationPermission() {
    const { granted } = await requestForegroundPermissionsAsync();

    if (granted) {

      const location = await getCurrentPositionAsync();
      setLocation(location);
      console.log(location);

    } else {
      Alert.alert("Precisamos de permissão para acessar sua localização");
    }
  }

  useEffect(() => {
    getLocationPermission();
  }, []);

  // watches user location

  useEffect(() => {
    watchPositionAsync({
      accuracy: LocationAccuracy.Highest,
      timeInterval:1000,
      distanceInterval:1,
    },(response)=>{
      console.log("NEW LOCATION -> ", response)
      setLocation(response)
    })
  },[])
  
  // saves user last known and current location using Async Storage

  //check if the user is authenticated (mock)

  useEffect(() => {
    const timeout = setTimeout(() => {
      const isLogged = false;

      if (isLogged) {
        router.navigate("/routes");
      } else {
        router.navigate("auth/login");
      }
    }, 1000);

    clearTimeout(timeout);
  }, []);

  return <Login />;
}
