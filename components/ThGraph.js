import React from "react";
import { Dimensions, View } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { Text } from "react-native-paper";

const ThGraph = ({
    suffix = "",
    id = 0,
    data = [0, 0, 0, 0, 0],
    time = ["00:00", "00:00", "00:00", "00:00", "00:00"],
}) => {
    return (
        <View style={{backgroundColor: "ababab"}}>
            <Text variant="titleMedium" style={{ marginLeft: 15 }}>
                № {id}
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
                yAxisSuffix={suffix}
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
