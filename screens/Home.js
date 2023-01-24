import React, { useEffect, useState } from "react";
import { ScrollView, View, Dimensions, StyleSheet } from "react-native";
import { Divider, Text } from "react-native-paper";
import AvgTable from "../components/AvgTable";
import HbTable from "../components/HbTable";
import ThTable from "../components/ThTable";
import ThGraph from "../components/ThGraph";
import { get_temp_hum_for_graphics } from "../Api";

const screenWidth = Dimensions.get("window").width;

export default function HomeScreen() {
    const [thData, setThData] = useState(null);

    const onStart = useEffect(() => {
        get_temp_hum_for_graphics().then((json) => {
            setThData(json);
        });
    });

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

            <HbTable data={[15, 23, 32, 43, 51, 62]} />

            <View style={styles.Divider} />

            <ScrollView
                horizontal={true}
                decelerationRate={0}
                snapToInterval={screenWidth}
                snapToAlignment="center"
                pagingEnabled
            >
                {thData !== null ? (
                    thData.map((json) => (
                        <ThGraph
                            suffix="%"
                            id={json.id}
                            data={json.h_list}
                            time={json.tim_list}
                            key={json.id}
                        />
                    ))
                ) : (
                    <View></View>
                )}
                {/* <ThGraph
                    id={1}
                    suffix="%"
                    data={[60, 36, 70, 50, 26]}
                    time={["19:40", "19:45", "19:50", "19:55", "20:00"]}
                /> */}
            </ScrollView>

            <View style={styles.Divider} />

            <ScrollView
                horizontal={true}
                decelerationRate={0}
                snapToInterval={screenWidth}
                snapToAlignment="center"
                pagingEnabled
            >
                <ThGraph />
                <ThGraph />
                <ThGraph />
                <ThGraph />
            </ScrollView>
            <View style={styles.Divider} />

            <ScrollView
                horizontal={true}
                decelerationRate={0}
                snapToInterval={screenWidth}
                snapToAlignment="center"
                pagingEnabled
            >
                <ThGraph />
                <ThGraph />
                <ThGraph />
                <ThGraph />
                <ThGraph />
                <ThGraph />
            </ScrollView>

            <Divider />

            <Text variant="headlineMedium" style={{ margin: 15 }}>
                Средние данные
            </Text>

            <AvgTable data={[50, 30]} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    Divider: {
        marginTop: 30,
    },
});
