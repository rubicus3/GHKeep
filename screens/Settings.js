import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import { TextInput, Text, Button, Divider } from "react-native-paper";
import TSetting from "../components/TSetting";

export default function SettingsScreen() {
    


    return (
        <ScrollView scrollEnabled={false}>
            <Text variant="headlineMedium" style={{ padding: 15 }}>
                Настройки
            </Text>
            <Divider />
            <TSetting icon="weather-windy" text="Лимит на форточки" val={5}/>
            <TSetting icon="air-filter" text="Лимит увлажнения"/>
            <TSetting icon="watering-can-outline" text="Лимит увлажнения почвы 1"/>
            <TSetting icon="watering-can-outline" text="Лимит увлажнения почвы 2"/>
            <TSetting icon="watering-can-outline" text="Лимит увлажнения почвы 3"/>
            <TSetting icon="watering-can-outline" text="Лимит увлажнения почвы 4"/>
            <TSetting icon="watering-can-outline" text="Лимит увлажнения почвы 5"/>
            <TSetting icon="watering-can-outline" text="Лимит увлажнения почвы 6"/>

        </ScrollView>
    );
}
