import {StyleSheet,View} from "react-native"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import Input from "../components/input"

export default function SearchBar({placeholder}){
    return(
            <View style={styles.searchContainer}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <Input 
                    placeholder={placeholder}
                    styles={styles.searchInput}
                />
        </View>
    )
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
        paddingLeft:15,
        paddingTop:10,
        fontSize:15,
        width:"100%",
        borderBottomColor:"#FFF",
        flexDirection:"row",

    }
})