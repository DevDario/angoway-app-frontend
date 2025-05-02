import { ScrollView, StyleSheet, Text, View } from 'react-native';
import ReturnButton from '../../components/ReturnButton';
import MapView from 'react-native-maps';
import { router } from 'expo-router';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import RouteCard from '../../components/RouteCard';
import { useState } from 'react';
import BusInfoCard from '../../components/BusInfoCard';

export default function TrackingBus() {
    const [showBusInfo, setShowBusInfo] = useState(false)

    const route = require("../../mockdata.json").trackingRoutes[0]
    const mockDetails = require("../../mockdata.json").busDetails

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
                />

            <View style={styles.trackingContainer}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    keyboardShouldPersistTaps={"handled"}
                    style={styles.scrollView}
                    horizontal={true}
                >
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
                                    <BusInfoCard
                                     busDetails={mockDetails}
                                    />
                                </>
                            )}
                        </View>
                </ScrollView>
            </View>
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
    trackingContainer: {
        position: "absolute",
        left:0,
        right:0,
        bottom:25,
        alignItems:"center"
    },
    scrollView: {
        width: "100%",
        height: "100%",
        alignContent: "center",
        paddingHorizontal:30,
        gap: 20,
    },
    busInfoContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal:20,
        paddingBottom: 10
    },
    hintText: {
        color: "#4444",
        fontWeight: 300
    }
})