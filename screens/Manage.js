import React from "react";
import { ScrollView } from "react-native";
import { Text, Divider } from "react-native-paper";
import StatusComp from "../components/StatusComp";
import {
    getWateringState,
    changeWateringState,
    getForkState,
    changeForkState,
    changeHydrationState,
    getHydrationState,
} from "../Api";

export default function ManageScreen() {
    return (
        <ScrollView scrollEnabled={false}>
            <Text variant="headlineMedium" style={{ padding: 15 }}>
                Статус
            </Text>

            <Divider />

            <StatusComp
                text="Форточки"
                icon="weather-windy"
                statusId=""
                getFunc={getHydrationState}
                changeFunc={changeHydrationState}
            />
            <StatusComp
                text="Увлажнение"
                icon="air-filter"
                statusId=""
                getFunc={getForkState}
                changeFunc={changeForkState}
            />
            {[1, 2, 3, 4, 5, 6].map((id) => (
                <StatusComp
                    key={id}
                    text="Бороздка"
                    icon="watering-can-outline"
                    statusId={id}
                    getFunc={getWateringState}
                    changeFunc={changeWateringState}
                />
            ))}
        </ScrollView>
    );
}
