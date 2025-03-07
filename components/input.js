import { StyleSheet, TextInput } from "react-native"
import React from "react"
import PropTypes from "prop-types"

export default function Input({placeholder, onChangeText,styles,value}){
    return(
        <TextInput style={[style.input,styles]} placeholder={placeholder} onChangeText={onChangeText} placeholderTextColor={"#3333"} value={value}/>
    )
}

Input.propTypes = {
    placeholder: PropTypes.string.isRequired,
    onChangeText: PropTypes.func.isRequired,
    styles: PropTypes.object,
    value: PropTypes.string.isRequired
}

export const style = StyleSheet.create({
    input:{
        borderBottomWidth:2,
        borderBottomColor:"#0C6DFF",
        width:"100%",
        fontSize:16,
        paddingBottom:13,
        color:"#212121",
        textAlign:"left",
    }
})