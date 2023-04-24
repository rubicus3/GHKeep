import React, { useState } from "react";
import { Portal, Provider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { ExtraContext, storeIp } from "./Context";
import { StatusBar } from "expo-status-bar";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import HomeScreen from "./screens/Home";
import SettingsScreen from "./screens/Settings";
import ManageScreen from "./screens/Manage";
import * as NavigationBar from "expo-navigation-bar";
import { getIp } from "./Context";

const Tab = createMaterialBottomTabNavigator();

export default function App() {
    const [extra, setExtra] = useState(false);
    const value = { extra, setExtra };

    NavigationBar.setVisibilityAsync("hidden");
    NavigationBar.setBehaviorAsync("overlay-swipe");

    getIp().then((ip) => {
        if (ip == null) storeIp("http://192.168.3.40:8000");
    });

    return (
        <ExtraContext.Provider value={value}>
            <Provider>
                <StatusBar />
                <Portal>
                    <NavigationContainer>
                        <Tab.Navigator>
                            <Tab.Screen
                                name="Home"
                                component={HomeScreen}
                                options={{
                                    tabBarIcon: () => (
                                        <MaterialCommunityIcons
                                            name="home"
                                            size={26}
                                        />
                                    ),
                                }}
                            />
                            <Tab.Screen
                                name="Manage"
                                component={ManageScreen}
                                options={{
                                    tabBarIcon: () => (
                                        <MaterialCommunityIcons
                                            name="tools"
                                            size={26}
                                        />
                                    ),
                                }}
                            />
                            <Tab.Screen
                                name="Settings"
                                component={SettingsScreen}
                                options={{
                                    tabBarIcon: () => (
                                        <MaterialCommunityIcons
                                            name="cog"
                                            size={26}
                                        />
                                    ),
                                }}
                            />
                        </Tab.Navigator>
                    </NavigationContainer>
                </Portal>
            </Provider>
        </ExtraContext.Provider>
    );
}
