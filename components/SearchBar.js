import React from "react"
import {StyleSheet,View} from "react-native"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import Input from "../components/input"
import PropTypes from "prop-types"

export default function SearchBar({placeholder,style,onChangeText,value}){
    return(
            <View style={[styles.searchContainer,style]}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <Input 
                    placeholder={placeholder}
                    styles={styles.searchInput}
                    onChangeText={onChangeText}
                    value={value}
                />
        </View>
    )
}


SearchBar.propTypes = {
    placeholder: PropTypes.string.isRequired,
    style: PropTypes.object,
    onChangeText: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
}


export const styles = StyleSheet.create({
    searchContainer:{
        height:60,
        width:420,
        borderColor:"#1111",
        borderWidth:2,
        flexDirection:"row",
        alignItems:"center",
        paddingHorizontal:30,
        backgroundColor:"#FFF",
        borderRadius:50,
    },
    searchInput:{
        flex:1,
        paddingLeft:15,
        paddingTop:10,
        fontSize:15,
        width:"100%",
        borderBottomColor:"#FFF",
        flexDirection:"row",

    }
})