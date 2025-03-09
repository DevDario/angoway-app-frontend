import { router } from "expo-router";
import { TouchableOpacity,View,Text } from "react-native";

export default function Accessibility() {
    return (
        <View>
            <Text>Accessibility</Text>
            <TouchableOpacity
                onPress={()=> router.navigate("/profile")}
            >Voltar</TouchableOpacity>
        </View>
    )
}