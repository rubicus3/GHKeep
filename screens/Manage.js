import React, { useState } from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-paper";
// import axios from "axios";

export default function ManageScreen() {
    const [testText, setTestText] = useState();

    return (
        <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
            <Button
                buttonColor="ababab"
                onPress={() =>
                    fetch("http://10.0.2.2:8000/get_hum/{id}?ids=2")
                        .then((response) => response.json())
                        .then((commits) =>
                            setTestText(commits.temp_hums[0].humidity)
                        )
                }
            >
                
                Press to get temp of id[0]
            </Button>

            <Text>temp: {testText}</Text>
        </View>
    );
}
