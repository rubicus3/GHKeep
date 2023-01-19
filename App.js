import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import HomeScreen from "./screens/Home";
import SettingsScreen from "./screens/Settings";
import ManageScreen from "./screens/Manage";
import { useEffect } from "react";
import {
    Provider as PaperProvider,
    MD3LightTheme,
    adaptNavigationTheme,
} from "react-native-paper";
const { LightTheme } = adaptNavigationTheme({
    reactNavigationLight: DefaultTheme,
});

const Tab = createMaterialBottomTabNavigator();

export default function App() {
    const onStart = () =>
        useEffect(   
            // axios.get("http://10.0.2.2:8000")         
        );
    return (
        <PaperProvider theme={MD3LightTheme}>
            <NavigationContainer theme={LightTheme}>
                <Tab.Navigator>
                    <Tab.Screen
                        name="Home"
                        component={HomeScreen}
                        options={{
                            // header: () => null,
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
                            header: () => null,
                            tabBarIcon: () => (
                                <MaterialCommunityIcons name="cog" size={26} />
                            ),
                        }}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        </PaperProvider>
    );
}
