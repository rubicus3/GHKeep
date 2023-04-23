import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { DataTable } from "react-native-paper";
import { getHbTable } from "../Api.js";

const HbTable = () => {
    const [data, setData] = useState([0, 0, 0, 0, 0, 0]);

    const onStart = useEffect(() => {
        getHbTable().then((json) => {
            setData(json.h_list);
        });

        const interval = setInterval(() => {
            getHbTable().then((json) => {
                setData(json.h_list);
            });
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
                    <DataTable.Title>Почва</DataTable.Title>
                    {[...Array(data.length)].map((x, i) => (
                        <DataTable.Title key={i}>№ {i + 1}</DataTable.Title>
                    ))}
                </DataTable.Header>

                <DataTable.Row>
                    <DataTable.Cell>Hb%</DataTable.Cell>
                    {data.map((val, i) => (
                        <DataTable.Cell key={i}>{val}% </DataTable.Cell>
                    ))}
                </DataTable.Row>
            </DataTable>
        </View>
    );
};

export default HbTable;
