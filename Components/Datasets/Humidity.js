import React from "react";
import { Dimensions, View } from "react-native";
import { LineChart } from "react-native-chart-kit";

const HumidityGraph = (props) => {
    return (
        <LineChart
            data={{
                labels: [
                    "19:45",
                    "19:45",
                    "19:45",
                    "19:45",
                    "19:45",
                    "19:45",
                    "19:45",
                    "19:45",
                ],
                datasets: [
                    {
                        data: [10, 20, 50, 40, 50, 20, 90, 0],
                    },
                ],
            }}
            width={Dimensions.get("window").width} // from react-native
            height={200}
            yAxisSuffix="%"
            chartConfig={{
                backgroundColor: "#66bb6a",
                decimalPlaces: 1, // optional, defaults to 2dp
                backgroundGradientFrom: "#66bb6a",
                backgroundGradientTo: "#66bb6a",
                color: (opacity = 0) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 0) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                    borderRadius: 16,
                },
                propsForDots: {
                    r: "4",
                    strokeWidth: "1",
                    stroke: "#338a3e",
                },
            }}
            bezier
            style={{
                margin: 8,
                borderRadius: 20,
            }}
        />
  );
};

export default HumidityGraph;
