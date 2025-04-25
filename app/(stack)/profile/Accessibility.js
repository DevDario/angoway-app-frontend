import { router } from "expo-router";
import { View, Text } from "react-native";
import ReturnButton from "../../../components/ReturnButton";

export default function Accessibility() {
    return (
        <View>
            <Text>Accessibility</Text>
            <ReturnButton onPress={() => router.navigate("/profile")} />
        </View>
    )
}