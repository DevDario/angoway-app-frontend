import { StyleSheet, TextInput } from "react-native"

export default function Input({placeholder, event,styles,value}){
    return(
        <TextInput style={[style.input,styles]} placeholder={placeholder} onChange={event} placeholderTextColor={"#3333"} value={value}/>
    )
}

export const style = StyleSheet.create({
    input:{
        borderBottomWidth:2,
        borderBottomColor:"#0C6DFF",
        width:"80%",
        fontSize:16,
        paddingBottom:13,
        color:"#212121",
        textAlign:"left",
    }
})