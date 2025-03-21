import React from "react";
import { View, Text, StyleSheet, Alert, ScrollView } from "react-native";
import ReturnButton from "../../components/ReturnButton";
import { useRouter } from "expo-router";
import ProfileAvatar from "../../components/ProfileAvatar";
import Input from "../../components/input";
import Button from "../../components/Button"
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateCredentialsSchema } from "../../schemas/updateCredentialsSchema";
import BottomLineButton from "../../components/BottomLineButton";

export default function ProfilePage() {
  const router = useRouter()

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(updateCredentialsSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      phoneNumber: "",
    },
  })

  function handleCredentialsUpdate() {
    Alert.alert("Alterações Confirmadas", "As suas alterações foram guardadas !")
  }

  return (
    <View style={styles.container}>
      <View style={styles.pageHeader}>
        <ReturnButton onPress={() => router.navigate("/")} />
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
            <Controller
              control={control}
              name="phoneNumber"
              render={({ field: { onChange, value } }) => (
                <>
                  <Input
                    placeholder={"Novo número"}
                    value={value}
                    onChangeText={onChange}
                    keyboardType={"phone-pad"}
                  />
                  {errors.phoneNumber && <Text style={styles.error}>{errors.phoneNumber.message}</Text>}
                </>
              )}

            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>
              Email
            </Text>
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, value } }) => (
                <>
                  <Input
                    placeholder={"Novo email"}
                    value={value}
                    onChangeText={onChange}
                    keyboardType={"email-address"}
                  />
                  {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}
                </>
              )}
            />
          </View>

          <Button
            text="Salvar Alterações"
            onPress={handleSubmit(handleCredentialsUpdate)}
            style={styles.button}
          />
        </View>

        <View style={styles.settingsContent}>
          <Text style={styles.inputLabel}>
            Definições
          </Text>

          <BottomLineButton
            text={"Alterar Senha"}
            onPress={() => router.navigate("profile/ChangePassword")}
          />

          <BottomLineButton
            text={"Configurações de Acessibilidade"}
            onPress={() => router.navigate("/profile/Accessibility")}
          />

          <BottomLineButton
            text={"Apoio"}
            onPress={() => router.navigate("/profile/Support")}
          />

          <BottomLineButton
            text={"Sobre o Angoway"}
            onPress={() => router.navigate("/profile/About")}
          />

        </View>

        <View style={styles.operationsContent}>
          <Text style={styles.inputLabel}>
            Acções
          </Text>

          <BottomLineButton
            text={"Terminar Sessão"}
            onPress={() => router.navigate("/auth/login")}
            style={styles.boldText}
          />

          <BottomLineButton
            text={"Apagar Conta"}
            onPress={() => router.navigate("/auth/signup")}
            style={styles.boldText}
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
    marginBottom: 30
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
  operationsContent: {
    width: "100%",
    alignContent: "flex-start",
    gap: 40,
    paddingTop: 30
  },
  boldText: {
    fontWeight: 900
  },
  error: {
    color: "#D9534F",
    fontSize: 13
  },
})