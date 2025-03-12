import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import ReturnButton from '../../components/ReturnButton';
import MapView from 'react-native-maps';

export default function TrackingBus() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <View style={styles.pageHeader}>
                    <ReturnButton onPress={() => router.back()} />
                    <Text style={styles.pageHeaderText}>Rota do Autocarro</Text>
                </View>

                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: -8.8956,
                        longitude: 13.2272,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    showsMyLocationButton={true}
                    showsUserLocation={true}
                    showsTraffic={true}
                    zoomEnabled={true}
                    zoomControlEnabled={true}
                />

            </SafeAreaView>
        </SafeAreaProvider>
    );
};

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    pageHeader: {
        width: "100%",
        height: "12%",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fcfcfb",
        paddingHorizontal: 30,
        borderBottomWidth: 1,
        borderBottomColor: "#2222"
    },
    pageHeaderText: {
        fontSize: 16,
        fontWeight: "700",
        paddingLeft: 60
    },
    map: {
        width: "100%",
        height: "60%",
    },
});