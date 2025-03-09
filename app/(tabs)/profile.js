import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ReturnButton from "../../components/ReturnButton";
import { useRouter } from "expo-router";

export default function ProfilePage() {

  const router = useRouter()

  return (
    <View style={styles.container}>
      <View style={styles.pageHeader}>
        <ReturnButton onPress={() => router.back()}/>
        <Text style={styles.pageHeaderText}>Seu Perfil</Text>
      </View>
    </View>
  );
}


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    marginTop: 30
  },
  pageHeader: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  pageHeaderText: {
    fontSize: 16,
    fontWeight: "700",
    paddingLeft:85
  }
})