import React from "react"
import {ScrollView, StyleSheet,View} from "react-native"
import SearchBar from "../../components/SearchBar"

export default function Index(){
    return(
        <ScrollView style={styles.container}>
            <SearchBar 
                placeholder={"onde vamos hoje?"}
            />
            <View style={styles.map}>

            </View>
        </ScrollView>
    )
}

export const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:30,
        paddingBottom:30,
        marginHorizontal:30
    }
})