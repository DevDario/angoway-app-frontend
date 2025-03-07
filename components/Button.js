import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { TouchableOpacity,StyleSheet,Text } from "react-native";

export default function Button({text,onPress,icon,style}){
    return(
        <TouchableOpacity style={[styles.button,style]} onPress={onPress}>

        {
            icon && <FontAwesomeIcon icon={icon} style={{color:"#0C6DFF"}}/> 
        }
            <Text>{text}</Text>
        </TouchableOpacity>
    )
}

export const styles = StyleSheet.create({
    button:{
        width:170,
        height:53,
        display:"flex",
        flexDirection:"row",
        gap:10,
        borderColor:"#0C6DFF",
        borderWidth:2,
        borderRadius:30,
        backgroundColor:"none",
        alignItems:"center",
        justifyContent:"center",
        textAlign:"center"
    }
})