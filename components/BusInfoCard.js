import React from "react";
import { StyleSheet, View, Text } from "react-native";
import BubbleInfo from "../components/BubbleInfo";
import BusInfoCardDetails from "../components/BusInfoCardDetails";
import { faHandHoldingDollar, faSignsPost, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faUser, faClock } from "@fortawesome/free-regular-svg-icons";


const mockBusDetails = require("../mockdata.json").busDetails

export default function BusInfoCard({ busNIA, driverName, estimatedMinutes, estimatedTime, distanceKM, price, id, routes, seats, driverExperience, stops }) {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.cardContainer}>
                    <View style={styles.header}>
                        <View style={styles.info}>
                            <View style={styles.infoRoute}>
                                <Text style={styles.routeText}>{busNIA}</Text>
                                <View style={styles.separator}></View>
                                <Text style={styles.routeText}>{driverName}</Text>
                            </View>
                            <View style={styles.routeDetails}>
                                <Text style={styles.detailLabel}>{estimatedMinutes} Min</Text>

                                <View style={styles.separator}></View>

                                <Text style={styles.detailLabel}>
                                    Chegada às {estimatedTime}
                                </Text>

                                <View style={styles.separator}></View>

                                <Text style={styles.detailLabel}>{distanceKM} Km</Text>
                            </View>
                        </View>
                        <BubbleInfo
                            text={price}
                            key={id}
                            status={"active"}
                            icon={faHandHoldingDollar}
                        />
                    </View>

                    <View style={styles.body}>

                        <View style={styles.contentContainer}>
                            <BusInfoCardDetails
                                title="Rotas"
                                data={routes || routes.map(r => r + "\n")}
                                icon={faSignsPost}

                            />
                            <BusInfoCardDetails
                                title="Lugares"
                                data={seats + " lugares" || undefined + " lugares"}
                                icon={faUser}
                            />
                            <BusInfoCardDetails
                                title="Tempo de Chegada"
                                data={estimatedMinutes + " Minutos" || undefined + " Minutos"}
                                icon={faClock}
                            />
                        </View>

                        <View style={styles.contentContainer}>

                            <BusInfoCardDetails
                                title="Motorista"
                                data={`${driverName + "\n" + driverExperience}` || undefined }
                                icon={faUser}
                            />
                            <BusInfoCardDetails
                                title="Paragens"
                                data={stops.map(s => `${s.id}. ${s.name}\n`) || undefined }
                                icon={faLocationDot}
                            />
                        </View>

                    </View>
                </View>
            </View>
        </View>
    );
}



export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
    },
    card: {
        width: 485,
        height: 327,
        borderRadius: 13,
        backgroundColor: "#F4F6FC",
        borderWidth: 1,
        borderColor: "#DBE9FF",
    },
    cardContainer: {
        width: "100%",
        flexDirection: "column",
    },
    header: {
        width: "100%",
        height: 105,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 15,
        paddingBottom: 15,
        backgroundColor: "#FFF",
        borderTopLeftRadius: 13,
        borderTopRightRadius: 13,
        borderBottomWidth: 1,
        borderBottomColor: "#DBE9FF",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    info: {
        flexDirection: "column",
        gap: 5,
    },
    routeText: {
        fontSize: 17,
        fontFamily: "Inter-Bold",
    },
    infoRoute: {
        flexDirection: "row",
        alignItems: "center",
        gap: 3
    },
    routeDetails: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
    },
    detailLabel: {
        fontFamily: "Inter-Light",
    },
    separator: {
        height: 2,
        width: 10,
        backgroundColor: "#0C6DFF",
        alignItems: "center",
        justifyContent: "center",
    },
    body: {
        paddingVertical: 25,
        flexDirection: "row",
        justifyContent: "space-around",
        alignContent: "flex-start",
        alignItems: "flex-start"
    },
    contentContainer: {
        flexDirection: "column",
        gap: 10,
        alignCenter: "center",
        alignItems: "flex-start"
    }
});