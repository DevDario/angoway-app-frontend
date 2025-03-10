import { useRouter } from "expo-router";
import { View, Text, StyleSheet, Alert } from "react-native";
import ReturnButton from "../../../components/ReturnButton";
import { useState } from "react";
import React from "react";
import Button from "../../../components/Button";
import Input from "../../../components/input";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCircleInfo, faWarning } from "@fortawesome/free-solid-svg-icons";

export default function ChangePassword() {
    const router = useRouter()
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [passwordError, setPasswordError] = useState("")


    function handlePassword(password) {
        setPassword(password)
    }

    function handleConfirmPassword(confirmPassword) {
        setConfirmPassword(confirmPassword)
    }

    function handlePasswordUpdate() {
        if ((password.length === 0 && confirmPassword.length === 0) || (confirmPassword !== password)) {
            setPasswordError("Digite a nova senha nos campos")
        } else if (password.length < 8 && confirmPassword.length < 8) {
            setPasswordError("A senha deve conter pelo menos 8 carácteres")
        } else {
            Alert.alert("As suas alterações foram guardadas !")
            setPassword("")
            setConfirmPassword("")
            setPasswordError("")
            router.navigate("/profile")
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.pageHeader}>
                <ReturnButton onPress={() => router.back()} />
                <Text style={styles.pageHeaderText}>Alterar Senha</Text>
            </View>

            <View style={styles.credentialsContent}>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>
                        Nova Senha
                    </Text>
                    <Input
                        value={password}
                        placeholder={""}
                        onChangeText={handlePassword}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>
                        Digite Novamente
                    </Text>
                    <Input
                        value={confirmPassword}
                        placeholder={""}
                        onChangeText={handleConfirmPassword}
                    />
                </View>

                <View style={{ height: 20, paddingBottom: 30 }}>
                    {passwordError ? (
                        <View style={styles.infoContent}>
                            <FontAwesomeIcon icon={faWarning} size={15} color="#e8111F" />
                            <Text style={{
                                fontWeight: 700,
                                color: "#e8111F",
                                fontSize: 13,
                            }}>
                                {passwordError}
                            </Text>
                        </View>
                    ) : (
                        <View style={styles.infoContent}>
                            <FontAwesomeIcon icon={faCircleInfo} size={15} color="#858585" />
                            <Text style={{
                                fontWeight: 300,
                                color: "#858585",
                                fontSize: 13,
                                fontStyle: "italic"
                            }}>
                                Crie sempre uma senha fácil de lembrar, mas  que seja segura
                            </Text>
                        </View>
                    )}
                </View>

                <Button
                    text="Salvar Alterações"
                    onPress={handlePasswordUpdate}
                    style={styles.button}
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
        fontWeight: "700",
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
        fontWeight: 500
    },
    button: {
        width: "100%",
        alignItems: "center",
        backgroundColor: "#0C6DFF"
    },
    infoContent: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 10,
    }
})