import { Link, useRouter } from "expo-router";
import { View, Text, StyleSheet, Image } from "react-native";
import ReturnButton from "../../../components/ReturnButton";
import React from "react";
import Button from "../../../components/Button";

export default function About() {
    const router = useRouter()

    return (
        <View style={styles.container}>
            <View style={styles.pageHeader}>
                <ReturnButton onPress={() => router.navigate("/profile")} />
                <Text style={styles.pageHeaderText}>Sobre</Text>
            </View>

            <View style={styles.imageHeader}>
                <Text style={[styles.logo]}>ANGOWAY®</Text>
            </View>

            <View style={styles.aboutContent}>
                <Text style={styles.logo}>Sobre o Angoway</Text>
                <View style={styles.separator}></View>
                <Text style={styles.description}>
                    Angoway, o seu aplicativo de mobilidade Urbana
                    que lhe permite acompanhar as suas rotas,
                    verificar detalhes dos autocarros e
                    ver os horários de cada rota.
                </Text>
                <View style={{ flexDirection: "column", gap: 5 }}>
                    <Text style={[styles.description]}>Mais informações</Text>
                    <Link style={{ fontWeight: 700, fontSize: 17 }}
                        href={"https://google.com/?q=urban+transport+app"}
                    >www.angoway.co.ao
                    </Link>
                </View>
                <View style={{ flexDirection: "column", gap: 5 }}>
                    <Text style={[styles.description]}>
                        COPYRIGHT ANGOWAY®, LTDA, 2025
                    </Text>
                    <Text style={[styles.description]}>
                        Todos os Direitos Reservados
                    </Text>
                </View>

                <Button
                    text="Voltar"
                    onPress={() => router.navigate("/profile")}
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
    imageHeader: {
        paddingTop: 10,
        width: "100%",
        alignItems: "center",
    },
    logo: {
        color: "#0C6DFF",
        fontSize: 20,
        fontWeight: 700,
    },
    separator: {
        height: 2,
        width: "50%",
        backgroundColor: "#0C6DFF",
        alignItems: "center",
        justifyContent: "center",
    },
    description: {
        fontSize: 15,
        color: "#232323",
        textAlign: "center"
    },
    pageHeaderText: {
        fontSize: 16,
        fontWeight: "700",
        paddingLeft: 85
    },
    aboutContent: {
        paddingTop: 50,
        width: "100%",
        alignContent: "center",
        alignItems: "center",
        gap: 20,
    },
    button: {
        width: "100%",
        alignItems: "center",
        backgroundColor: "#0C6DFF",
        marginTop: 90
    },
})