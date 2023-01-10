import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Flex, Spacer } from "react-native-flex-layout";
import HomeScreen from "./Screens/Home";
import SettingsScreen from "./Screens/Settings";
import ManageScreen from "./Screens/Manage";

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ header: () => null }}
                />
                <Tab.Screen
                    name="Manage"
                    component={ManageScreen}
                    options={{ header: () => null }}
                />
                <Tab.Screen
                    name="Settings"
                    component={SettingsScreen}
                    options={{ header: () => null }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
