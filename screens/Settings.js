import React, { useEffect, useState, useContext } from "react";
import { ScrollView, View } from "react-native";
import {
    Text,
    Divider,
    Button,
    Snackbar,
    ToggleButton,
} from "react-native-paper";
import SettingComp from "../components/SettingComp";
import { ExtraContext } from "../Context";
import {
    getLimitValues,
    changeTemperatureLimit,
    changeHumidityLimit,
    changeHbLimit,
} from "../Api";

export default function SettingsScreen() {
    const { extra, setExtra } = useContext(ExtraContext);

    const [limits, setLimits] = useState(null);

    const [visible, setVisible] = useState(false);
    const [snackContent, setSnackContent] = useState("OK");

    const onToggleSnackBar = (content) => {
        setSnackContent(content);
        setVisible(!visible);
    };

    const onDismissSnackBar = () => setVisible(false);

    const onStart = useEffect(() => {
        getLimitValues().then((json) => {
            setLimits(json);
        });
    }, []);

    return (
        <ScrollView scrollEnabled={false}>
            <Text variant="headlineMedium" style={{ padding: 15 }}>
                Настройки
            </Text>
            <Divider />
            {!!limits ? (
                <SettingComp
                    settingId={0}
                    icon="weather-windy"
                    text="Лимит на форточки"
                    val={limits.temperature}
                    saveFunc={changeTemperatureLimit}
                    snack={onToggleSnackBar}
                />
            ) : (
                <></>
            )}
            {!!limits ? (
                <SettingComp
                    settingId={0}
                    icon="air-filter"
                    text="Лимит увлажнения"
                    val={limits.humidity_air}
                    saveFunc={changeHumidityLimit}
                    snack={onToggleSnackBar}
                />
            ) : (
                <></>
            )}

            {!!limits ? (
                limits.humidity_soil.map((json) => (
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

            <Divider style={{ marginVertical: 50 }} />
            <View style={{ justifyContent: "center", flexDirection: "row" }}>
                <ToggleButton
                    icon="alert"
                    value="alert"
                    status={extra ? "checked" : "unchecked"}
                    onPress={() => {
                        setExtra(!extra);
                    }}
                />
                <Text
                    variant="titleMedium"
                    style={{ paddingTop: 7, marginLeft: 5 }}
                >
                    Экстренный Режим
                </Text>
            </View>
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
