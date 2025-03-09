import { router } from "expo-router";
import { TouchableOpacity,View,Text } from "react-native";

export default function ChangePassword() {
    return (
        <View>
            <Text>Change Password</Text>
            <TouchableOpacity
                onPress={()=> router.navigate("/profile")}
            >Voltar</TouchableOpacity>
        </View>
    )
}