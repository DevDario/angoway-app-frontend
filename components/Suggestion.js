import { StyleSheet,Text, TouchableOpacity } from "react-native";

export default function Suggestion({text,onPress,style,isSelected}){
    return(
        <TouchableOpacity style={[
            styles.button,
            style,
            isSelected ? styles.selectedButton:{backgroundColor:"#C7D4FB"}
            ]} 
            onPress= {onPress}
        >
            <Text style={[
                styles.suggestionText,
                isSelected ? {color:"#FFF",fontWeight:600}:{color:"#0C6DFF"}
                ]}>{text}</Text>
        </TouchableOpacity>
    )
}

export const styles = StyleSheet.create({
    button:{
        width:150,
        height:53,
        gap:10,
        borderRadius:30,
        backgroundColor:"#C7D4FB",
        alignItems:"center",
        justifyContent:"center",
        textAlign:"center"
    },
    suggestionText:{
        color:"#0C6DFF",
        fontWeight:200
    },
    selectedButton:{
        backgroundColor:"#0C6DFF",
        color:"#FFF"
    }
})