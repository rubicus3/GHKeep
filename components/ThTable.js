import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { DataTable } from "react-native-paper";
import { getThTable } from "../Api";

const ThTable = () => {
    const [tData, setTData] = useState([0, 0, 0, 0]);
    const [hData, setHData] = useState([0, 0, 0, 0]);

    const fetchData = () => {
        getThTable().then((json) => {
            setTData(json.t_list);
            setHData(json.h_list);
        });
    };

    const onStart = useEffect(() => {
        fetchData();

        const interval = setInterval(() => {
            fetchData();
        }, 30000);

        return () => clearInterval(interval);
    }, []);

    return (
        <View
            style={{
                backgroundColor: "rgb(215, 232, 205)",
                borderRadius: 24,
                margin: 10,
            }}
        >
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>Воздух</DataTable.Title>
                    {[...Array(tData.length)].map((x, i) => (
                        <DataTable.Title key={i}>№ {i + 1}</DataTable.Title>
                    ))}
                </DataTable.Header>

                <DataTable.Row>
                    <DataTable.Cell>T °C</DataTable.Cell>
                    {tData.map((val, i) => (
                        <DataTable.Cell key={i}>{val}°C</DataTable.Cell>
                    ))}
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>H%</DataTable.Cell>
                    {hData.map((val, i) => (
                        <DataTable.Cell key={i}>{val}%</DataTable.Cell>
                    ))}
                </DataTable.Row>
            </DataTable>
        </View>
    );
};

export default ThTable;
