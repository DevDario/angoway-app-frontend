import { StyleSheet, TouchableOpacity,Text } from "react-native";
import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"

export default function BottomLineButton({ onPress, style, text }) {
    return (
        <TouchableOpacity style={[styles.container,style]} onPress={onPress}>
            <Text style={[style]}>{text}</Text>
            <FontAwesomeIcon icon={faChevronRight} size={15} color="#212121"/>
        </TouchableOpacity>
    );
}

BottomLineButton.propTypes = {
    text: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    styles: PropTypes.object,
};

export const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 2,
        borderBottomColor: "#0C6DFF",
        width: "100%",
        fontSize: 16,
        paddingBottom: 13,
        color: "#212121",
        textAlign: "left",
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent:"center"
    },
});
