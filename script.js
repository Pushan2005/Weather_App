const API_Key = "b4a7299fffb4400481e105120230112";
let days = 7;
let respData;

let requestUrl = `http://api.weatherapi.com/v1/forecast.json?key=${API_Key}&q=London&days=${days}&api=no&alerts=no`;

async function getWeather() {
    const response = await fetch(requestUrl);
    const data = await response.json();
    respData = data;
    return data;
}

let p = document.getElementById("test");
p.innerHTML = respData;
console.log(getWeather());
