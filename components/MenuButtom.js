import { TouchableOpacity, StyleSheet } from "react-native"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons"

export default function MenuButton({ onPress,customStyle }) {
    return (
        <TouchableOpacity style={[styles.container,customStyle]} onPress={onPress}>
            <FontAwesomeIcon icon={faAlignJustify} size={17} color="#212121" />
        </TouchableOpacity>
    )
}

export const styles = StyleSheet.create({
    container: {
        width: 45,
        height: 45,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fcfcfb",
        borderRadius: 40,
        borderWidth: 1,
        borderColor: "#1111"
    }
})