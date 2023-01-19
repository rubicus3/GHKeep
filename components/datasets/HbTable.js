import React, { useEffect, useState } from "react";
import { DataTable } from "react-native-paper";

const HbDataTable = ({ data }) => {
    return (
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
    );
};

export default HbDataTable;
