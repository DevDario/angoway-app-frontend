import { router } from "expo-router";
import { TouchableOpacity, View, Text } from "react-native";

export default function About() {
    return (
        <View>
            <Text>About</Text>
            <TouchableOpacity
                onPress={() => router.navigate("/profile")}
            >Voltar</TouchableOpacity>
        </View>
    )
}