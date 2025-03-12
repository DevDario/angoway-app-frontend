import { StyleSheet, Text } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

export default function TrackingBus() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.centeredView}>
                <Text>Tracking Bus</Text>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

export const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});