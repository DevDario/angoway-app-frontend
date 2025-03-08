import React from "react";
import { StyleSheet, View } from "react-native";
import SearchBar from "../../components/SearchBar";
import { useState } from "react";
import MapView from "react-native-maps";

export default function Index() {
  const [searchBarValue, setSearchBarValue] = useState("");

  function handleLocationSearch(query){
    setSearchBarValue(query)
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -8.8956,
          longitude: 13.2272,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsMyLocationButton={true}
        showsUserLocation={true}
        showsTraffic={true}
        toolbarEnabled={true}
        zoomEnabled={true}
        zoomControlEnabled={true}
      />
      <View style={styles.header}>
        <SearchBar 
          placeholder={"onde vamos hoje?"} 
          style={styles.searchBar}
          onChangeText={handleLocationSearch}
          value={searchBarValue}
        />
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    position: "absolute",
    top: 30,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  searchBar: {
    width: "90%",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
