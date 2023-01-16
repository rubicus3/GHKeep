import React from "react";
import { DataTable } from "react-native-paper";

const THTable = ({ tData, hData }) => {
    return (
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
                <DataTable.Cell>{tData[0]}</DataTable.Cell>
                <DataTable.Cell>{tData[1]}</DataTable.Cell>
                <DataTable.Cell>{tData[2]}</DataTable.Cell>
                <DataTable.Cell>{tData[3]}</DataTable.Cell>

            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell>H%</DataTable.Cell>
                <DataTable.Cell>{hData[0]}%</DataTable.Cell>
                <DataTable.Cell>{hData[1]}%</DataTable.Cell>
                <DataTable.Cell>{hData[2]}%</DataTable.Cell>
                <DataTable.Cell>{hData[3]}%</DataTable.Cell>

            </DataTable.Row>
        </DataTable>
    );
};

export default THTable;
