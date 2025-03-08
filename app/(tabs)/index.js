import React from "react";
import { StyleSheet, View } from "react-native";
import SearchBar from "../../components/SearchBar";

export default function Index() {
  return (
    <View style={styles.container}>
    <View style={styles.header}>
      <SearchBar 
        placeholder={"onde vamos hoje?"} 
        style={styles.searchBar}
      />
    </View>
    <View style={styles.content}>

    </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width:"100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  searchBar: {
    width: "90%",
  },
});
