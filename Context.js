import React, {createContext} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const ExtraContext = createContext({
    extra: false,
    setExtra: () => {}
});


export const getIp = async () => {
    try {
        let k = ''
        await AsyncStorage.getItem("ip").then((t) => {k = t})

        return k
    } catch (e) {
        console.log(e);
    }
};

export const storeIp = async (value) => {
    try {
        await AsyncStorage.setItem("ip", value);
    } catch (e) {
        console.log(e);
    }
};
