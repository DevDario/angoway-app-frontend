import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

export default function AccessibilityItem({ text, onPress, style, isSelected }) {
    return (
        <TouchableOpacity
            style={[
                styles.button,
                style,
                isSelected ? styles.selectedOption : { backgroundColor: "none" },
            ]}
            onPress={onPress}
        >
            <Text
                style={[
                    styles.itemText,
                    isSelected
                        ? { color: "#0C6BFF" }
                        : { color: "#121212" },
                ]}
            >
                {text}
            </Text>
            {isSelected && <FontAwesomeIcon icon={faCheckCircle} size={13} color="#0C6BFF" />}
        </TouchableOpacity>
    );
}

export const styles = StyleSheet.create({
    button: {
        width: "100%",
        height: 53,
        gap: 5,
        flexDirection: "row",
        alignItems: "center",
        textAlign: "center",
        padding: "5px"
    },
    itemText: {
        color: "#0C6DFF",
        fontWeight: 600,
        fontFamily: "Inter-Medium",
    },
    selectedOption: {
    },
});
