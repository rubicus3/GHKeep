import React, { useContext, useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { Text, Divider, Snackbar } from "react-native-paper";
import StatusComp from "../components/StatusComp";
import { ExtraContext } from "../Context";
import {
    getForkState,
    getHydrationState,
    getWateringState,
    changeForkState,
    changeHydrationState,
    changeWateringState,
    getHbTable,
} from "../Api";

export default function ManageScreen() {
    const { extra, setExtra } = useContext(ExtraContext);

    const [snackContent, setSnackContent] = useState("OK");
    const [visible, setVisible] = useState(false);

    const [hbCurData, setHbCurData] = useState(null);
    const fetchHb = useEffect(() => {
        getHbTable().then((json) => {
            setHbCurData(json);
        });
    }, []);

    const onToggleSnackBar = (content) => {
        setSnackContent(content);
        setVisible(!visible);
    };

    const onDismissSnackBar = () => setVisible(false);

    return (
        <View style={{ flex: 1 }}>
            <Text variant="headlineMedium" style={{ padding: 15 }}>
                Статус
            </Text>

            <Divider />

            <StatusComp
                text="Форточки"
                icon="weather-windy"
                statusId=""
                getFunc={getForkState}
                changeFunc={changeForkState}
                isExtra={extra}
                snack={onToggleSnackBar}
            />
            <StatusComp
                text="Увлажнение"
                icon="air-filter"
                statusId=""
                getFunc={getHydrationState}
                changeFunc={changeHydrationState}
                isExtra={extra}
                snack={onToggleSnackBar}
            />
            {hbCurData !== null ? (
                [...Array(hbCurData.h_list.length)].map((x, id) => (
                    <StatusComp
                        key={id}
                        text="Бороздка"
                        icon="watering-can-outline"
                        statusId={id + 1}
                        getFunc={getWateringState}
                        changeFunc={changeWateringState}
                        isExtra={extra}
                        snack={onToggleSnackBar}
                    />
                ))
            ) : (
                <></>
            )}

            <View style={{ marginVertical: 30 }}></View>

            {extra ? (
                <Text
                    variant="titleMedium"
                    style={{
                        alignSelf: "center",
                        borderColor: "ff7970",
                        borderRadius: 15,
                        borderWidth: 1,
                        padding: 5,
                        marginBottom: 50,
                    }}
                >
                    Включён Экстренный Режим
                </Text>
            ) : (
                <View style={{ marginBottom: 80 }}></View>
            )}

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
        </View>
    );
}
