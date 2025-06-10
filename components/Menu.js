import { View, Text, StyleSheet, TouchableOpacity, Modal } from "react-native";
import ReturnButton from "./ReturnButton";
import { useRouter } from "expo-router";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function MenuComponent() {
    const router = useRouter()
    const [isVisible, setIsVisible] = useState(true)

    return (
        <Modal visible={isVisible} transparent animationType="fade">
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.logo}>Angoway®</Text>
                    <ReturnButton onPress={() => setIsVisible(!isVisible)} />
                </View>
                <View style={styles.content}>
                    <TouchableOpacity style={styles.optionButton} onPress={() => {
                        setIsVisible(false)
                        router.push("/")
                    }}>
                        <Text style={styles.optionButtonText}>Início</Text>
                        <FontAwesomeIcon icon={faChevronRight} size={15} color="#212121" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.optionButton} onPress={() => {
                        setIsVisible(false)
                        router.push("/profile")
                    }}>
                        <Text style={styles.optionButtonText}>Configurações</Text>
                        <FontAwesomeIcon icon={faChevronRight} size={15} color="#212121" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.optionButton} onPress={() => {
                        setIsVisible(false)
                        router.push("/profile/Support")
                    }}>
                        <Text style={styles.optionButtonText}>Apoio ao Cliente</Text>
                        <FontAwesomeIcon icon={faChevronRight} size={15} color="#212121" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.optionButton} onPress={() => {
                        setIsVisible(false)
                        router.push("/profile/About")
                    }}>
                        <Text style={styles.optionButtonText}>Sobre o Angoway</Text>
                        <FontAwesomeIcon icon={faChevronRight} size={15} color="#212121" />
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: "100%",
        backgroundColor: "#FFF",
        paddingHorizontal: 35,
        paddingVertical: 30,
    },
    header: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingBottom: 30,
    },
    logo: {
        color: "#0C6DFF",
        fontSize: 20,
        fontWeight: 700,
        fontFamily: "Inter-Bold"
    },
    optionButton: {
        width: "100%",
        fontSize: 16,
        paddingBottom: 13,
        color: "#212121",
        textAlign: "left",
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center"
    },
    optionButtonText: {
        fontSize: "22px",
        fontWeight: "700",
        fontFamily: "Inter-Bold"
    },
    content: {
        marginTop: 40,
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        alignContent: "flex-start",
        alignItems: "flex-start",
        justifyContent: "flex-start"
    }
})