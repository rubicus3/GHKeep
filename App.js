import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import HomeScreen from "./Screens/Home";
import SettingsScreen from "./Screens/Settings";
import ManageScreen from "./Screens/Manage";
import { useEffect } from "react";

const Tab = createMaterialBottomTabNavigator();

export default function App() {
    const onStart = () => useEffect();
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        header: () => null,
                        tabBarIcon: () => (
                            <MaterialCommunityIcons name="home" size={26} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Manage"
                    component={ManageScreen}
                    options={{
                        header: () => null,
                        tabBarIcon: () => (
                            <MaterialCommunityIcons name="tools" size={26} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Settings"
                    component={SettingsScreen}
                    options={{
                        header: () => null,
                        tabBarIcon: () => (
                            <MaterialCommunityIcons name="cog" size={26} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
