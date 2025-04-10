import React from "react";
import { StyleSheet, View, Text } from "react-native";
import BubbleInfo from "../components/BubbleInfo";
import RouteChip from "../components/RouteChip";
import CardSmallChip from "../components/CardSmallChip";
import { faBusSimple, faHandHoldingDollar, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

export default function RouteCard({ routeDetails }) {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.cardContainer}>
                    <View style={styles.header}>
                        <View style={styles.info}>
                            <View style={styles.infoRoute}>
                                <Text style={styles.routeText}>{routeDetails.destiny}</Text>
                            </View>
                            <View style={styles.routeDetails}>
                                <Text style={styles.detailLabel}>{routeDetails.ATA} Min</Text>

                                <View style={styles.separator}></View>

                                <Text style={styles.detailLabel}>
                                    Chegada às {routeDetails.aproximatelyHour}
                                </Text>

                                <View style={styles.separator}></View>

                                <Text style={styles.detailLabel}>{routeDetails.Km}</Text>
                            </View>
                        </View>
                        <BubbleInfo
                            text={routeDetails.price}
                            key={routeDetails.id}
                            status={"ativo"}
                            icon={faHandHoldingDollar}
                        />
                    </View>
                    <View style={styles.body}>
                        <RouteChip
                            title={routeDetails.start}
                            description={routeDetails.startDescription}
                            type="chip"
                        />

                        <View style={styles.suggestionContainer}>
                            <CardSmallChip
                                key={routeDetails.id}
                                icon={faBusSimple}
                                title={routeDetails.suggestedRoute}
                                description={routeDetails.suggestedRouteDescription}
                            />
                        </View>

                        <CardSmallChip
                            key={routeDetails.id}
                            icon={faLocationDot}
                            title={routeDetails.destiny}
                            description={routeDetails.destinyDescription}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
}

RouteCard.propTypes = {
    routeDetails: PropTypes.object,
};

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
    },
    card: {
        width: 360,
        height: "auto",
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
        fontSize: 19,
        fontWeight: 700,
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
        margin: 15,
    },
    suggestionContainer: {
        marginTop: 10,
    },
});
