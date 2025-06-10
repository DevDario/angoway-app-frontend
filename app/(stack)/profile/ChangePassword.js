import { useRouter } from "expo-router";
import { View, Text, StyleSheet, Alert, ActivityIndicator } from "react-native";
import ReturnButton from "../../../components/ReturnButton";
import Button from "../../../components/Button";
import Input from "../../../components/input";
import React from "react";
import AlertModal from "../../../components/AlertModal";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { updatePasswordSchema } from "../../../schemas/updatePasswordSchema";
import { useUpdatePassword } from "../../../hooks/useProfile";

export default function ChangePassword() {
    const router = useRouter()
    const { mutateAsync: update, successMessage, errorMessage,isPending } = useUpdatePassword()

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(updatePasswordSchema),
        mode: "onChange",
        defaultValues: {
            password: "",
            confirmPassword: "",
        },
    })

    async function handlePasswordUpdate() {
        await update({ password: control._formValues["password"] })

        if (successMessage) {
            setIsModalVisible(true)
        }
    }

    if (isPending) {
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
                    fontFamily: "Inter-Medium",
                    color: "#0C6BFF"
                }}>Guardando Alterações</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.pageHeader}>
                <ReturnButton onPress={() => router.navigate("/profile")} />
                <Text style={styles.pageHeaderText}>Alterar Senha</Text>
            </View>

            <View style={styles.credentialsContent}>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>
                        Nova Senha
                    </Text>
                    <Controller
                        control={control}
                        name="password"
                        render={({ field: { onChange, value } }) => (
                            <>
                                <Input
                                    placeholder={"Digite a nova senha"}
                                    value={value}
                                    onChangeText={onChange}
                                    keyboardType={"default"}
                                />
                                {errors.password && <Text style={styles.error}>{errors.password.message}</Text>}
                            </>
                        )}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>
                        Digite Novamente
                    </Text>
                    <Controller
                        control={control}
                        name="confirmPassword"
                        render={({ field: { onChange, value } }) => (
                            <>
                                <Input
                                    placeholder={"Digite a mesma senha"}
                                    value={value}
                                    onChangeText={onChange}
                                    keyboardType={"default"}
                                />
                                {errors.confirmPassword && <Text style={styles.error}>{errors.confirmPassword.message}</Text>}
                            </>
                        )}
                    />
                </View>

                {
                    successMessage && (
                        <AlertModal
                            type={"success"}
                            text={`${successMessage}`}
                        />
                    )
                }

                {
                    errorMessage && (
                        <AlertModal
                            type={"error"}
                            text={`${errorMessage}`}
                        />
                    )
                }

                <Button
                    text="Salvar Alterações"
                    onPress={handleSubmit(handlePasswordUpdate)}
                    style={styles.button}
                    textColor={"#FFF"}
                />
            </View>
        </View>
    )
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 30,
        marginTop: 30,
        alignItems: "center"
    },
    pageHeader: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
    },
    pageHeaderText: {
        fontSize: 16,
        fontFamily: "Inter-Bold",
        paddingLeft: 85
    },
    credentialsContent: {
        paddingTop: 30,
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
        fontFamily: "Inter-Medium"
    },
    button: {
        width: "100%",
        alignItems: "center",
        backgroundColor: "#0C6DFF",
        marginTop: 25,
    },
    infoContent: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 10,
    },
    error: {
        color: "#D9534F",
        fontSize: 13,
        fontFamily: "Inter-Regular",
    },
})