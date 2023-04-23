import React, { useEffect, useState } from "react";
import { View, TextInput } from "react-native";
import { Button } from "react-native-paper";

const SettingComp = ({ settingId, text, icon, val, saveFunc, snack }) => {
    const [currentValue, setCurrentValue] = useState(val);

    const newValueSave = () => {
        saveFunc(settingId, currentValue).then((response) => {
            snack(response);
        });
    };

    return (
        <View
            style={{ flexDirection: "row", alignItems: "center", height: 55 }}
        >
            <Button icon={icon} textColor="#000000" style={{ marginTop: 5 }}>
                {text}
            </Button>
            <View style={{ flexGrow: 1 }} />

            <TextInput
                keyboardType="decimal-pad"
                inputMode="decimal"
                value={String(currentValue)}
                maxLength={5}
                onChangeText={(text) => setCurrentValue(text)}
                style={{
                    justifyContent: "flex-end",
                    backgroundColor: "#fff",
                    borderWidth: 1,
                    borderRadius: 5,
                    padding: 6,
                    paddingLeft: 13,
                }}
            />
            <Button
                icon="content-save-outline"
                textColor="#000000"
                style={{ marginTop: 5, justifyContent: "flex-end" }}
                onPress={newValueSave}
            />
        </View>
    );
};

export default SettingComp;
