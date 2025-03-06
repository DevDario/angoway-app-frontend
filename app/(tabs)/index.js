import {SafeAreaView, Text, StyleSheet,View} from "react-native"
import SearchBar from "../../components/SearchBar"

export default function Index(){
    return(
        <SafeAreaView style={styles.container}>
            <SearchBar 
                placeholder={"onde vamos hoje?"}
            />
            <View style={styles.map}>

            </View>
        </SafeAreaView>
    )
}

export const styles = StyleSheet.create({
    container:{
        flex:1,
        margin:30
    }
})