import { Tabs } from "expo-router";
import { Icon } from "react-native-paper";

export default function RootLayout(){
    return(
        <Tabs
            screenOptions={{
                headerShown:false,
                tabBarStyle:{
                    backgroundColor:"#fcfcfb"
                },
                tabBarActiveTintColor:"#0C6DFF",
                tabBarInactiveTintColor:"1ab65c"
            }}
        >
            <Tabs.Screen name="routes"
                options={{
                    tabBarIcon: ({color}) => (
                        <Icon key={"Home"}/>
                    )
                }}
            />
            <Tabs.Screen name="schedules"/>
            <Tabs.Screen name="index"/>
            <Tabs.Screen name="profile"/>
        </Tabs>
    )
}