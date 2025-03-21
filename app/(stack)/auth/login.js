import React from "react";
import { useForm, Controller } from "react-hook-form";
import { ScrollView, Text, StyleSheet, View } from "react-native";
import Input from "../../../components/input";
import Button from "../../../components/Button";
import { Link, useRouter } from "expo-router";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { loginSchema } from "../../../schemas/loginSchema"
import { zodResolver } from "@hookform/resolvers/zod";

export default function Login() {
  const router = useRouter();

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
    defaultValues: {
      phoneNumber: "",
      password: "",
    }
  })

  function handleLogin(type) {
    {
      /* should be replaced with API auth endpoint */
    }

    if (type == "normal" || type == "facebook" || type == "google") {
      router.push("/routes");
    }
  }

  return (
    <ScrollView
      style={[styles.container]}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Iniciar Sessão</Text>
        <Text style={styles.headerDescription}>
          Ainda não tem uma conta ?{" "}
          <Link href={"/auth/signup"} style={styles.highlight}>
            Criar agora
          </Link>{" "}
        </Text>
      </View>

      <View style={styles.content}>
        <View style={styles.inputContainer}>
          <View style={styles.phoneInputContainer}>
            <Text style={styles.inputLabel}>Seu Número</Text>
            <Controller
              control={control}
              name="phoneNumber"
              render={({ field: { onChange, value } }) => (
                <>
                  <Input
                    placeholder={"Digite o seu número"}
                    value={value}
                    onChangeText={onChange}
                    keyboardType={"phone-pad"}
                  />
                  {errors.phoneNumber && <Text style={styles.error}>{errors.phoneNumber.message}</Text>}
                </>
              )}

            />
          </View>

          <View style={styles.passwordInputContainer}>
            <Text style={styles.inputLabel}>Senha</Text>
            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, value } }) => (
                <>
                  <Input
                    placeholder="Digite sua senha"
                    value={value}
                    onChangeText={onChange}
                    keyboardType={"default"}
                  />
                  {errors.password && <Text style={styles.error}>{errors.password.message}</Text>}
                </>
              )}
            />
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <Button
            text={"Entrar"}
            style={styles.loginButton}
            onPress={() => handleSubmit(handleLogin("normal"))}
          />
        </View>

        <View style={styles.footerButtons}>
          <Text>Ou</Text>

          <Button
            text={"Entrar com Facebook"}
            icon={faFacebook}
            style={styles.optionLoginButton}
            onPress={() => handleSubmit(handleLogin("facebook"))}
          />

          <Button
            text={"Entrar com Google"}
            icon={faGoogle}
            style={styles.optionLoginButton}
            onPress={() => handleSubmit(handleLogin("google"))}
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
  phoneInputContainer: {
    width: "90%",
    gap: 10,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  passwordInputContainer: {
    width: "90%",
    gap: 10,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  buttonContainer: {
    width: "100%",
    paddingTop: 10,
    alignItems: "flex-end",
    paddingRight: 30,
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
  error: {
    color: "#D9534F", // A softer red color
    fontSize: 13
  },
});
