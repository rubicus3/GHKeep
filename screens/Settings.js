import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { Text, Divider } from "react-native-paper";
import { getLimitValues } from "../Api";
import SettingComp from "../components/SettingComp";

export default function SettingsScreen() {
    const [tempLimit, setTempLimit] = useState(0);
    const [humLimit, setHumLimit] = useState(0);
    const [hbLimits, setHbLimits] = useState([]);

    
    const onStart = useEffect(() => {
        getLimitValues().then((json) => {
            setTempLimit(json.temperature);
        });
    }, []);

    return (
        <ScrollView scrollEnabled={false}>
            <Text variant="headlineMedium" style={{ padding: 15 }}>
                Настройки
            </Text>
            <Divider />
            <SettingComp
                icon="weather-windy"
                text="Лимит на форточки"
                val={tempLimit}
            />
            <SettingComp icon="air-filter" text="Лимит увлажнения" />
            <SettingComp
                icon="watering-can-outline"
                text="Лимит увлажнения почвы 1"
            />
            <SettingComp
                icon="watering-can-outline"
                text="Лимит увлажнения почвы 2"
            />
            <SettingComp
                icon="watering-can-outline"
                text="Лимит увлажнения почвы 3"
            />
            <SettingComp
                icon="watering-can-outline"
                text="Лимит увлажнения почвы 4"
            />
            <SettingComp
                icon="watering-can-outline"
                text="Лимит увлажнения почвы 5"
            />
            <SettingComp
                icon="watering-can-outline"
                text="Лимит увлажнения почвы 6"
            />
        </ScrollView>
    );
}
