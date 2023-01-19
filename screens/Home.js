import React from "react";
import { ScrollView, Text, View, Dimensions, StyleSheet } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { DataTable, Divider } from "react-native-paper";
import HbDataTable from "../components/datasets/HbTable";
import HumidityGraph from "../components/datasets/HumidityG";
import ThTable from "../components/datasets/ThTable";

const screenWidth = Dimensions.get("window").width;

export default function HomeScreen() {
    return (
        <ScrollView>
            <ThTable
                tData={[10.2, 20.3, 30.4, 40.5]}
                hData={[14, 18, 35, 60]}
            />

            <View style={styles.Divider} />

            <HbDataTable data={[1, 2, 3, 4, 5, 6]} />

            <View style={styles.Divider} />

            <ScrollView horizontal={true}>
                <HumidityGraph />
                <HumidityGraph />
                <HumidityGraph />
                <HumidityGraph />
            </ScrollView>

            <View style={styles.Divider} />

            <ScrollView horizontal={true}>
                <HumidityGraph/>
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
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    Divider: {
        marginTop: 30,
    },
});
