import { SafeAreaView,Text, StyleSheet } from "react-native";

export default function Login(){
    return(
        <SafeAreaView style={styles.container}>
            <Text>Login</Text>
        </SafeAreaView>
    )
}

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#FBFCFF",
        justifyContent:"center",
        alignItems:"center"
    }
})