import React, { useState } from "react";
import { ScrollView, Text, StyleSheet, View } from "react-native";
import Input from "../../../components/input";
import Button from "../../../components/Button";
import { useForm, Controller } from "react-hook-form";
import { Link, useRouter } from "expo-router";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { signupSchema } from "../../../schemas/signupSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import CheckBox from "../../../components/CheckBox"
import Select from "../../../components/Select"

export default function Signup() {
  const router = useRouter();
  const [hasDisability, setHasDisability] = useState(false);

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(signupSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      phoneNumber: "",
      password: "",
      disability: "",
    }
  })

  function handleSignup(type) {
    {
      /* should be replaced with API auth endpoints */
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
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, value } }) => (
                <>
                  <Input
                    placeholder={"Digite o seu email"}
                    value={value}
                    onChangeText={onChange}
                    keyboardType={"email-address"}
                  />
                  {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}
                </>
              )}
            />
          </View>

          <View style={styles.inputLabelContainer}>
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

          <View style={styles.inputLabelContainer}>
            <Text style={styles.inputLabel}>Senha</Text>
            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, value } }) => (
                <>
                  <Input
                    placeholder={"Digite a sua senha"}
                    value={value}
                    onChangeText={onChange}
                    keyboardType={"default"}
                  />
                  {errors.password && <Text style={styles.error}>{errors.password.message}</Text>}
                </>
              )}
            />
          </View>

          <View style={styles.inputLabelContainer}>
            <View>
              <CheckBox
                isChecked={hasDisability}
                onToggle={() => setHasDisability(!hasDisability)}
                text={"Sou portador de deficiência"}
              />
              {hasDisability &&
                <Controller
                  control={control}
                  name="disability"
                  render={({ field: { onChange, value } }) => (
                    <>
                      <Select
                        style={styles.select}
                        selected={value}
                        onSelect={onChange}
                        text={"Selecione sua deficiência"}
                        data={["Visual", "Auditiva", "Motora", "Intelectual"]}
                      />
                    </>
                  )}
                />
              }
            </View>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <Button
            text={"Criar"}
            style={styles.loginButton}
            onPress={() => handleSubmit(handleSignup("normal"))}
          />
        </View>

        <View style={styles.footerButtons}>
          <Text>Ou</Text>

          <Button
            text={"Criar com Facebook"}
            icon={faFacebook}
            style={styles.optionLoginButton}
            onPress={() => handleSubmit(handleSignup("facebook"))}
          />

          <Button
            text={"Criar com Google"}
            icon={faGoogle}
            style={styles.optionLoginButton}
            onPress={() => handleSubmit(handleSignup("google"))}
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
  error: {
    color: "#D9534F",
    fontSize: 13
  },
  select: {
    paddingTop: 20,
    width: "100%"
  }
});
