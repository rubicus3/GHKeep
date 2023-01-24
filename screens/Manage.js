import React, { useState } from "react";
import { Text, View, ScrollView } from "react-native";
import { Button, List } from "react-native-paper";
import { gfdsfsdsfd } from "../Api";

export default function ManageScreen() {
    const [testText, setTestText] = useState();

    return (
        <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
            <Button
                buttonColor="ababab"
                onPress={() => setTestText(gfdsfsdsfd())
                }
            >

                Press to get temp of id[0]
            </Button>

            <Text>temp: {testText}</Text>
        </View>
    );
}
