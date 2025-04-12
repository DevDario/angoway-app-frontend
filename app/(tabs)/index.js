import { StyleSheet, View, ActivityIndicator, Text } from "react-native";
import SearchBar from "../../components/SearchBar";
import { useState, useEffect } from "react";
import MapView from "react-native-maps";
import requestLocationPermission from "../../utils/requestLocationPermission";
import { watchPositionAsync, LocationAccuracy } from "expo-location";

export default function Index() {
  const [locationQuery, setLocationQuery] = useState("");
  const [permissionGranted, setPermissionGranted] = useState(false);

  useEffect(() => {
    const requestPermissionForLocation = async () => {
      const granted = await requestLocationPermission();
      setPermissionGranted(granted);
    };
    requestPermissionForLocation();
  }, []);

  useEffect(() => {
    watchPositionAsync({
      accuracy: LocationAccuracy.Highest,
      timeInterval: 5000,
      distanceInterval: 10,
    }, (response) => {
      console.log(response)
    })
  }, [])

  if (!permissionGranted) {
    return (
        <View style={styles.loadingContainer}>
             <ActivityIndicator style={{justifyContent:"center", alignItems:"center", backgroundColor:"#FCFCB"}} size="large" color="#0C6BFF" />
             <Text style={styles.permissionText}>Aguardando Permissão</Text>
        </View>
   );
  }

  function handleLocationSearch(query) {
    setLocationQuery(query);
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
        zoomEnabled={true}
        zoomControlEnabled={true}
      />
      <View style={styles.header}>
        <SearchBar
          placeholder={"onde vamos hoje?"}
          style={styles.searchBar}
          onChangeText={handleLocationSearch}
          value={locationQuery}
        />
      </View>
      
    </View>
  );
}

export const styles = StyleSheet.create({
  loadingContainer:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"column",
    gap:10
},
permissionText:{
  fontSize:14,
  fontWeight:"bold",
  color:"#0C6BFF"
},
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
