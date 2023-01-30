import React from "react";
import { View } from "react-native";
import { DataTable } from "react-native-paper";

const ThTable = ({ tData = [0, 0, 0, 0], hData = [0, 0, 0, 0] }) => {
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
                    <DataTable.Title>№ 1</DataTable.Title>
                    <DataTable.Title>№ 2</DataTable.Title>
                    <DataTable.Title>№ 3</DataTable.Title>
                    <DataTable.Title>№ 4</DataTable.Title>
                </DataTable.Header>

                <DataTable.Row>
                    <DataTable.Cell>T °C</DataTable.Cell>
                    <DataTable.Cell>{tData[0]}°C</DataTable.Cell>
                    <DataTable.Cell>{tData[1]}°C</DataTable.Cell>
                    <DataTable.Cell>{tData[2]}°C</DataTable.Cell>
                    <DataTable.Cell>{tData[3]}°C</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>H%</DataTable.Cell>
                    <DataTable.Cell>{hData[0]}%</DataTable.Cell>
                    <DataTable.Cell>{hData[1]}%</DataTable.Cell>
                    <DataTable.Cell>{hData[2]}%</DataTable.Cell>
                    <DataTable.Cell>{hData[3]}%</DataTable.Cell>
                </DataTable.Row>
            </DataTable>
        </View>
    );
};

export default ThTable;
