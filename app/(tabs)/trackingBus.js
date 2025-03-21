import { ScrollView, StyleSheet, Text, View } from 'react-native';
import ReturnButton from '../../components/ReturnButton';
import MapView from 'react-native-maps';
import { router } from 'expo-router';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import RouteCard from '../../components/RouteCard';
import { useState } from 'react';

export default function TrackingBus() {
    const [showBusInfo, setShowBusInfo] = useState(false)

    const route = require("../../mockdata.json").trackingRoutes[0]

    return (
        <View style={styles.container}>
                <View style={styles.pageHeader}>
                    <ReturnButton onPress={() => router.navigate("/routes")} />
                    <Text style={styles.pageHeaderText}>Rota do Autocarro</Text>
                </View>

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
                    showsCompass={false}
                />

                <ScrollView
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    keyboardShouldPersistTaps={"handled"}
                    style={styles.scrollView}
                >
                    <View style={styles.trackingInfoContent}>
                        <RouteCard
                            key={route.id}
                            routeDetails={route}
                        />

                        <View style={styles.busInfoContainer}>
                            {showBusInfo ? (
                                <>
                                    <FontAwesomeIcon icon={faInfoCircle} size={15} color='#4444' /><Text style={styles.hintText}>
                                        Clique num autocarro para ver os detalhes
                                    </Text>
                                </>
                            ) : (
                                <>
                                    <FontAwesomeIcon icon={faInfoCircle} size={15} color='#4444' /><Text style={styles.hintText}>
                                        info do autocarro
                                    </Text>
                                </>
                            )}
                        </View>

                    </View>

                </ScrollView>
        </View>
    )
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    pageHeader: {
        width: "100%",
        height: "12%",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fcfcfb",
        paddingHorizontal: 30,
        borderBottomWidth: 1,
        borderBottomColor: "#2222"
    },
    pageHeaderText: {
        fontSize: 16,
        fontWeight: "700",
        paddingLeft: 60
    },
    map: {
        width: "100%",
        height: "60%",
    },
    scrollView: {
        position: "absolute",//FIX: results in loosing the hability to scroll the view
        top: "63%",
        height: "100%"
    },
    trackingInfoContent: {
        width: "100%",
        height: "100%",
        alignContent: "flex-start",
        gap: 20,
    },
    busInfoContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 5,
        paddingBottom: 20
    },
    hintText: {
        color: "#4444",
        fontWeight: 300
    }
})