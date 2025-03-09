import { Image, View, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function ProfileAvatar({ avatarUrl }) {
    return (
        <View style={styles.container}>

            {avatarUrl !== "" ? (
                <Image source={avatarUrl} width={70} height={70} />
            ) : (
                <FontAwesomeIcon icon={faUser} size={30} color="#FFF" />
            )}
        </View>
    )
}

ProfileAvatar.propTypes = {
    avatarUrl: PropTypes.string
}

export const styles = StyleSheet.create({
    container: {
        width: 70,
        height: 70,
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
        backgroundColor: "#0C6DFF",
        borderRadius: 100
    }
})