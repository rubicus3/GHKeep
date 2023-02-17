import React, { createContext, useContext, useState } from "react";
import { Platform } from "react-native";
import { Provider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import * as NavigationBar from "expo-navigation-bar";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import HomeScreen from "./screens/Home";
import SettingsScreen from "./screens/Settings";
import ManageScreen from "./screens/Manage";
import { ExtraContext } from "./Context";

const Tab = createMaterialBottomTabNavigator();


export default function App() {

    const [extra, setExtra] = useState(false);
    const value = { extra, setExtra }; 

    Platform.OS === "android"
        ? NavigationBar.setBehaviorAsync("overlay-swipe")
        : "";

    return (
        <ExtraContext.Provider value={value}>
            <Provider>
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
            </Provider>
        </ExtraContext.Provider>
    );
}
