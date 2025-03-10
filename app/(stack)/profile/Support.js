import { useRouter } from "expo-router";
import { View, Text, StyleSheet, Image } from "react-native";
import ReturnButton from "../../../components/ReturnButton";
import React from "react";
import Button from "../../../components/Button";

export default function Support() {
    const router = useRouter()

    return (
        <View style={styles.container}>
            <View style={styles.pageHeader}>
                <ReturnButton onPress={() => router.back()} />
                <Text style={styles.pageHeaderText}>Suporte</Text>
            </View>

            <View style={styles.pageTitle}>
                <Text style={[styles.logo]}>Apoio ao Cliente</Text>
            </View>

            <View style={styles.aboutContent}>
                <View style={{ flexDirection: "column", gap: 2 }}>
                    <Text style={[styles.description, { fontWeight: 700, fontSize: 17 }]}>Linha de Atendimento 24H</Text>
                </View>
                <View style={{ flexDirection: "column", gap: 1 }}>
                    <Text style={[styles.description, { color: "#858585", fontWeight: 300 }]}>
                        (Todos os dias, feriados e fins de semana)
                    </Text>
                    <Text style={[styles.description]}>
                        +244 912 345 678 | +244 987 654 321
                    </Text>
                    <Text style={[styles.description]}>
                        suporte@angoway.co.ao
                    </Text>
                </View>

                <Button
                    text="Voltar"
                    onPress={() => router.back()}
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
    pageTitle: {
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
        marginTop: 290
    },
})