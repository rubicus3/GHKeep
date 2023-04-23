import React, { useState } from "react";
import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { storeIp, getIp } from "../Context";

export default function TestScreen() {
    const [sstate, setsstate] = useState("");
    const [textlol, settextlol] = useState("");


    const savefjf = () => {
        storeIp(sstate);
    };

    const printssv = () => {
        getIp().then((t) => {
            settextlol(t);
        })
    };

    return (
        <View style={{ flex: 1 }}>
            <Button onPress={printssv}> Print</Button>
            <Button onPress={savefjf}> Save </Button>

            <TextInput onChangeText={(text) => setsstate(text)}></TextInput>

            <Text> {textlol} </Text>
        </View>
    );
}
