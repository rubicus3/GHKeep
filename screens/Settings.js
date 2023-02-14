import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import { TextInput, Text, Button, Divider } from "react-native-paper";
import SettingComp from "../components/SettingComp";

export default function SettingsScreen() {
    


    return (
        <ScrollView scrollEnabled={false}>
            <Text variant="headlineMedium" style={{ padding: 15 }}>
                Настройки
            </Text>
            <Divider />
            <SettingComp icon="weather-windy" text="Лимит на форточки" val={5}/>
            <SettingComp icon="air-filter" text="Лимит увлажнения"/>
            <SettingComp icon="watering-can-outline" text="Лимит увлажнения почвы 1"/>
            <SettingComp icon="watering-can-outline" text="Лимит увлажнения почвы 2"/>
            <SettingComp icon="watering-can-outline" text="Лимит увлажнения почвы 3"/>
            <SettingComp icon="watering-can-outline" text="Лимит увлажнения почвы 4"/>
            <SettingComp icon="watering-can-outline" text="Лимит увлажнения почвы 5"/>
            <SettingComp icon="watering-can-outline" text="Лимит увлажнения почвы 6"/>

        </ScrollView>
    );
}
