import React from "react";
import { StyleSheet, View, Text } from "react-native";
import BubbleInfo from "../components/BubbleInfo";
import RouteChip from "../components/RouteChip";
import CardSmallChip from "../components/CardSmallChip";
import { faBusSimple } from "@fortawesome/free-solid-svg-icons";
import { formatDate } from "../utils/datetime-formatter"



export default function ScheduleCard({ routeDetails, empty }) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.cardContainer}>
          <View style={styles.header}>
            <View style={styles.info}>
              <View style={styles.infoRoute}>
                <Text style={styles.routeText}>{routeDetails.origin || routeDetails.departureLocation}-{routeDetails.destination || routeDetails.arrivalLocation}</Text>
              </View>
              <View style={styles.routeDetails}>
                {empty ? (<></>) : (
                  <>
                    <Text style={styles.detailLabel}>{formatDate(routeDetails.estimatedDurationMinutes)} Min</Text>

                    <View style={styles.separator}></View>

                    <Text style={styles.detailLabel}>
                      Chegada às {formatDate(routeDetails.arrivalTime)}
                    </Text>

                    <View style={styles.separator}></View>

                    <Text style={styles.detailLabel}>{routeDetails.distanceKM} Km</Text>
                  </>
                )}
              </View>
            </View>
            <BubbleInfo
              text={routeDetails.status}
              key={routeDetails.id}
              status={routeDetails.status}
            />
          </View>
          {empty ? (
            <View style={[styles.body, {
              display: "flex", alignItems: "center", alignContent: "center"
            }]}>
              <Text style={{ display: "flex", alignItems: "center", fontWeight: "bold", fontSize: 16 }}>Sem horário disponível</Text>
            </View>
          ) : (
            <View style={styles.body}>
              <RouteChip
                title={routeDetails.departureLocation}
                description={"Ponto de partida"}
                time={formatDate(routeDetails.departureTime)}
              />

              <View style={styles.stopsContainer}>
                {
                  Array.isArray(routeDetails.stops) && routeDetails.stops.length > 0 ? (

                    routeDetails.stops.map((stop, index) => (
                      <>
                        <Text style={styles.stopsText}>Paragens Secundárias</Text>
                        <CardSmallChip
                          key={index}
                          icon={faBusSimple}
                          title={stop.name}
                        />
                      </>
                    ))

                  ) : (
                    <View>
                      <Text style={styles.stopsText}>Sem paragens conhecidas</Text>
                    </View>
                  )
                }
              </View>

              <RouteChip
                title={routeDetails.arrivalLocation}
                description={"Ponto de chegada"}
                time={formatDate(routeDetails.arrivalTime)}
              />
            </View>
          )}


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
  stopsContainer: {
    marginTop: 10,
    paddingHorizontal: 19,
  },
  stopsText: {
    paddingHorizontal: 15,
    marginBottom: 10,
    color: "#858585",
    fontWeight: 300,
    fontSize: 14,
  },
});
