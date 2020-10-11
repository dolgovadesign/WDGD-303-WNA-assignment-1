import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons";
import Home from "./screens/Home";
import Adventure2 from "./screens/Adventure2";
import Adventure1 from "./screens/Adventure1";
import Adventure3 from "./screens/Adventure3";
import Adventure4 from "./screens/Adventure4";
import Morephoto1 from "./screens/Morephoto1";
import Reminder from "./screens/Reminder";
import Justforfun from "./screens/Justforfun";


const Drawer = createDrawerNavigator();
const RootTab = createBottomTabNavigator();

const RootTabNavigator = () => {
  return (
    <RootTab.Navigator
        tabBarOptions={{
          activeTintColor: "darkgreen",
          inactiveTintColor: "gray",
     }}>
      <RootTab.Screen name="ADVENTURE 1" component={Adventure1}
                      options={{
                        title: "ADVENTURE 1",
                        tabBarIcon: ({ focused }) => (
                          <Entypo name="leaf" size={24} color={focused ? "darkgreen" : "gray"} />
                        )
                      }} />
      <RootTab.Screen name="ADVENTURE 2" component={Adventure2}
                      options={{
                        title: "ADVENTURE 2",
                        tabBarIcon: ({ focused }) => (
                          <Entypo name="leaf" size={24} color={focused ? "darkgreen" : "gray"} />
                        )
                      }} />
      <RootTab.Screen name="ADVENTURE 3" component={Adventure3}
                      options={{
                        title: "ADVENTURE 3",
                        tabBarIcon: ({ focused }) => (
                          <Entypo name="leaf" size={24} color={focused ? "darkgreen" : "gray"} />
                        )
                      }} />
      <RootTab.Screen name="ADVENTURE 4" component={Adventure4}
                      options={{
                      title: "ADVENTURE 4",
                        tabBarIcon: ({ focused }) => (
                          <Entypo name="leaf" size={24} color={focused ? "darkgreen" : "gray"} />
                        )
                      }} />
    </RootTab.Navigator>       
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerType="slide">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Trips" component={RootTabNavigator} /> 
      <Drawer.Screen name="Blessings" component={Morephoto1} />
      <Drawer.Screen name="Reminder" component={Reminder} />
      <Drawer.Screen name="Just for Fun" component={Justforfun} />
    </Drawer.Navigator>
  );
};
export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer> 
  );
}








