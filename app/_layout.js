import { Stack } from "expo-router";
import React from "react";
import QueryProvider from "../providers/QueryProvider";

export default function RootLayout() {
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
