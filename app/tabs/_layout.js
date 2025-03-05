import { Tabs } from "expo-router";


export default function TabsLayout(){
    return(
        <Tabs
            screenOptions={{
                headerShown:false,
                tabBarStyle:{
                    backgroundColor:"#fcfcfb",
                    borderTopColor:"#181a20",
                    height:98,
                    alignContent:"center",
                    paddingTop:28,
                    justifyContent:"space-around"
                }
            }}
        >

        <Tabs.Screen
            name="profile"
            options={{
            tabBarShowLabel:false
        }}
      />

<Tabs.Screen
            name="routes"
            options={{
            tabBarShowLabel:false
        }}
      />

        </Tabs>
    )
}