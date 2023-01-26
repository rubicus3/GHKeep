const dblink = "http://10.0.2.2:8000";

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

// get_temp_hum_for_graphics().then((json) => {
//     console.log(json);
// });
