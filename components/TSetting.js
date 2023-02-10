import React from "react";
import { View } from "react-native";
import { Button, TextInput } from "react-native-paper";

const TSetting = ({ icon, text, val=5 }) => {
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
                defaultValue={String(val)}
                maxLength={5}
            />
            <Button
                icon="content-save-outline"
                textColor="#000000"
                style={{ marginTop: 5, justifyContent: "flex-end"}}
                onPress={() => {}}
            />
        </View>
    );
};

export default TSetting;
