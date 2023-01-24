import React from "react";
import { ScrollView, View, Dimensions, StyleSheet } from "react-native";
import { Divider, List, Text } from "react-native-paper";
import HbDataTable from "../components/HbTable";
import HumidityGraph from "../components/HumidityG";
import ThTable from "../components/ThTable";

const screenWidth = Dimensions.get("window").width;

export default function HomeScreen() {
    return (
        <ScrollView>
            <Text variant="headlineMedium" style={{ margin: 15 }}>
                Текущие данные
            </Text>
            <Divider />

            <ThTable
                tData={[10.2, 20.3, 30.4, 40.5]}
                hData={[14, 18, 35, 60]}
            />

            <View style={styles.Divider} />

            <HbDataTable data={[15, 23, 32, 43, 51, 62]} />

            <View style={styles.Divider} />

            <ScrollView
                horizontal={true}
                decelerationRate={0}
                snapToInterval={screenWidth}
                snapToAlignment="center"
                pagingEnabled
            >
                <HumidityGraph id={1} data={[60, 36, 70, 50, 26]} />
                <HumidityGraph id={2} data={[35, 24, 65, 23, 54]} />
                <HumidityGraph id={3} data={[65, 45, 22, 54, 13]} />
                <HumidityGraph id={4} data={[23, 32, 43, 23, 41]} />
            </ScrollView>

            <View style={styles.Divider} />

            <ScrollView horizontal={true}>
                <HumidityGraph />
                <HumidityGraph />
                <HumidityGraph />
                <HumidityGraph />
            </ScrollView>
            <View style={styles.Divider} />

            <ScrollView horizontal={true}>
                <HumidityGraph />
                <HumidityGraph />
                <HumidityGraph />
                <HumidityGraph />
            </ScrollView>
            <Divider />
            <Text variant="headlineMedium" style={{ margin: 15 }}>
                Средние данные
            </Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    Divider: {
        marginTop: 30,
    },
});
