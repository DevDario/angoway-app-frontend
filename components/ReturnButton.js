import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { TouchableOpacity, StyleSheet } from "react-native"
import PropTypes from "prop-types"

export default function ReturnButton({onPress}) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <FontAwesomeIcon icon={faChevronLeft} size={17} color="#212121"/>
        </TouchableOpacity>
    )
}

export const styles = StyleSheet.create({
    container: {
        width: 45,
        height:45,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fcfcfb",
        borderRadius:40,
        borderWidth: 1,
        borderColor:"#1111"
    }
})

ReturnButton.propTypes = {
    onPress: PropTypes.func.isRequired
}