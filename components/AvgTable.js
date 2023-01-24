import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { DataTable } from "react-native-paper";

const HbDataTable = ({ data }) => {
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
                    <DataTable.Title>Средние данные</DataTable.Title>
                    <DataTable.Title>TC </DataTable.Title>
                    <DataTable.Title>H%</DataTable.Title>
                    <DataTable.Title>Hb%</DataTable.Title>
                </DataTable.Header>

                <DataTable.Row>
                    <DataTable.Cell></DataTable.Cell>
                    <DataTable.Cell>{data[0]}%</DataTable.Cell>
                    <DataTable.Cell>{data[1]}%</DataTable.Cell>
                    <DataTable.Cell>{data[2]}%</DataTable.Cell>
                </DataTable.Row>
            </DataTable>
        </View>
    );
};

export default HbDataTable;
