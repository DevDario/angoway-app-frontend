import {SafeAreaView, Text, StyleSheet,View} from "react-native"
import SearchBar from "../../components/SearchBar"
import Suggestion from "../../components/Suggestion"
import { useState } from "react"

export default function SchedulesPage(){

    const [routeQuery,setRouteQuery] = useState("")
    
    {/* should be replaced with API response data */}
    const suggestions = [
        {id:1,route:"Patriota-Benfica" ,lat:"-12345",long:"54321"},
        {id:2,route:"Benfica-Golf2" ,lat:"-12345",long:"54321"},
        {id:3,route:"Zango-Kilamba" ,lat:"-12345",long:"54321"},
        {id:4,route:"Benfica-Kilamba" ,lat:"-12345",long:"54321"},
        {id:5,route:"1 Maio - Kilometro 26" ,lat:"-12345",long:"54321"}
    ]

    function handleRouteSearch(text){
        setRouteQuery(text)
    }


    return(
        <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.logo} >Angoway<sup>®</sup> </Text>
        </View>

        <View style={styles.content}>
        <SearchBar 
                placeholder={"Pesquise uma rota"}
                style={styles.searchBar}
                value={routeQuery}
                onChangeText={handleRouteSearch}
            />
            <View style={styles.suggestionsContainer}>
                <Text style={styles.suggestionsLabel}>Sugestões</Text>
                <View style={styles.suggestions}>
                    {
                        suggestions.map((s)=>(
                            <Suggestion key={s.id} text={s.route} />
                        ))
                    }
                </View>
            </View>

            <View style={styles.mainContent}>
                    {/* create schedules card component */}
            </View>
        </View>
        </SafeAreaView>
    )
}
        
export const styles = StyleSheet.create({
    container:{
        flex:1,
        margin:30
    },
    header:{
        width:"100%",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingBottom:30
    },
    logo:{
        color:"#0C6DFF",
        fontSize:20,
        fontWeight:700
    },
    content:{
        width:"100%",
        alignItems:"center"
    },
    searchBar:{
        width:"100%",
        borderColor:"#0C6DFF",
    },
    suggestionsContainer:{
        width:"100%",
        flexDirection:"column",
        alignItems:"flex-start",
        paddingTop:15
    },
    suggestions:{
        width:"100%",
        flexDirection:"row",
        alignItems:"center",
        gap:10,
        flexWrap:"wrap",
        paddingTop:15
    },
    suggestionsLabel:{
        color:"#3333",
        fontSize:15,
        fontWeight:500
    }
})