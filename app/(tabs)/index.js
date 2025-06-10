import { StyleSheet, View, ActivityIndicator, Text } from "react-native";
import SearchBar from "../../components/SearchBar";
import { useState, useEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import requestLocationPermission from "../../utils/requestLocationPermission";
import { watchPositionAsync, LocationAccuracy } from "expo-location";
import { useBusesLocation } from "../../hooks/useBusesLocation";
import busMarker from "../../assets/marker.png"
import busStopMarker from "../../assets/busstopicon.png"
import { useGetStops } from "../../hooks/useStopsQuerys";
import { useRouter } from "expo-router";
import MenuButton from "../../components/MenuButtom";
import React from "react";
import MenuComponent from "../../components/Menu";

export default function Index() {
  const router = useRouter()
  const [locationQuery, setLocationQuery] = useState("");
  const [permissionGranted, setPermissionGranted] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false)
  const { buses } = useBusesLocation()
  const { stops } = useGetStops()

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
        <ActivityIndicator style={{ justifyContent: "center", alignItems: "center", backgroundColor: "#FCFCB" }} size="large" color="#0C6BFF" />
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
          latitude: -8.8390,
          longitude: 13.2894,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
        showsMyLocationButton={true}
        showsUserLocation={true}
        showsTraffic={true}
      >
        {buses.map((bus) => (
          <Marker
            key={bus.busId}
            coordinate={{
              latitude: bus.lat,
              longitude: bus.lng
            }}
            description={
              "Rota:" + bus.route +
              "\n Chega em(est):" + bus.estimatedTime +
              "\n Motorista" + bus.driverName + " - " + bus.driverExperience
            }
            image={busMarker}
          />
        ))}
        {stops.map((stop) => (
          <Marker
            key={stop.id}
            coordinate={{
              latitude: stop.lat,
              longitude: stop.lng
            }}
            description={stop.name}
            image={busStopMarker}
          />
        ))}
      </MapView>

      {isMenuVisible && (<MenuComponent />)}
      <View style={styles.header}>
        <View style={styles.headerContainer}>
          <SearchBar
            placeholder={"onde vamos hoje?"}
            style={styles.searchBar}
            onChangeText={handleLocationSearch}
            value={locationQuery}
          />
          <MenuButton onPress={() => setIsMenuVisible(!isMenuVisible)} customStyle={{
            marginLeft: "-18rem", marginTop: ".7rem"
          }} />
        </View>
      </View>

    </View>
  );
}

export const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: 10
  },
  permissionText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#0C6BFF"
  },
  container: {
    flex: 1,
  },
  header: {
    position: "absolute",
    top: 30,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  headerContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  searchBar: {
    width: "90%",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
