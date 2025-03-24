import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import PropTypes from "prop-types";

export default function CheckBox({ isChecked, onToggle, text }) {
    return (
        <TouchableOpacity onPress={onToggle} style={styles.checkboxContainer}>
            <View style={[styles.checkbox, isChecked && styles.checked]}>
                {isChecked && <FontAwesomeIcon icon={faCheck} size={15} color="#fff" />}
            </View>
            <Text style={styles.label}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

CheckBox.propTypes = {
    isChecked: PropTypes.bool.isRequired,
    onToggle: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
    checkboxContainer: {
        flexDirection: "row",
        alignItems: "flex-start",
        alignContent: "center",
        justifyContent: "space-between",
        paddingVertical: 10,
        gap: 5,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 2,
        borderColor: "#0C6DFF",
        borderRadius: 4,
        marginRight: 8,
    },
    checked: {
        backgroundColor: "#0C6DFF",
        alignContent: "center"
    },
    label: {
        fontSize: 16,
        fontWeight: "600",
        color: "#555"
    },
})