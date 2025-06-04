import { ScrollView, StyleSheet, Text, View } from 'react-native';
import ReturnButton from '../../components/ReturnButton';
import MapView, { Marker } from 'react-native-maps';
import { router } from 'expo-router';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import RouteCard from '../../components/RouteCard';
import { useEffect, useState } from 'react';
import BusInfoCard from '../../components/BusInfoCard';
import { useBusesLocation } from "../../hooks/useBusesLocation";
import { useLocalSearchParams } from 'expo-router';
import busMarker from "../../assets/marker.png"
import { useGetRouteDetailsSuggestions } from '../../hooks/useRouteQuerys';

export default function TrackingBus() {
    const [showBusInfo, setShowBusInfo] = useState(false)
    const [busData, setBusData] = useState(null)
    const [routeDetails, setRouteDetails] = useState([])
    const { buses } = useBusesLocation()
    const { routeName } = useLocalSearchParams()

    const { data: suggestionsData, isError } = useGetRouteDetailsSuggestions(routeName)

    useEffect(() => {
        if (suggestionsData !== undefined || !isError) {
            const dataArr = Array.isArray(suggestionsData) ? suggestionsData : []
            setRouteDetails(dataArr[0])
        }
    }, [])

    async function handleShowBusInfo(data) {
        setBusData(data)
        setShowBusInfo(true)
    }

    return (
        <View style={styles.container} onTouchStart={() => setShowBusInfo(false)}>
            <View style={styles.pageHeader}>
                <ReturnButton onPress={() => router.navigate("/routes")} />
                <Text style={styles.pageHeaderText}>Rota do Autocarro</Text>
            </View>

            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: -8.8390,
                    longitude: 13.2894,
                    latitudeDelta: 0.05,
                    longitudeDelta: 0.05,
                }}
            >
                {buses.map((bus) => (
                    <Marker
                        key={bus.busId}
                        coordinate={{
                            latitude: bus.lat,
                            longitude: bus.lng
                        }}
                        image={busMarker}
                        onPress={() => handleShowBusInfo(bus)}
                    />
                ))}
            </MapView>

            <View style={styles.trackingContainer}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    keyboardShouldPersistTaps={"handled"}
                    style={styles.scrollView}
                    horizontal={true}
                >
                    <RouteCard
                        destination={routeDetails.destination}
                        destinationDescription={"Seu Destino"}
                        distanceKM={""}
                        estimatedMinutes={""}
                        estimatedTime={""}
                        id={routeDetails.id}
                        origin={routeDetails.origin}
                        originDescription={"Paragem mais próxima de sí"}
                        price={"150 KZ"}
                        suggestedRoute={routeDetails.name}
                        suggestedRouteDescription={"Rota do autocarro à apanhar"}
                        key={"route-details-card"}
                    />


                    <View style={styles.busInfoContainer}>
                        {showBusInfo !== true ? (
                            <View style={{
                                flexDirection: "row",
                                gap: 5,
                                alignContent: "center",
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                                <FontAwesomeIcon icon={faInfoCircle} size={15} color='#4444' />
                                <Text style={styles.hintText}>
                                    Clique num autocarro para ver os detalhes
                                </Text>
                            </View>
                        ) : (
                            <>
                                <BusInfoCard
                                    busNIA={busData.busNia || "" }
                                    distanceKM={""}
                                    driverExperience={busData.driverExperience}
                                    driverName={busData.driverName}
                                    estimatedMinutes={""}
                                    estimatedTime={""}
                                    id={busData.busId}
                                    price={"150 KZ"}
                                    routes={busData.routes || [] }
                                    seats={busData.seats }
                                    stops={busData.stops || [] }
                                    key={"bus-card"}
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
        left: 0,
        right: 0,
        bottom: 25,
        alignItems: "center"
    },
    scrollView: {
        width: "100%",
        height: "100%",
        alignContent: "center",
        paddingHorizontal: 30,
        gap: 20,
    },
    busInfoContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
        paddingBottom: 10
    },
    hintText: {
        color: "#4444",
        fontWeight: 300
    }
})