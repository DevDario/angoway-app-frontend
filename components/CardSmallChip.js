import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";

export default function CardSmallChip({ title, description, icon }) {
  return (
    <View style={styles.box}>
      <View style={styles.line}></View>
      <View style={styles.container}>
        <View style={styles.circle}>
          <FontAwesomeIcon icon={icon} size={15} color="#212121" />
        </View>
        <View style={styles.content}>
          <View style={styles.routeDetails}>
            <Text style={styles.detailsTitle}>{title}</Text>
            {description && (
              <Text style={styles.detailsDescription}>{description}</Text>
            )}
          </View>
        </View>
      </View>
    </View>
  );
}

CardSmallChip.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  icon: PropTypes.object.isRequired,
};

export const styles = StyleSheet.create({
  box: {
    position:"relative",
    display: "flex",
    flexDirection: "column",
    alignContent: "flex-start",
    alignItems: "flex-start",
    justifyContent:"flex-start"
  },
  line: {
    width: "2.2px",
    zIndex:"-1",
    height: "15px",
    marginVertical:0,
    paddingVertical:0,
    backgroundColor: "#DBE9FF",
    transform:"translateX(26px)"
  },
  container: {
    width: "100%",
    marginBottom: 3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 10,
  },
  circle: {
    width: 35,
    height: 35,
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#DBE9FF",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flex: 1,
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
  },
  routeDetails: {
    flexDirection: "column",
    alignContent: "flex-start",
    justifyContent: "center",
    paddingLeft: 10,
  },
  detailsTitle: {
    fontSize: 14,
    fontFamily: "Inter-Regular",
    color: "#212121",
  },
  detailsDescription: {
    color: "#858585",
    fontFamily: "Inter-Light",
  },
});
