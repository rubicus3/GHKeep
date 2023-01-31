const dblink = "http://172.29.173.19:8000";

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

// get_temp_hum_for_graphics().then((json) => {
//     console.log(json);
// });
