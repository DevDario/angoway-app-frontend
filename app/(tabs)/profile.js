import React, { useState } from "react";
import { View, Text, StyleSheet, Alert, ScrollView } from "react-native";
import ReturnButton from "../../components/ReturnButton";
import { useRouter } from "expo-router";
import ProfileAvatar from "../../components/ProfileAvatar";
import Input from "../../components/input";
import Button from "../../components/Button"
import BottomLineButton from "../../components/BottomLineButton";

export default function ProfilePage() {
  const [phoneNumber, setPhoneNumber] = useState("")
  const [email, setEmail] = useState("")
  const router = useRouter()


  function handleEmail(email) {
    setEmail(email)
  }

  function handlePhoneNumber(phoneNumber) {
    setPhoneNumber(phoneNumber)
  }

  function handleCredentialsUpdate() {
    Alert.alert("Alterações Confirmadas", "As suas alterações foram guardadas !")
  }

  return (
    <View style={styles.container}>
      <View style={styles.pageHeader}>
        <ReturnButton onPress={() => router.back()} />
        <Text style={styles.pageHeaderText}>Seu Perfil</Text>
      </View>

      <View style={styles.detailsHeader}>
        <Text style={styles.username}>John Doe</Text>
        <ProfileAvatar avatarUrl={null} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        keyboardShouldPersistTaps={"handled"}
        style={styles.scrollView}
      >
        <View style={styles.credentialsContent}>
          <Text style={styles.sectionLabel}>Detalhes do Perfil</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>
              Telefone
            </Text>
            <Input
              value={phoneNumber}
              placeholder={"+244 933 333 333"}
              onChangeText={handlePhoneNumber}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>
              Email
            </Text>
            <Input
              value={email}
              placeholder={"johndoe@gmail.com"}
              onChangeText={handleEmail}
            />
          </View>

          <Button
            text="Salvar Alterações"
            onPress={handleCredentialsUpdate}
            style={styles.button}
          />
        </View>

        <View style={styles.settingsContent}>
          <Text style={styles.inputLabel}>
            Definições
          </Text>

          <BottomLineButton
            text={"Alterar Senha"}
            onPress={() => router.navigate("/")}
          />

          <BottomLineButton
            text={"Configurações de Acessibilidade"}
            onPress={() => router.navigate("/")}
          />

          <BottomLineButton
            text={"Apoio"}
            onPress={() => router.navigate("/")}
          />

          <BottomLineButton
            text={"Sobre o Angoway"}
            onPress={() => router.navigate("/")}
          />

        </View>
      </ScrollView>
    </View>
  );
}


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    marginTop: 30,
    alignItems: "center",
  },
  pageHeader: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  pageHeaderText: {
    fontSize: 16,
    fontWeight: "700",
    paddingLeft: 85
  },
  detailsHeader: {
    width: "100%",
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  scrollView: {
    marginBottom:30
  },
  username: {
    fontSize: 22,
    fontWeight: "700",
  },
  credentialsContent: {
    width: "100%",
    alignContent: "flex-start",
    gap: 20,
  },
  inputContainer: {
    flexDirection: "column",
    gap: 10,
  },
  inputLabel: {
    color: "#212121",
    fontWeight: 500
  },
  sectionLabel: {
    color: "#444",
    fontWeight: 400
  },
  button: {
    width: "100%",
    alignItems: "center",
    backgroundColor: "#0C6DFF",
    marginTop: 20
  },
  settingsContent: {
    width: "100%",
    alignContent: "flex-start",
    gap: 40,
    paddingTop: 30
  },
})