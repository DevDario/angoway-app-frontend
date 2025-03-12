import React from "react";
import { Tabs } from "expo-router";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faClock,
  faCompass,
  faMap,
  faUser,
} from "@fortawesome/free-regular-svg-icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#fcfcfb",
          height: 80,
          paddingTop: 18,
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#0C6DFF",
        tabBarInactiveTintColor: "#505050",
        animation: "shift",
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tabs.Screen
        name="trackingBus"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="routes"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faCompass} color={color} size={20} />
          ),
        }}
      />
      <Tabs.Screen
        name="schedules"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faClock} color={color} size={20} />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faMap} color={color} size={20} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faUser} color={color} size={20} />
          ),
        }}
      />
    </Tabs>
  );
}
