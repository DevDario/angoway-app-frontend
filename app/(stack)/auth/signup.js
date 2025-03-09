import React from "react";
import { ScrollView, Text, StyleSheet, View } from "react-native";
import Input from "../../../components/input";
import Button from "../../../components/Button";
import { Link, useRouter } from "expo-router";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

export default function Signup() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(type) {
    {
      /* should be replaced with API auth endpoints */
    }
    if (type == "normal" || type == "facebook" || type == "google") {
      router.push("/routes");
    }
  }

  function handleEmail(email) {
    setEmail(email)
  }

  function handlePhoneNumber(number) {
    setPhoneNumber(number)
  }

  function handlePassword(password) {
    setPassword(password)
  }

  return (
    <ScrollView
      style={[styles.container]}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Criar Conta</Text>
        <Text style={styles.headerDescription}>
          Já tem uma conta ?{" "}
          <Link href={"/auth/login"} style={styles.highlight}>
            Inicie Sessão
          </Link>{" "}
        </Text>
      </View>

      <View style={styles.content}>
        <View style={styles.inputContainer}>
          <View style={styles.inputLabelContainer}>
            <Text style={styles.inputLabel}>Seu Email</Text>
            <Input
              placeholder={"Digite o seu E-mail"}
              value={email}
              onChangeText={handleEmail}
            />
          </View>

          <View style={styles.inputLabelContainer}>
            <Text style={styles.inputLabel}>Seu Número</Text>
            <Input
              placeholder={"+244"}
              value={phoneNumber}
              onChangeText={handlePhoneNumber}
            />
          </View>

          <View style={styles.inputLabelContainer}>
            <Text style={styles.inputLabel}>Senha</Text>
            <Input
              placeholder={"Sua Senha"}
              value={password}
              onChangeText={handlePassword}
            />
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <Button
            text={"Criar"}
            style={styles.loginButton}
            onPress={() => handleLogin("normal")}
          />
        </View>

        <View style={styles.footerButtons}>
          <Text>Ou</Text>

          <Button
            text={"Criar com Facebook"}
            icon={faFacebook}
            style={styles.optionLoginButton}
            onPress={() => handleLogin("facebook")}
          />

          <Button
            text={"Criar com Google"}
            icon={faGoogle}
            style={styles.optionLoginButton}
            onPress={() => handleLogin("google")}
          />
        </View>
      </View>
    </ScrollView>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    paddingBottom: 30,
    marginRight: 10,
  },
  header: {
    paddingTop: 20,
    paddingBottom: 50,
    paddingLeft: 30,
    alignSelf: "flex-start",
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: "700",
  },
  headerDescription: {
    fontSize: 16,
    fontWeight: "200",
    paddingTop: 15,
  },
  content: {
    width: "100%",
    alignItems: "center",
    gap: 30,
  },
  inputContainer: {
    width: "100%",
    gap: 35,
    paddingLeft: 30,
    alignItems: "flex-start",
  },
  inputLabel: {
    fontSize: 15,
    color: "#ACACAC",
  },
  inputLabelContainer: {
    width: "90%",
    gap: 10,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  buttonContainer: {
    width: "90%",
    paddingTop: 10,
    alignItems: "flex-end",
    paddingRight: 20,
  },
  loginButton: {
    width: 173,
  },
  highlight: {
    color: "#0C6DFF",
    fontWeight: "700",
  },
  footerButtons: {
    width: "100%",
    paddingTop: 40,
    gap: 20,
    alignItems: "center",
  },
  optionLoginButton: {
    width: 300,
  },
});
