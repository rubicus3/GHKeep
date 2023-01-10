import React from "react";
import { ScrollView, Text, View, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

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
            <LineChart
                data={data}
                width={screenWidth }
                height={220}
                chartConfig={chartConfig}
            />
        </ScrollView>
    );
}
