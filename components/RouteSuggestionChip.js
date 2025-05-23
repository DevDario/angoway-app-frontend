import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { StyleSheet, Text, View,TouchableOpacity } from "react-native";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

export default function RouteSuggestionChip({ suggestion, onPress, style }) {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <View style={styles.iconBox}>
        <FontAwesomeIcon icon={faLocationDot} size={12} color="#0C6DFF" />
      </View>
      <View style={styles.content}>
        <View style={styles.routeDetails}>
          <Text style={styles.detailsTitle}>{suggestion}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

RouteSuggestionChip.propTypes = {
  suggestion: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  style: PropTypes.object,
};

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 70,
    flexDirection: "row",
    borderWidth: 1.2,
    borderColor: "#1111",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 10,
  },
  iconBox: {
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 60,
    borderWidth: 1.2,
    borderColor: "#1111",
  },
  content: {
    flex: 1,
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "space-between",
  },
  routeDetails: {
    flexDirection: "column",
    alignContent: "flex-start",
    justifyContent: "center",
    paddingLeft: 10,
  },
  detailsTitle: {
    fontSize: 16,
    fontWeight: 400,
    color: "#5555",
  },
  detailsDescription: {
    color: "#858585",
  },
  timeDetails: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    gap: 8,
    paddingRight: 10,
  },
  time: {
    fontWeight: 500,
  },
});
