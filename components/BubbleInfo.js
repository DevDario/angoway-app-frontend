import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";

const statusColors = [
  { status: "ativo", backgroundColor: "#CCFFE4", color: "#12AA59" },
  { status: "atrasado", backgroundColor: "#FFCFAA", color: "#C26A26" },
  { status: "cancelado", backgroundColor: "#FFAAAA", color: "#974343" },
];

export default function BubbleInfo({
  text = "ativo",
  icon = null,
  status = "ativo",
}) {
  const statusDetails = statusColors.find((item) => item.status === status) || {
    status: "default",
    backgroundColor: "gray",
    color: "#212121",
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: statusDetails.backgroundColor },
      ]}
    >
      {icon && (
        <FontAwesomeIcon icon={icon} style={{ color: statusDetails.color }} />
      )}
      <Text style={[styles.text, { color: statusDetails.color }]}>{text}</Text>
    </View>
  );
}

BubbleInfo.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.object,
  status: PropTypes.string,
};

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    gap: 9,
    borderRadius: 30,
    width: 70,
    height: 30,
  },
  text: {
    fontWeight: 500,
  },
});
