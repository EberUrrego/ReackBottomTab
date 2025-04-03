// Navigation.js
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

// Screens
import HomeScreen from "./src/screens/HomeScreen";
import Dasboard from "./src/screens/Dasboard";

const Tab = createBottomTabNavigator();

// Configuración del Bottom Tab Navigator
function MyTab() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Dasboard" component={Dasboard} />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyTab />
    </NavigationContainer>
  );
}
