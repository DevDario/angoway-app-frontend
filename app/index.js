import React from "react";
import Login from "./(stack)/auth/login";
import { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
  watchPositionAsync,
  LocationAccuracy
} from "expo-location";
import QueryProvider from "../providers/QueryProvider";

export default function Index() {
  const router = useRouter();
  const [location, setLocation] = useState(null);

  async function getLocationPermission() {
    const { granted } = await requestForegroundPermissionsAsync();

    if (granted) {
      const location = await getCurrentPositionAsync();
      setLocation(location);
    } else {
      Alert.alert("Precisamos de permissão para acessar sua localização");
    }
  }

  useEffect(() => {
    getLocationPermission();
  }, []);

  useEffect(() => {
    watchPositionAsync({
      accuracy: LocationAccuracy.Highest,
      timeInterval: 1000,
      distanceInterval: 1,
    }, (response) => {
      setLocation(response)
    })
  }, [])


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

  return (
    <QueryProvider>
      <Login />
    </QueryProvider>
  );
}
