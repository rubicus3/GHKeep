import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { Text, Divider, Button, Snackbar } from "react-native-paper";
import {
    getLimitValues,
    changeTemperatureLimit,
    changeHumidityLimit,
    changeHbLimit,
} from "../Api";
import SettingComp from "../components/SettingComp";

export default function SettingsScreen() {
    const [tempLimit, setTempLimit] = useState(null);
    const [humLimit, setHumLimit] = useState(null);
    const [hbLimits, setHbLimits] = useState(null);

    const [visible, setVisible] = useState(false);
    const [snackContent, setSnackContent] = useState("OK");

    const onToggleSnackBar = (content) => {
        setSnackContent(content);
        setVisible(!visible);
    };

    const onDismissSnackBar = () => setVisible(false);

    const onStart = useEffect(() => {
        getLimitValues().then((json) => {
            setTempLimit(json.temperature);
            setHumLimit(json.humidity_air);
            setHbLimits(json.humidity_soil);
        });
    }, []);

    return (
        <ScrollView scrollEnabled={false}>
            <Text variant="headlineMedium" style={{ padding: 15 }}>
                Настройки
            </Text>
            <Divider />
            {!!tempLimit ? (
                <SettingComp
                    settingId={0}
                    icon="weather-windy"
                    text="Лимит на форточки"
                    val={tempLimit}
                    saveFunc={changeTemperatureLimit}
                    snack={onToggleSnackBar}
                />
            ) : (
                <></>
            )}
            {!!humLimit ? (
                <SettingComp
                    settingId={0}
                    icon="air-filter"
                    text="Лимит увлажнения"
                    val={humLimit}
                    saveFunc={changeHumidityLimit}
                    snack={onToggleSnackBar}
                />
            ) : (
                <></>
            )}

            {!!hbLimits ? (
                hbLimits.map((json) => (
                    <SettingComp
                        key={json.id}
                        settingId={json.id}
                        icon="watering-can-outline"
                        text={`Лимит увлажнения почвы ${json.id}`}
                        val={json.hb}
                        saveFunc={changeHbLimit}
                        snack={onToggleSnackBar}
                    />
                ))
            ) : (
                <></>
            )}

            <Divider style={{ marginVertical: 50}} />
            <Button
                icon="alert"
                mode="outlined"
                onPress={() => onToggleSnackBar("сорян пока не работает")}
                style={{ width: 200, alignSelf: "center" }}
            >
                Экстренный режим
            </Button>
            <Snackbar
                visible={visible}
                duration={3000}
                onDismiss={onDismissSnackBar}
                action={{
                    label: "Dismiss",
                    onPress: () => {
                        onDismissSnackBar;
                    },
                }}
            >
                {snackContent}
            </Snackbar>
        </ScrollView>
    );
}
