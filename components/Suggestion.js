import { Pressable,StyleSheet,Text } from "react-native";

export default function Button({text,event,style}){
    return(
        <Pressable style={[styles.button,style]} onPress={event}>
            <Text style={styles.suggestionText}>{text}</Text>
        </Pressable>
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
        backgroundColor:"#C7D4FB",
        alignItems:"center",
        justifyContent:"center",
        textAlign:"center"
    },
    suggestionText:{
        color:"#0C6DFF"
    }
})