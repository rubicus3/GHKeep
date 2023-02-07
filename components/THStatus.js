import React, { useState } from "react";
import { View } from "react-native";
import { Switch, Button, Text, IconButton } from "react-native-paper";

const THStatus = ({
    status = true,
    icon = "weather-windy",
    text = "Форточки",
}) => {
    const [isOn, setIsOn] = useState(status);

    const onToggleSwitch = () => setIsOn(!isOn);

    return (
        <View style={{ flex: 1, flexDirection: "row", marginBottom: 0 }}>
            <Button icon={icon} textColor="#000000" style={{ marginTop: 5 }}>
                {text}
            </Button>
            <View style={{ flexGrow: 1 }} />
            <Switch
                value={isOn}
                onValueChange={onToggleSwitch}
                color="rgb(128, 116, 124)"
            />
            <View
                style={{
                    backgroundColor: isOn ? "#d7e8cd" : "#ff7970",
                    borderColor: isOn ? "#d7e8cd" : "#ff7970",
                    borderRadius: 15,
                    borderWidth: 7,
                    margin: 12,

                    justifyContent: "flex-end",
                }}
            >
                <Text>STATUS: {isOn ? "ON" : "OFF"}</Text>
            </View>
        </View>
    );
};

export default THStatus;
