import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { Button, Text, Switch } from "react-native-paper";
import { getWateringState, changeWateringState } from "../Api";

const HbStatus = ({wateringId}) => {
    const [isOn, setIsOn] = useState(true);

    const onStatusChange = () => {
        setIsOn(!isOn);
        changeWateringState(id=wateringId).then(() => {
            getWateringState(id=wateringId).then((json) => {
                setIsOn(Boolean(json));
            });
        });
    };

    const onStart = useEffect(() => {
        getWateringState(id=wateringId).then((json) => {
            setIsOn(Boolean(json));
        });
    }, []);

    return (
        <View style={{ flex: 1, flexDirection: "row", marginBottom: 0 }}>
            <Button
                icon="watering-can-outline"
                textColor="#000000"
                style={{ marginTop: 5 }}
            >
                Бороздка {wateringId}
            </Button>
            <View style={{ flexGrow: 1 }} />
            <Switch
                value={isOn}
                onValueChange={onStatusChange}
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

export default HbStatus;
