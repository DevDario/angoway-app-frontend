import { Tabs } from "expo-router"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faClock, faCompass,faMap,faUser } from "@fortawesome/free-regular-svg-icons"


export default function RootLayout(){
    return(
        <Tabs
            screenOptions={{
                headerShown:false,
                tabBarStyle:{
                    backgroundColor:"#fcfcfb",
                    height:60,
                    paddingTop:12
                },
                tabBarShowLabel:false,
                tabBarActiveTintColor:"#0C6DFF",
                tabBarInactiveTintColor:"1ab65c",
            }}
        >
            <Tabs.Screen name="routes"
                options={{
                    tabBarIcon: ({color}) => (
                      <FontAwesomeIcon icon={faCompass} color={color}/>  
                    )
                }}
            />
            <Tabs.Screen name="schedules"
                options={{
                    tabBarIcon: ({color}) => (
                        <FontAwesomeIcon icon={faClock} color={color}/>
                    )
                }}
            />
            <Tabs.Screen name="index"
                options={{
                    tabBarIcon: ({color}) => (
                        <FontAwesomeIcon icon={faMap} color={color}/>
                    )
                }}
            />
            <Tabs.Screen name="profile"
                options={{
                    tabBarIcon: ({color}) => (
                        <FontAwesomeIcon icon={faUser} color={color}/>
                    )
                }}
            />
        </Tabs>
    )
}