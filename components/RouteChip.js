import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { StyleSheet, Text, View } from "react-native";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";

export default function RouteChip({title,description,time}){
    return(
        <View style={styles.container}>
            <View style={styles.circle}>
                <FontAwesomeIcon icon={faLocationDot} size={18} color="#212121"/>
            </View>
            <View style={styles.content}>
                <View style={styles.routeDetails}>
                    <Text style={styles.detailsTitle}>{title}</Text>
                    <Text style={styles.detailsDescription}>{description}</Text>
                </View>
                <View style={styles.timeDetails}>
                    <FontAwesomeIcon icon={faClock} size={13} color="#212121"/>
                    <Text style={styles.time}>{time}</Text>
                </View>
            </View>
        </View>
    )
}

export const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:70,
        flexDirection:"row",
        backgroundColor:"#FFF",
        borderWidth:1,
        borderColor:"#DBE9FF",
        borderRadius:50,
        alignItems:"center",
        justifyContent:"flex-start",
        paddingHorizontal:10
    },
    circle:{
        width:50,
        height:50,
        backgroundColor:"#FFF",
        borderWidth:1,
        borderColor:"#DBE9FF",
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center"
    },
    content:{
        flex:1,
        flexDirection:"row",
        alignContent:"center",
        alignItems:"center",
        justifyContent:"space-between"
    },
    routeDetails:{
        flexDirection:"column",
        alignContent:"flex-start",
        justifyContent:"center",
        paddingLeft:10
    },
    detailsTitle:{
        fontSize:16,
        fontWeight:500
    },
    detailsDescription:{
        color:"#858585"
    },
    timeDetails:{
        flexDirection:"row",
        alignContent:"center",
        alignItems:"center",
        gap:8,
        paddingRight:10
    },
    time:{
        fontWeight:500
    }
})