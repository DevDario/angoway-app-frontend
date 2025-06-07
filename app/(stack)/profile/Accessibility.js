import { useRouter } from "expo-router";
import { View, Text, StyleSheet } from "react-native";
import ReturnButton from "../../../components/ReturnButton";
import Button from "../../../components/Button";
import { useState } from "react";
import AccessibilityItem from "../../../components/AccessibilityItem";
import AlertModal from "../../../components/AlertModal";
import { useUpdateAccessibility } from "../../../hooks/useProfile"

const options = [
    {
        "id": 1,
        "name": "Eu sou cego ou tenho deficiência visual",
    },
    {
        "id": 2,
        "name": "Eu sou surdo ou tenho deficiência auditiva",
    },
    {
        "id": 3,
        "name": "Eu sou deficiente físico",
    },
    {
        "id": 4,
        "name": "Eu sou mudo ou tenho dificuldade \nem me expressar",
    },
    {
        "id": 5,
        "name": "Eu sou cadeirante",
    }
]

export default function Accessibility() {
    const router = useRouter()
    const [selectedOption, setSelectedOption] = useState(null)
    const { mutateAsync: update, successMessage, errorMessage } = useUpdateAccessibility()

    async function handleSaveModifications(disability) {
        await update(disability)
    }

    return (
        <View style={styles.container}>
            <View style={styles.pageHeader}>
                <ReturnButton onPress={() => router.navigate("/profile")} />
                <Text style={styles.pageHeaderText}>Acessibilidade</Text>
            </View>
            <View style={styles.content}>
                <View style={styles.optionsList}>
                    {options.map((option) => (
                        <AccessibilityItem
                            text={option.name}
                            isSelected={option.name === selectedOption}
                            onPress={() => setSelectedOption(option.name)}
                            key={option.id}
                        />
                    ))}
                </View>

                {errorMessage && (
                    <AlertModal
                        text={errorMessage}
                        type={"error"}
                    />
                )}

                {successMessage && (
                    <AlertModal
                        text={successMessage}
                        type={"success"}
                    />
                )}

                <Button
                    text="Salvar Alterações"
                    onPress={() => handleSaveModifications(selectedOption)}
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
        fontWeight: "700",
        paddingLeft: 85
    },
    content: {
        paddingTop: 30,
        width: "100%",
        alignContent: "flex-start",
        gap: 20,
    },
    button: {
        width: "100%",
        alignItems: "center",
        backgroundColor: "#0C6DFF",
        marginTop: 25,
    },
})