import React, { useEffect, useState, useContext } from "react";
import { View } from "react-native";
import {
    Text,
    Dialog,
    Divider,
    Button,
    Snackbar,
    ToggleButton,
    IconButton,
    TextInput,
} from "react-native-paper";
import SettingComp from "../components/SettingComp";
import { ExtraContext, getIp, storeIp } from "../Context";
import {
    getLimitValues,
    changeTemperatureLimit,
    changeHumidityLimit,
    changeHbLimit,
} from "../Api";

export default function SettingsScreen() {
    const { extra, setExtra } = useContext(ExtraContext);

    const [limits, setLimits] = useState(null);

    const [snackVisible, setSnackVisible] = useState(false);
    const [snackContent, setSnackContent] = useState("OK");

    const [textInputState, setTextInputState] = useState("");

    const [dialogVisible, setDialogVisible] = React.useState(false);

    const showDialog = () => setDialogVisible(true);

    const hideDialog = () => setDialogVisible(false);

    const onToggleSnackBar = (content) => {
        setSnackContent(content);
        setSnackVisible(!snackVisible);
    };

    const onDismissSnackBar = () => setSnackVisible(false);

    const onDialogCancel = () => {
        hideDialog();

        getIp().then((ip) => {
            setTextInputState(ip);
        });
    };

    const onDialogSave = () => {
        hideDialog();

        onToggleSnackBar(
            "Перезапустите приложение, чтобы изменения вошли в силу."
        );
        storeIp(textInputState);
    };

    const onStart = useEffect(() => {
        getLimitValues().then((json) => {
            setLimits(json);
        });

        getIp().then((ip) => {
            setTextInputState(ip);
        });
    }, []);

    return (
        <View style={{ flex: 1 }}>
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
            <View
                style={{
                    justifyContent: "center",
                    flexDirection: "row",
                    marginBottom: 10,
                }}
            >
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

            <View
                style={{
                    justifyContent: "center",
                    flexDirection: "row",
                    marginBottom: 10,
                }}
            >
                <IconButton icon="cog" onPress={showDialog} />
                <Text variant="titleMedium" style={{ paddingTop: 12 }}>
                    Настройки IP-Адреса
                </Text>
            </View>

            <Dialog visible={dialogVisible} onDismiss={onDialogCancel}>
                <Dialog.Title>Настройки IP</Dialog.Title>
                <Dialog.Content>
                    <TextInput
                        mode="flat"
                        value={textInputState}
                        onChangeText={(text) => setTextInputState(text)}
                    />
                </Dialog.Content>
                <Dialog.Actions>
                    <Button onPress={onDialogSave}>Сохранить</Button>
                    <Button onPress={onDialogCancel}>Отмена</Button>
                </Dialog.Actions>
            </Dialog>

            <Snackbar
                visible={snackVisible}
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
        </View>
    );
}
