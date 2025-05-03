import { useEffect } from "react";
import { useRouter } from "expo-router";
import QueryProvider from "../providers/QueryProvider";
import { useAuth } from "../hooks/useAuth";
import { ActivityIndicator, View, Text } from "react-native";

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
    );
  }

  return <QueryProvider />
}
