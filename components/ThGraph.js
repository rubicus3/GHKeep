import React from "react";
import { Dimensions, View } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { Text } from "react-native-paper";

const ThGraph = ({
    suffix = "",
    id = 1,
    data = [60, 36, 70, 50, 26],
    time = ["19:40", "19:45", "19:50", "19:55", "20:00"],
}) => {
    return (
        <View>
            <Text variant="titleMedium" style={{ marginLeft: 15 }}>
                Датчик {id}
            </Text>
            <LineChart
                data={{
                    labels: time,
                    datasets: [
                        {
                            data: data,
                        },
                    ],
                }}
                width={Dimensions.get("window").width} // from react-native
                height={200}
                yAxisSuffix="%"
                chartConfig={{
                    backgroundColor: "#6e9c59",
                    decimalPlaces: 1, // optional, defaults to 2dp
                    backgroundGradientFrom: "#699157",
                    backgroundGradientTo: "#77bd53",
                    color: (opacity = 0) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 0) =>
                        `rgba(255, 255, 255, ${opacity})`,
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
        </View>
    );
};

export default ThGraph;
