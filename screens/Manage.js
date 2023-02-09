import React from "react";
import { ScrollView } from "react-native";
import { Text, Divider } from "react-native-paper";
import TStatus from "../components/TStatus";
import HStatus from "../components/HStatus";
import HbStatus from "../components/HbStatus";

export default function ManageScreen() {
    return (
        <ScrollView scrollEnabled={false}>
            <Text variant="headlineMedium" style={{ padding: 15 }}>
                Статус
            </Text>

            <Divider />
            <TStatus />
            <HStatus />
            <HbStatus wateringId={1} />
            <HbStatus wateringId={2} />
            <HbStatus wateringId={3} />
            <HbStatus wateringId={4} />
            <HbStatus wateringId={5} />
            <HbStatus wateringId={6} />
        </ScrollView>
    );
}
