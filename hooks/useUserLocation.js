import { useState, useEffect } from "react";
import { watchPositionAsync, LocationAccuracy } from "expo-location";
import requestLocationPermission from "../utils/requestLocationPermission";

export function useUserLocation() {
    const [location, setLocation] = useState(null);
    const [permissionGranted, setPermissionGranted] = useState(false);

    useEffect(() => {
        const requestPermission = async () => {
            const granted = await requestLocationPermission();
            setPermissionGranted(granted);
        };
        requestPermission();
    }, []);

    useEffect(() => {
        if (permissionGranted) {
            watchPositionAsync(
                {
                    accuracy: LocationAccuracy.Highest,
                    timeInterval: 5000,
                    distanceInterval: 10,
                },
                (response) => {
                    const { latitude, longitude } = response.coords;
                    setLocation({ lat: latitude, lng: longitude });
                }
            );
        }
    }, [permissionGranted]);

    return { location, permissionGranted };
}