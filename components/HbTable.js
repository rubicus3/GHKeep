import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { DataTable } from "react-native-paper";

const HbTable = ({ data }) => {
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
                    <DataTable.Title>№ 1</DataTable.Title>
                    <DataTable.Title>№ 2</DataTable.Title>
                    <DataTable.Title>№ 3</DataTable.Title>
                    <DataTable.Title>№ 4</DataTable.Title>
                    <DataTable.Title>№ 5</DataTable.Title>
                    <DataTable.Title>№ 6</DataTable.Title>
                </DataTable.Header>

                <DataTable.Row>
                    <DataTable.Cell>Hb%</DataTable.Cell>
                    <DataTable.Cell>{data[0]}%</DataTable.Cell>
                    <DataTable.Cell>{data[1]}%</DataTable.Cell>
                    <DataTable.Cell>{data[2]}%</DataTable.Cell>
                    <DataTable.Cell>{data[3]}%</DataTable.Cell>
                    <DataTable.Cell>{data[4]}%</DataTable.Cell>
                    <DataTable.Cell>{data[5]}%</DataTable.Cell>
                </DataTable.Row>
            </DataTable>
        </View>
    );
};

export default HbTable;
