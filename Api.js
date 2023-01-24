export function gfdsfsdsfd() {
    res = ""
    fetch("http://10.0.2.2:8000/get_hum/2")
        .then((response) => response.json())
        .then((commits) => res = commits.temp_hums[0].humidity
        );
    return res;
}
 