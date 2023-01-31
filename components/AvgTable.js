import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { DataTable } from "react-native-paper";

const AvgTable = ({ data = [0, 0] }) => {
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
                    <DataTable.Title>T °C</DataTable.Title>
                    <DataTable.Title>H%</DataTable.Title>
                </DataTable.Header>

                <DataTable.Row>
                    <DataTable.Cell>{data[0]}°C</DataTable.Cell>
                    <DataTable.Cell>{data[1]}%</DataTable.Cell>
                </DataTable.Row>
            </DataTable>
        </View>
    );
};

export default AvgTable;
