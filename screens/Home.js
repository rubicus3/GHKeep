import React, { useEffect, useState } from "react";
import { ScrollView, View, Dimensions, StyleSheet } from "react-native";
import { Divider, Text } from "react-native-paper";
import AvgTable from "../components/AvgTable";
import HbTable from "../components/HbTable";
import ThTable from "../components/ThTable";
import ThGraph from "../components/ThGraph";
import { getHbGrpah, getTempHumGrpah, getThTable, getHbTable } from "../Api";

const screenWidth = Dimensions.get("window").width;

const grpahScrollProps = {
    horizontal: true,
    decelerationRate: 0,
    snapToInterval: screenWidth,
    snapToAlignment: "center",
    pagingEnabled: true,
};

export default function HomeScreen() {
    const [thGraphData, setThGraphData] = useState(null);
    const [hbGraphData, setHbGraphData] = useState(null);

    const [thCurData, setThCurData] = useState(null);
    const [hbCurData, setHbCurData] = useState(null);

    const [avgData, setAvgData] = useState(null);
    const [avgGraphData, setAvgGraphData] = useState(null);

    const onStart = useEffect(() => {
        getTempHumGrpah().then((json) => {
            setThGraphData(json);
        });

        getHbGrpah().then((json) => {
            setHbGraphData(json);
        });

        getThTable().then((json) => {
            setThCurData(json);
        });

        getHbTable().then((json) => {
            setHbCurData(json);
        })

    }, []);

    return (
        <ScrollView>
            <Text variant="headlineMedium" style={{ margin: 15 }}>
                Текущие данные
            </Text>

            <Divider />

            {/* Таблица текущих данных о влажности температуры и влажности с 4-х датчиков */}
            {thCurData !== null ? (
                <ThTable tData={thCurData.t_list} hData={thCurData.h_list}/>
            ) : (<ThTable/>)}

            <View style={styles.Divider} />

            {/* Таблица текущих данных о влажности почвы с 6-и датчиков */}
            {hbCurData !== null ? (
                <HbTable data={hbCurData.h_list}/>
            ) : (<HbTable/>)}

            <View style={styles.Divider} />

            {/* Список графиков с данными датчиков температуры */}
            <Text variant="titleLarge" style={{ textAlign: "center" }}>
                Датчики температуры воздуха
            </Text>
            <ScrollView {...grpahScrollProps}>
                {thGraphData !== null ? (
                    thGraphData.map((json) => (
                        <ThGraph
                            suffix="°C"
                            id={json.id}
                            data={json.t_list}
                            time={json.tim_list}
                            key={json.id}
                        />
                    ))
                ) : (
                    <ThGraph />
                )}
            </ScrollView>

            <View style={styles.Divider} />

            {/* Список графиков с данными датчиков влажности */}
            <Text variant="titleLarge" style={{ textAlign: "center" }}>
                Датчики влажности воздуха
            </Text>
            <ScrollView {...grpahScrollProps}>
                {thGraphData !== null ? (
                    thGraphData.map((json) => (
                        <ThGraph
                            suffix="%"
                            id={json.id}
                            data={json.h_list}
                            time={json.tim_list}
                            key={json.id}
                        />
                    ))
                ) : (
                    <ThGraph />
                )}
            </ScrollView>

            <View style={styles.Divider} />

            {/* Список графиков с данными датчиков влажности почвы */}
            <Text variant="titleLarge" style={{ textAlign: "center" }}>
                Датчики влажности почвы
            </Text>
            <ScrollView {...grpahScrollProps}>
                {hbGraphData !== null ? (
                    hbGraphData.map((json) => (
                        <ThGraph
                            suffix="%"
                            id={json.id}
                            data={json.h_list}
                            time={json.tim_list}
                            key={json.id}
                        />
                    ))
                ) : (
                    <ThGraph />
                )}
            </ScrollView>

            <Text variant="headlineMedium" style={{ margin: 15 }}>
                Средние данные
            </Text>

            <Divider />

            <AvgTable data={[50, 30]} />

            <View style={styles.Divider} />

            <Text variant="titleLarge" style={{ textAlign: "center" }}>
                Средняя влажность
            </Text>
            <ThGraph />

            <View style={styles.Divider} />

            <Text variant="titleLarge" style={{ textAlign: "center" }}>
                Средняя Температура
            </Text>
            <ThGraph />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    Divider: {
        marginTop: 30,
    },
});
