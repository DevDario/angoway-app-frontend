import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
  watchPositionAsync,
  LocationAccuracy
} from "expo-location";
import QueryProvider from "../providers/QueryProvider";
import { useAuth } from "../hooks/useAuth";
import { ActivityIndicator, View } from "react-native";

export default function Index() {
  const [location, setLocation] = useState(null);
  const router = useRouter();
  const { authToken, isCheckingAuth } = useAuth()

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


  //check if the user is authenticated
  useEffect(() => {
    if (!isCheckingAuth) {
      if (authToken) {
        router.replace("/routes");
      } else {
        router.replace("/auth/login");
      }
    }
  }, [authToken, isCheckingAuth]);

  if (isCheckingAuth) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#007bff" />
      </View>
    );
  }

  return <QueryProvider />
}
