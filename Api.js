const dblink = "http://192.168.43.247:8000";

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
    const response = await fetch(dblink + "/get_hum_temp_for_table/{id}");
    const json = await response.json();
    return json;
}

export async function getHbTable() {
    const response = await fetch(dblink + "/get_hum_for_table")
    const json = await response.json();
    return json;
}


// get_temp_hum_for_graphics().then((json) => {
//     console.log(json);
// });
