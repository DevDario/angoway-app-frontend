import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { StyleSheet, Text, View,Pressable } from "react-native";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function RouteSuggestionChip({suggestion,onPress}){
    return(
        <Pressable style={[styles.container]} onPress={onPress}>
            <View style={styles.iconBox}>
                <FontAwesomeIcon icon={faLocationDot} size={18} color="#404040"/>
            </View>
            <View style={styles.content}>
                <View style={styles.routeDetails}>
                    <Text style={styles.detailsTitle}>{suggestion}</Text>
                </View>
            </View>
        </Pressable>
    )
}

export const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:70,
        flexDirection:"row",
        borderWidth:2,
        borderColor:"#DBE9FF",
        borderRadius:50,
        alignItems:"center",
        justifyContent:"flex-start",
        paddingHorizontal:10
    },
    iconBox:{
        width:50,
        height:50,
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
        fontWeight:500,
        color:"#404040"
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