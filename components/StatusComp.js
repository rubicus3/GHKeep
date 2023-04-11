import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { Button, Text, Switch } from "react-native-paper";

const StatusComp = ({ text, icon, statusId, getFunc, changeFunc, isExtra, snack }) => {
    const [isOn, setIsOn] = useState(false);

    const onStatusChange = () => {
        setIsOn(!isOn);
        changeFunc(statusId, isExtra).then((response) => {

            getFunc((id = statusId)).then((json) => {
                setIsOn(Boolean(json));
            });

            if (response != "OK") {
                snack(String(response))
            }
  
        });
    };

    const onStart = useEffect(() => {
        getFunc((id = statusId)).then((json) => {
            setIsOn(Boolean(json));
        });
    }, []);

    return (
        <View style={{ flexDirection: "row", marginBottom: 0, height: 60 }}>
            <Button icon={icon} textColor="#000000" style={{ marginTop: 5 }}>
                {text} {statusId} {isExtra}
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

export default StatusComp;
