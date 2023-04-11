import React, { useEffect, useState } from "react";
import { ScrollView, View, Dimensions, StyleSheet } from "react-native";
import { Divider, Text } from "react-native-paper";
import AvgTable from "../components/AvgTable";
import HbTable from "../components/HbTable";
import ThTable from "../components/ThTable";
import GraphComp from "../components/GraphComp";
import {
    getThTable,
    getHbTable,
    getTempHumGrpah,
    getHbGrpah,
    getAvgTempGraph,
    getAvgHumGraph,
} from "../Api";

const screenWidth = Dimensions.get("window").width;

const grpahScrollProps = {
    horizontal: true,
    decelerationRate: 0,
    snapToInterval: screenWidth,
    snapToAlignment: "center",
    pagingEnabled: true,
};

export default function HomeScreen() {
    const [thCurData, setThCurData] = useState(null);
    const [hbCurData, setHbCurData] = useState(null);

    const [thGraphData, setThGraphData] = useState(null);
    const [hbGraphData, setHbGraphData] = useState(null);

    const [avgGraphTempData, setAvgGraphTempData] = useState(null);
    const [avgGraphHumData, setAvgGraphHumData] = useState(null);

    const fetchData = () => {
        getThTable().then((json) => {
            setThCurData(json);
        });

        getHbTable().then((json) => {
            setHbCurData(json);
        });

        getTempHumGrpah().then((json) => {
            setThGraphData(json);
        });

        getHbGrpah().then((json) => {
            setHbGraphData(json);
        });

        getAvgTempGraph().then((json) => {
            setAvgGraphTempData(json);
        });

        getAvgHumGraph().then((json) => {
            setAvgGraphHumData(json);
        });
    };

    const onStart = useEffect(() => {
        fetchData();
        const interval = setInterval(() => {
            console.log("Fetch home api");

            fetchData();
        }, 300000);

        return () => clearInterval(interval);
    }, []);

    return (
        <ScrollView>
            <Text variant="headlineMedium" style={{ margin: 15 }}>
                Текущие данные
            </Text>

            <Divider />

            {/* Таблица текущих данных о влажности температуры и влажности с 4-х датчиков */}
            {thCurData !== null ? (
                <ThTable tData={thCurData.t_list} hData={thCurData.h_list} />
            ) : (
                <ThTable />
            )}

            <View style={styles.Divider} />

            {/* Таблица текущих данных о влажности почвы с 6-и датчиков */}
            {hbCurData !== null ? (
                <HbTable data={hbCurData.h_list} />
            ) : (
                <HbTable />
            )}

            <View style={styles.Divider} />

            {/* Список графиков с данными датчиков температуры */}
            <Text variant="titleLarge" style={{ textAlign: "center" }}>
                История температуры воздуха
            </Text>
            <ScrollView {...grpahScrollProps}>
                {thGraphData !== null ? (
                    thGraphData.map((json) => (
                        <GraphComp
                            suffix="°C"
                            id={"№ " + json.id}
                            data={json.t_list}
                            time={json.tim_list}
                            key={json.id}
                        />
                    ))
                ) : (
                    <GraphComp />
                )}
            </ScrollView>

            <View style={styles.Divider} />

            {/* Список графиков с данными датчиков влажности */}
            <Text variant="titleLarge" style={{ textAlign: "center" }}>
                История влажности воздуха
            </Text>
            <ScrollView {...grpahScrollProps}>
                {thGraphData !== null ? (
                    thGraphData.map((json) => (
                        <GraphComp
                            suffix="%"
                            id={"№ " + json.id}
                            data={json.h_list}
                            time={json.tim_list}
                            key={json.id}
                        />
                    ))
                ) : (
                    <GraphComp />
                )}
            </ScrollView>

            <View style={styles.Divider} />

            {/* Список графиков с данными датчиков влажности почвы */}
            <Text variant="titleLarge" style={{ textAlign: "center" }}>
                История влажности почвы
            </Text>
            <ScrollView {...grpahScrollProps}>
                {hbGraphData !== null ? (
                    hbGraphData.map((json) => (
                        <GraphComp
                            suffix="%"
                            id={"№ " + json.id}
                            data={json.h_list}
                            time={json.tim_list}
                            key={json.id}
                        />
                    ))
                ) : (
                    <GraphComp />
                )}
            </ScrollView>

            <Text variant="headlineMedium" style={{ margin: 15 }}>
                Средние данные
            </Text>

            <Divider />

            {avgGraphTempData !== null && avgGraphHumData !== null ? (
                <AvgTable
                    data={[
                        avgGraphTempData.d_list[4],
                        avgGraphHumData.d_list[4],
                    ]}
                />
            ) : (
                <AvgTable />
            )}

            <View style={styles.Divider} />

            <Text variant="titleLarge" style={{ textAlign: "center" }}>
                Изменение температуры
            </Text>
            <ScrollView {...grpahScrollProps}>
                {avgGraphTempData !== null ? (
                    <GraphComp
                        suffix="°C"
                        id={""}
                        data={avgGraphTempData.d_list}
                        time={avgGraphTempData.t_list}
                    />
                ) : (
                    <GraphComp />
                )}
            </ScrollView>

            <View style={styles.Divider} />

            <Text variant="titleLarge" style={{ textAlign: "center" }}>
                Изменение влажности
            </Text>
            <ScrollView {...grpahScrollProps}>
                {avgGraphHumData !== null ? (
                    <GraphComp
                        suffix="%"
                        id={""}
                        data={avgGraphHumData.d_list}
                        time={avgGraphHumData.t_list}
                    />
                ) : (
                    <GraphComp />
                )}
            </ScrollView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    Divider: {
        marginTop: 30,
    },
});
