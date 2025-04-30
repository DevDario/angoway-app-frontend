import React from "react";
import { StyleSheet, View, Text } from "react-native";
import BubbleInfo from "../components/BubbleInfo";
import BusInfoCardDetails from "../components/BusInfoCardDetails";
import { faHandHoldingDollar, faSignsPost, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faUser, faClock } from "@fortawesome/free-regular-svg-icons";


const mockBusDetails = require("../mockdata.json").busDetails

export default function BusInfoCard({ busDetails }) {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.cardContainer}>
                    <View style={styles.header}>
                        <View style={styles.info}>
                            <View style={styles.infoRoute}>
                                <Text style={styles.routeText}>{busDetails.number}</Text>
                                <View style={styles.separator}></View>
                                <Text style={styles.routeText}>{busDetails.driverName}</Text>
                            </View>
                            <View style={styles.routeDetails}>
                                <Text style={styles.detailLabel}>{busDetails.ATA} Min</Text>

                                <View style={styles.separator}></View>

                                <Text style={styles.detailLabel}>
                                    Chegada às {busDetails.aproximatelyHour}
                                </Text>

                                <View style={styles.separator}></View>

                                <Text style={styles.detailLabel}>{busDetails.Km} Km</Text>
                            </View>
                        </View>
                        <BubbleInfo
                            text={busDetails.price}
                            key={busDetails.id}
                            status={"ativo"}
                            icon={faHandHoldingDollar}
                        />
                    </View>

                    <View style={styles.body}>

                        <View style={styles.contentContainer}>
                            <BusInfoCardDetails
                                title="Rotas"
                                data={mockBusDetails.routes.map(r => r + "\n")}
                                icon={faSignsPost}

                            />
                            <BusInfoCardDetails
                                title="Lugares"
                                data={mockBusDetails.seats + " lugares"}
                                icon={faUser}
                            />
                            <BusInfoCardDetails
                                title="Tempo de Chegada"
                                data={mockBusDetails.ATA + " Minutos"}
                                icon={faClock}
                            />
                        </View>

                        <View style={styles.contentContainer}>

                            <BusInfoCardDetails
                                title="Motorista"
                                data={mockBusDetails.driverData}
                                icon={faUser}
                            />
                            <BusInfoCardDetails
                                title="Paragens"
                                data={mockBusDetails.stops.map(s => s.id + "." + s.name + "\n")}
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
        fontWeight: 700,
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
        fontWeight: 300,
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