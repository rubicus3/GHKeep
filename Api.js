const dblink = "http://192.168.43.247:8000";

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

// Put requests

export async function changeForkState() {
    const response = await fetch(dblink + "/change_fork", {method: "PUT"});

    return response.status;
}

export async function changeHydrationState() {
    const response = await fetch(dblink + "/change_total_hum", {method: "PUT"});

    return response.status;
}

export async function changeWateringState(id) {
    const response = await fetch(dblink + `/change_watering/${id}`, {method: "PUT"});

    return response.status;
}
