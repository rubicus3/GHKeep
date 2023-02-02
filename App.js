import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import HomeScreen from "./screens/Home";
import SettingsScreen from "./screens/Settings";
import ManageScreen from "./screens/Manage";
import React from "react";

const Tab = createMaterialBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        tabBarIcon: () => (
                            <MaterialCommunityIcons name="home" size={26} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Manage"
                    component={ManageScreen}
                    options={{
                        tabBarIcon: () => (
                            <MaterialCommunityIcons name="tools" size={26} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Settings"
                    component={SettingsScreen}
                    options={{
                        tabBarIcon: () => (
                            <MaterialCommunityIcons name="cog" size={26} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
