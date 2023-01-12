import React from "react";
import { ScrollView, Text, View, Dimensions, StyleSheet } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { DataTable, Divider } from "react-native-paper";

const screenWidth = Dimensions.get("window").width;

const chartConfig = {
    backgroundColor: "#e26a00",
    backgroundGradientFrom: "#fb8c00",
    backgroundGradientTo: "#ffa726",
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
        borderRadius: 16,
    },
    propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726",
    },
};

export default function HomeScreen() {
    const data = {
        labels: ["", "", "", "", "", ""],
        datasets: [
            {
                data: [20, 45, 28, 80, 99, 43],
                color: (opacity = 1) => `rgba(134, 65, 0, ${opacity})`, // optional
                strokeWidth: 2, // optional
            },
        ],
        legend: ["Humidity"], // optional
    };

    return (
        <ScrollView>
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>Воздух</DataTable.Title>
                    <DataTable.Title>№ 1</DataTable.Title>
                    <DataTable.Title>№ 2</DataTable.Title>
                    <DataTable.Title>№ 3</DataTable.Title>
                    <DataTable.Title>№ 4</DataTable.Title>
                </DataTable.Header>

                <DataTable.Row>
                    <DataTable.Cell>T °C</DataTable.Cell>
                    <DataTable.Cell>30.0</DataTable.Cell>
                    <DataTable.Cell>20.4</DataTable.Cell>
                    <DataTable.Cell>13.4</DataTable.Cell>
                    <DataTable.Cell>18.5</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>H%</DataTable.Cell>
                    <DataTable.Cell>14%</DataTable.Cell>
                    <DataTable.Cell>18%</DataTable.Cell>
                    <DataTable.Cell>35%</DataTable.Cell>
                    <DataTable.Cell>46%</DataTable.Cell>
                </DataTable.Row>
            </DataTable>
            <View style={styles.Divider} />
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>Почва</DataTable.Title>
                    <DataTable.Title>№ 1</DataTable.Title>
                    <DataTable.Title>№ 2</DataTable.Title>
                    <DataTable.Title>№ 3</DataTable.Title>
                    <DataTable.Title>№ 4</DataTable.Title>
                    <DataTable.Title>№ 5</DataTable.Title>
                    <DataTable.Title>№ 6</DataTable.Title>
                </DataTable.Header>

                <DataTable.Row>
                    <DataTable.Cell>Hb%</DataTable.Cell>
                    <DataTable.Cell>30.0%</DataTable.Cell>
                    <DataTable.Cell>20.4%</DataTable.Cell>
                    <DataTable.Cell>13.4%</DataTable.Cell>
                    <DataTable.Cell>18.5%</DataTable.Cell>
                    <DataTable.Cell>18.5%</DataTable.Cell>
                    <DataTable.Cell>18.5%</DataTable.Cell>
                </DataTable.Row>
            </DataTable>

            <View style={styles.Divider} />

            <LineChart
                data={data}
                width={screenWidth}
                height={220}
                chartConfig={chartConfig}
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    Divider: {
        marginTop: 30,
    },
});
