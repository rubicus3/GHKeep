import { getIp } from "./Context";

// var dblink = "http://192.168.43.247:8000";
const token = "123";

const headers = {
    token: token,
};

// Get requests
export async function getTempHumGrpah() {
    const dblink = await getIp();

    const response = await fetch(
        dblink + "/get_humidity_air_temperature_for_graphics"
    );
    const json = await response.json();

    return json;
}

export async function getHbGrpah() {
    const dblink = await getIp();

    const response = await fetch(dblink + "/get_humidity_soil_for_graphics");
    const json = await response.json();

    return json;
}

export async function getThTable() {
    const dblink = await getIp();

    const response = await fetch(
        dblink + "/get_humidity_air_temperature_for_table"
    );
    const json = await response.json();
    return json;
}

export async function getHbTable() {
    const dblink = await getIp();

    const response = await fetch(dblink + "/get_humidity_soil_for_table");
    const json = await response.json();
    return json;
}

export async function getAvgTempGraph() {
    const dblink = await getIp();

    const response = await fetch(dblink + "/get_average_temperature");
    const json = await response.json();
    return json;
}

export async function getAvgHumGraph() {
    const dblink = await getIp();

    const response = await fetch(dblink + "/get_average_humidity");
    const json = await response.json();
    return json;
}

export async function getForkState() {
    const dblink = await getIp();

    const response = await fetch(dblink + "/get_fork_state");
    const json = await response.json();
    return json;
}

export async function getHydrationState() {
    const dblink = await getIp();

    const response = await fetch(dblink + "/get_total_hum_state");
    const json = await response.json();
    return json;
}

export async function getWateringState(id) {
    const dblink = await getIp();

    const response = await fetch(dblink + `/get_watering_system_state/${id}`);
    const json = await response.json();
    return json;
}

export async function getLimitValues() {
    const dblink = await getIp();

    const response = await fetch(dblink + "/get_warnings_states");
    const json = await response.json();
    return json;
}

// Put requests

export async function changeForkState(id, isExtra) {
    const dblink = await getIp();

    const response = await fetch(
        dblink + `/change_fork_state/${isExtra ? "true" : "false"}`,
        {
            method: "PUT",
            headers: headers,
        }
    );

    const json = await response.json();
    const status = await response.status;

    if (status === 200) return "OK";

    return json;
}

export async function changeHydrationState(id, isExtra) {
    const dblink = await getIp();

    const response = await fetch(
        dblink + `/change_total_hum_state/${isExtra ? "true" : "false"}`,
        {
            method: "PUT",
            headers: headers,
        }
    );

    const json = await response.json();
    const status = await response.status;

    if (status === 200) return "OK";

    return json;
}

export async function changeWateringState(id, isExtra) {
    const dblink = await getIp();

    const response = await fetch(
        dblink +
            `/change_watering_system_state/${id}/${isExtra ? "true" : "false"}`,
        {
            method: "PUT",
            headers: headers,
        }
    );
    const json = await response.json();
    const status = await response.status;

    if (status === 200) return "OK";

    return json;
}

export async function changeTemperatureLimit(id, newValue) {
    const dblink = await getIp();

    const response = await fetch(
        dblink + `/change_temperature_warnings/${newValue}`,
        {
            method: "PUT",
            headers: headers,
        }
    );

    const status = await response.status;

    if (status == 422)
        return "Unexpected value. Value must be float or integer";

    return response.json();
}

export async function changeHumidityLimit(id, newValue) {
    const dblink = await getIp();

    const response = await fetch(
        dblink + `/change_humidity_air_warnings/${newValue}`,
        {
            method: "PUT",
            headers: headers,
        }
    );

    const status = await response.status;

    if (status == 422)
        return "Unexpected value. Value must be float or integer";

    return response.json();
}

export async function changeHbLimit(id, newValue) {
    const dblink = await getIp();

    const response = await fetch(
        dblink + `/change_humidity_soil_warnings/${id}/${newValue}`,
        {
            method: "PUT",
            headers: headers,
        }
    );

    const status = await response.status;

    if (status == 422)
        return "Unexpected value. Value must be float or integer";

    return response.json();
}
