const dblink = "http://45.90.216.58:1000";

// Get requests

export async function getTempHumGrpah() {
    const response = await fetch(dblink + "/get_temp_hum_for_graphics");
    const json = await response.json();

    return json;
}

export async function getHbGrpah() {
    const response = await fetch(dblink + "/get_hum_for_graphics");
    const json = await response.json();

    return json;
}

export async function getThTable() {
    const response = await fetch(dblink + "/get_hum_temp_for_table");
    const json = await response.json();
    return json;
}

export async function getHbTable() {
    const response = await fetch(dblink + "/get_hum_for_table");
    const json = await response.json();
    return json;
}

export async function getAvgTempGraph() {
    const response = await fetch(dblink + "/get_average_temperature");
    const json = await response.json();
    return json;
}

export async function getAvgHumGraph() {
    const response = await fetch(dblink + "/get_average_humidity");
    const json = await response.json();
    return json;
}

export async function getForkState() {
    const response = await fetch(dblink + "/get_fork");
    const json = await response.json();
    return json;
}

export async function getHydrationState() {
    const response = await fetch(dblink + "/get_total_hum");
    const json = await response.json();
    return json;
}

export async function getWateringState(id) {
    const response = await fetch(dblink + `/get_watering/${id}`);
    const json = await response.json();
    return json;
}

export async function getLimitValues() {
    const response = await fetch(dblink + "/get_warnings");
    const json = await response.json();
    return json;
}

// Put requests

export async function changeForkState(id, isExtra) {
    const response = await fetch(
        dblink + `/change_fork/${isExtra ? "true" : "false"}`,
        { method: "PUT" }
    );

    const json = await response.json();
    const status = await response.status;

    if (status === 200) return "OK";

    return json;
}

export async function changeHydrationState(id, isExtra) {
    const response = await fetch(
        dblink + `/change_total_hum/${isExtra ? "true" : "false"}`,
        {
            method: "PUT",
        }
    );

    const json = await response.json();
    const status = await response.status;

    if (status === 200) return "OK";

    return json;
}

export async function changeWateringState(id, isExtra) {
    const response = await fetch(
        dblink + `/change_watering/${id}/${isExtra ? "true" : "false"}`,
        {
            method: "PUT",
        }
    );
    const json = await response.json();
    const status = await response.status;

    if (status === 200) return "OK";

    return json;
}

export async function changeTemperatureLimit(id, newValue) {
    const response = await fetch(dblink + `/change_warnings_temp/${newValue}`, {
        method: "PUT",
    });

    const status = await response.status;

    if (status == 422)
        return "Unexpected value. Value must be float or integer";

    return response.json();
}

export async function changeHumidityLimit(id, newValue) {
    const response = await fetch(dblink + `/change_warnings_h/${newValue}`, {
        method: "PUT",
    });

    const status = await response.status;

    if (status == 422)
        return "Unexpected value. Value must be float or integer";

    return response.json();
}

export async function changeHbLimit(id, newValue) {
    const response = await fetch(
        dblink + `/change_warnings_hb/${id}/${newValue}`,
        {
            method: "PUT",
        }
    );

    const status = await response.status;

    if (status == 422)
        return "Unexpected value. Value must be float or integer";

    return response.json();
}
