import {View, Text, ScrollView, StyleSheet} from "react-native"
import SearchBar from "../../components/SearchBar"
import { useState } from "react"
import RouteSuggestionChip from "../../components/RouteSuggestionChip"

export default function RoutesPage(){
    const [routeQuery,setRouteQuery] = useState("")

    function handleRouteSearch(text){
        setRouteQuery(text)
    }

    const suggestions = [
        {id:1,route:"Igreja Pentecostal de Luanda" ,lat:"-12345",long:"54321"},
        {id:2,route:"Zap Cinemas, Kikagil" ,lat:"-12345",long:"54321"},
        {id:3,route:"Arena Fúria, Patriota" ,lat:"-12345",long:"54321"},
        {id:4,route:"Largo das Escolas" ,lat:"-12345",long:"54321"},
        {id:5,route:"Praça da Independência" ,lat:"-12345",long:"54321"}
    ]

    return(
        <ScrollView
            style={[styles.container]}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
        >

        <View style={styles.header}>
            <Text style={styles.logo} >Angoway<sup>®</sup> </Text>
        </View>

        <View style={styles.content}>
        <SearchBar 
                placeholder={"Zap Cinemas, Rua do Kikagil"}
                style={styles.searchBar}
                value={routeQuery}
                onChangeText={handleRouteSearch}
            />

            <View style={styles.suggestionsContainer}>
                <Text style={styles.suggestionsLabel}>Sugestões</Text>
                <View style={styles.suggestions}>
                    {
                        suggestions.map((s)=>(
                            <RouteSuggestionChip key={s.id}
                                suggestion={s.route}
                            />
                        ))
                    }
                </View>
            </View>

            <View style={styles.mainContent}>
                
            </View>
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
        borderColor:"#DBE9FF",
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
    },
    mainContent:{
        width:"100%",
        alignItems:"center",
        flexDirection:"column",
        gap:35
    }
})