import { router } from "expo-router";
import { TouchableOpacity, View, Text } from "react-native";

export default function Support() {
    return (
        <View>
            <Text>Support</Text>
            <TouchableOpacity
                onPress={() => router.navigate("/profile")}
            >Voltar</TouchableOpacity>
        </View>
    )
}