import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

export default function Suggestion({ text, onPress, style, isSelected }) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        style,
        isSelected ? styles.selectedButton : { backgroundColor: "#C7D4FB" },
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.suggestionText,
          isSelected
            ? { color: "#FFF", fontWeight: 600 }
            : { color: "#0C6DFF" },
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
}

Suggestion.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  style: PropTypes.object,
  isSelected: PropTypes.bool,
};

export const styles = StyleSheet.create({
  button: {
    width: "12rem",
    height: 53,
    gap: 10,
    borderRadius: 90,
    backgroundColor: "#C7D4FB",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    paddingHorizontal:"4px"
  },
  suggestionText: {
    color: "#0C6DFF",
    fontWeight: 200,
    fontSize:15
  },
  selectedButton: {
    backgroundColor: "#0C6DFF",
    color: "#FFF",
  },
});
