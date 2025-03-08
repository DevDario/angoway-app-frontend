import React from "react";
import { StyleSheet, View } from "react-native";
import SearchBar from "../../components/SearchBar";

export default function Index() {
  const [searchBarValue, setSearchBarValue] = useState("");

  function handleLocationSearch(query){
    setSearchBarValue(query)
  }

  return (
    <View style={styles.container}>
    <View style={styles.header}>
      <SearchBar 
        placeholder={"onde vamos hoje?"} 
        style={styles.searchBar}
        onChangeText={handleLocationSearch}
        value={searchBarValue}
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
