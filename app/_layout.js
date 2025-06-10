import { Stack } from "expo-router";
import React from "react";
import QueryProvider from "../providers/QueryProvider";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { SplashScreen } from "expo-router";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Inter: require("../assets/fonts/InterRegular.ttf"),
    "Inter-Bold": require("../assets/fonts/InterBold.ttf"),
    "Inter-Light": require("../assets/fonts/InterLight.ttf"),
    "Inter-Medium": require("../assets/fonts/InterMedium.ttf"),
    "Inter-Regular": require("../assets/fonts/InterRegular.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return (
      <View style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 10
      }}>
        <ActivityIndicator style={{ justifyContent: "center", alignItems: "center", backgroundColor: "#FCFCB" }} size="large" color="#0C6BFF" />
        <Text style={{
          fontSize: 14,
          fontWeight: "bold",
          color: "#0C6BFF"
        }}>Carregando</Text>
      </View>
    )
  }

  return (
    <QueryProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" />
      </Stack>
    </QueryProvider>
  );
}
