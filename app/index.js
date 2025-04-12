import { useEffect } from "react";
import { useRouter } from "expo-router";
import QueryProvider from "../providers/QueryProvider";
import { useAuth } from "../hooks/useAuth";
import { ActivityIndicator, View } from "react-native";

export default function Index() {
  const router = useRouter();
  const { authToken, isCheckingAuth } = useAuth()

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
