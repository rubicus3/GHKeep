import React from "react";
import { View } from "react-native";
import { Switch, Button, Text } from "react-native-paper";

const THStatuss = () => {
    return (
        <View style={{ flex: 1, flexDirection: "row" }}>
            <Button
                style={{ alignItems: "flex-start", flexGrow: 1 }}
                icon="temperature-celsius"
            ></Button>
            <Switch />
            <View
                style={{
                    backgroundColor: "#d7e8cd",
                    borderColor: "#d7e8cd",
                    borderRadius: 15,
                    borderWidth: 7,
                    margin: 12,
                    justifyContent: "flex-end",
                }}
            >
                <Text>STATUS: OPEN</Text>
            </View>
        </View>
    );
};

export default THStatuss;
