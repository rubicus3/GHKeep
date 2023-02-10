import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import { TextInput, Text, Button, Divider } from "react-native-paper";

export default function SettingsScreen() {
    const [isEditable, setIsEditable] = useState(false);

    const toggleHadler = () => {
        setIsEditable(!isEditable);
    };

    return (
        <ScrollView scrollEnabled={false}>
            <Text variant="headlineMedium" style={{ padding: 15 }}>
                Настройки
            </Text>
            <Divider />
            <View style={{ flex: 1, flexDirection: "row", marginBottom: 5 }}>
                <Text style={{ marginLeft: 5 }}>test</Text>
                <View style={{ flexGrow: 1 }} />
                {isEditable ? <TextInput /> : <Text>test</Text>}
                <Button
                    icon={isEditable ? "check" : "pencil"}
                    textColor="#000000"
                    onPress={toggleHadler}
                    style={{ marginTop: 5 }}
                ></Button>
                {isEditable ? <Button
                    icon="close"
                    textColor="#000000"
                    onPress={toggleHadler}
                    style={{ marginTop: 5 }}
                ></Button> : <></>}
                
            </View>
        </ScrollView>
    );
}
