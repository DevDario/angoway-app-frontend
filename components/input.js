import { StyleSheet, TextInput } from "react-native"

export default function Input({placeholder, event,styles}){
    return(
        <TextInput style={[style.input,styles]} placeholder={placeholder} onChange={event}/>
    )
}

export const style = StyleSheet.create({
    input:{
        borderBottomWidth:2,
        borderBottomColor:"#0C6DFF",
        width:"80%",
        fontSize:14,
        paddingBottom:13,
        color:"#212121",
        textAlign:"left",
        fontWeight:500
    }
})