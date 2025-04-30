import { View,Text, StyleSheet } from "react-native" 
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"



export default function BusInfoCardDetails({title, data,icon}){
return(
    <View style={styles.container}>
          <View style={styles.iconBox}>
               <FontAwesomeIcon icon={icon} size={17} color={"#212121"}/>
          </View>
          <View style={styles.content}>
               <Text style={styles.title}>{title}</Text>
               <Text style={styles.description}>{data}</Text>
          </View>
    </View>
)
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-between",
        alignContent:"flex-start",
        alignItems:"flex-start"
    },
    iconBox:{
        width: 45,
        height:45,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fcfcfb",
        borderRadius:40,
        borderWidth: 1,
        borderColor:"#1111"
    },
    content:{
        flexDirection:"column",
        gap:0,
        alignContent:"center",
        alignItems:"flex-start",
        paddingHorizontal:10
    },
    title:{
        fontSize:16,
        fontWeight:700,
        color:"#212121"
    },
    description:{
        fontWeight:300
    }
})