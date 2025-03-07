import React from "react";
import { StyleSheet, View,Text } from "react-native";
import BubbleInfo from "../components/BubbleInfo"
import RouteChip from "../components/RouteChip"
import CardSmallChip from "../components/CardSmallChip"
import { faBusSimple } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

export default function ScheduleCard({routeDetails}){
    return(
        <View style={styles.container}>
        <View style={styles.card}>
            <View style={styles.cardContainer}>
                <View style={styles.header}>
                    <View style={styles.info}>
                        <View style={styles.infoRoute}>
                            <Text style={styles.routeText}>{routeDetails.route}</Text>
                        </View>
                        <View style={styles.routeDetails}>
                            <Text style={styles.detailLabel}>
                                {routeDetails.ATA} Min
                            </Text>

                            <View style={styles.separator}></View>

                            <Text style={styles.detailLabel}>
                                Chegada às {routeDetails.aproximatelyHour}
                            </Text>

                            <View style={styles.separator}></View>

                            <Text style={styles.detailLabel}>
                                {routeDetails.Km}
                            </Text>
                        </View>
                    </View>
                    <BubbleInfo 
                        text={routeDetails.status}
                        key={routeDetails.id}
                        status={routeDetails.status}
                    />
                </View>
                <View style={styles.body}>
                    <RouteChip 
                        title={routeDetails.start}
                        description={routeDetails.startDescription}
                        time={routeDetails.startTime}
                    />

                    <View style={styles.stopsContainer}>
                        <Text style={styles.stopsText}>Paragens Secundárias</Text>
                    {
                        routeDetails.stops.map((stop,index)=>(
                            <CardSmallChip 
                                key={index}
                                icon={faBusSimple}
                                title={stop.name}
                            />
                        ))
                    }
                    </View>

                    <RouteChip 
                        title={routeDetails.destiny}
                        description={routeDetails.destinyDescription}
                        time={routeDetails.destinyTime}
                    />
                    
                </View>
            </View>
        </View>
        </View>
    )
}


ScheduleCard.propTypes = {
    routeDetails: PropTypes.object.isRequired
}

export const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:30,
    },
    card:{
        width:360,
        height:"auto",
        borderRadius:13,
        backgroundColor:"#F4F6FC",
        borderWidth:1,
        borderColor:"#DBE9FF"
    },
    cardContainer:{
        width:"100%",
        flexDirection:"column"
    },
    header:{
        width:"100%",
        height:105,
        paddingLeft:20,
        paddingRight:20,
        paddingTop:15,
        paddingBottom:15,
        backgroundColor:"#FFF",
        borderTopLeftRadius:13,
        borderTopRightRadius:13,
        borderBottomWidth:1,
        borderBottomColor:"#DBE9FF",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
    },
    info:{
        flexDirection:"column",
        gap:5,
    },
    routeText:{
        fontSize:19,
        fontWeight:700
    },
    routeDetails:{
        flexDirection:"row",
        alignItems:"center",
        gap:5
    },
    detailLabel:{
        fontWeight:300
    },  
    separator:{
        height:2,
        width:10,
        backgroundColor:"#0C6DFF",
        alignItems:"center",
        justifyContent:"center"
    },
    body:{
        margin:15
    },
    stopsContainer:{
        marginTop:10,
        paddingHorizontal:19,
    },
    stopsText:{
        paddingHorizontal:15,
        marginBottom:10,
        color:"#858585",
        fontWeight:300,
        fontSize:14
    }
})