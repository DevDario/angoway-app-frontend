import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import PropTypes from "prop-types";

export default function Button({ text = "click", onPress, icon, style,textColor }) {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      {icon && <FontAwesomeIcon icon={icon} style={{ color: "#0C6DFF" }} />}
      <Text style={{
        fontWeight: "600",
        color: textColor
      }}>{text}</Text>
    </TouchableOpacity>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  icon: PropTypes.object,
  style: PropTypes.object,
};

export const styles = StyleSheet.create({
  button: {
    width: 170,
    height: 53,
    display: "flex",
    flexDirection: "row",
    gap: 10,
    borderColor: "#0C6DFF",
    borderWidth: 2,
    borderRadius: 30,
    backgroundColor: "none",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  text:{
    fontWeight:600,
  }
});
