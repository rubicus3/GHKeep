import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Button, TextInput } from "react-native-paper";

const SettingComp = ({ id, text, icon, val, saveFunc }) => {

    const [currentValue, setCurrentValue] = useState(val);

    return (
        <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
            <Button icon={icon} textColor="#000000" style={{ marginTop: 5 }}>
                {text}
            </Button>
            <View style={{ flexGrow: 1 }} />

            <TextInput
                mode="outlined"
                keyboardType="decimal-pad"
                inputMode="decimal"
                value={String(currentValue)}
                maxLength={5}
                onChangeText={text => setCurrentValue(text)}
                style={{ justifyContent: "flex-end" }}
            />
            <Button
                icon="content-save-outline"
                textColor="#000000"
                style={{ marginTop: 5, justifyContent: "flex-end" }}
                onPress={() => {}}
            />
        </View>
    );
};

export default SettingComp;
