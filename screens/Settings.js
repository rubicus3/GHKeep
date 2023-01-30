import React from "react";
import { ScrollView, Text, View } from "react-native";
import { TextInput } from "react-native-paper";

export default function SettingsScreen() {
    return (
        <ScrollView>
            <View style={{flex: 1, flexDirection: "row"}}>
                <Text>SEX</Text>
                <TextInput inputMode="decimal" keyboardType="decimal-pad"></TextInput>
            </View>
        </ScrollView>
    );
}
