const API_KEY = "d692b7168e894b18adb162613231012";
let dayCount = 7;
let weatherLocation = "";
let requiredData;

let iconMap = [
    {
        code: 1000,
        day: "Sunny",
        night: "Clear",
        icon: 113,
    },
    {
        code: 1003,
        day: "Partly cloudy",
        night: "Partly cloudy",
        icon: 116,
    },
    {
        code: 1006,
        day: "Cloudy",
        night: "Cloudy",
        icon: 119,
    },
    {
        code: 1009,
        day: "Overcast",
        night: "Overcast",
        icon: 122,
    },
    {
        code: 1030,
        day: "Mist",
        night: "Mist",
        icon: 143,
    },
    {
        code: 1063,
        day: "Patchy rain possible",
        night: "Patchy rain possible",
        icon: 176,
    },
    {
        code: 1066,
        day: "Patchy snow possible",
        night: "Patchy snow possible",
        icon: 179,
    },
    {
        code: 1069,
        day: "Patchy sleet possible",
        night: "Patchy sleet possible",
        icon: 182,
    },
    {
        code: 1072,
        day: "Patchy freezing drizzle possible",
        night: "Patchy freezing drizzle possible",
        icon: 185,
    },
    {
        code: 1087,
        day: "Thundery outbreaks possible",
        night: "Thundery outbreaks possible",
        icon: 200,
    },
    {
        code: 1114,
        day: "Blowing snow",
        night: "Blowing snow",
        icon: 227,
    },
    {
        code: 1117,
        day: "Blizzard",
        night: "Blizzard",
        icon: 230,
    },
    {
        code: 1135,
        day: "Fog",
        night: "Fog",
        icon: 248,
    },
    {
        code: 1147,
        day: "Freezing fog",
        night: "Freezing fog",
        icon: 260,
    },
    {
        code: 1150,
        day: "Patchy light drizzle",
        night: "Patchy light drizzle",
        icon: 263,
    },
    {
        code: 1153,
        day: "Light drizzle",
        night: "Light drizzle",
        icon: 266,
    },
    {
        code: 1168,
        day: "Freezing drizzle",
        night: "Freezing drizzle",
        icon: 281,
    },
    {
        code: 1171,
        day: "Heavy freezing drizzle",
        night: "Heavy freezing drizzle",
        icon: 284,
    },
    {
        code: 1180,
        day: "Patchy light rain",
        night: "Patchy light rain",
        icon: 293,
    },
    {
        code: 1183,
        day: "Light rain",
        night: "Light rain",
        icon: 296,
    },
    {
        code: 1186,
        day: "Moderate rain at times",
        night: "Moderate rain at times",
        icon: 299,
    },
    {
        code: 1189,
        day: "Moderate rain",
        night: "Moderate rain",
        icon: 302,
    },
    {
        code: 1192,
        day: "Heavy rain at times",
        night: "Heavy rain at times",
        icon: 305,
    },
    {
        code: 1195,
        day: "Heavy rain",
        night: "Heavy rain",
        icon: 308,
    },
    {
        code: 1198,
        day: "Light freezing rain",
        night: "Light freezing rain",
        icon: 311,
    },
    {
        code: 1201,
        day: "Moderate or heavy freezing rain",
        night: "Moderate or heavy freezing rain",
        icon: 314,
    },
    {
        code: 1204,
        day: "Light sleet",
        night: "Light sleet",
        icon: 317,
    },
    {
        code: 1207,
        day: "Moderate or heavy sleet",
        night: "Moderate or heavy sleet",
        icon: 320,
    },
    {
        code: 1210,
        day: "Patchy light snow",
        night: "Patchy light snow",
        icon: 323,
    },
    {
        code: 1213,
        day: "Light snow",
        night: "Light snow",
        icon: 326,
    },
    {
        code: 1216,
        day: "Patchy moderate snow",
        night: "Patchy moderate snow",
        icon: 329,
    },
    {
        code: 1219,
        day: "Moderate snow",
        night: "Moderate snow",
        icon: 332,
    },
    {
        code: 1222,
        day: "Patchy heavy snow",
        night: "Patchy heavy snow",
        icon: 335,
    },
    {
        code: 1225,
        day: "Heavy snow",
        night: "Heavy snow",
        icon: 338,
    },
    {
        code: 1237,
        day: "Ice pellets",
        night: "Ice pellets",
        icon: 350,
    },
    {
        code: 1240,
        day: "Light rain shower",
        night: "Light rain shower",
        icon: 353,
    },
    {
        code: 1243,
        day: "Moderate or heavy rain shower",
        night: "Moderate or heavy rain shower",
        icon: 356,
    },
    {
        code: 1246,
        day: "Torrential rain shower",
        night: "Torrential rain shower",
        icon: 359,
    },
    {
        code: 1249,
        day: "Light sleet showers",
        night: "Light sleet showers",
        icon: 362,
    },
    {
        code: 1252,
        day: "Moderate or heavy sleet showers",
        night: "Moderate or heavy sleet showers",
        icon: 365,
    },
    {
        code: 1255,
        day: "Light snow showers",
        night: "Light snow showers",
        icon: 368,
    },
    {
        code: 1258,
        day: "Moderate or heavy snow showers",
        night: "Moderate or heavy snow showers",
        icon: 371,
    },
    {
        code: 1261,
        day: "Light showers of ice pellets",
        night: "Light showers of ice pellets",
        icon: 374,
    },
    {
        code: 1264,
        day: "Moderate or heavy showers of ice pellets",
        night: "Moderate or heavy showers of ice pellets",
        icon: 377,
    },
    {
        code: 1273,
        day: "Patchy light rain with thunder",
        night: "Patchy light rain with thunder",
        icon: 386,
    },
    {
        code: 1276,
        day: "Moderate or heavy rain with thunder",
        night: "Moderate or heavy rain with thunder",
        icon: 389,
    },
    {
        code: 1279,
        day: "Patchy light snow with thunder",
        night: "Patchy light snow with thunder",
        icon: 392,
    },
    {
        code: 1282,
        day: "Moderate or heavy snow with thunder",
        night: "Moderate or heavy snow with thunder",
        icon: 395,
    },
];

//states
let tempUnit = 1; // 1 for celsius, 2 for fahrenheit
let selectedDay = 0; // day index (0-6)

//elements
//main card

const mainCardElements = {
    mainImageElement: document.getElementById("mainimg"),
    mainTempElement: document.getElementById("maintemp"),
    mainDayDateElement: document.getElementById("maindaydate"),
    weatherDescriptionElement: document.getElementById("weatherdesc"),
    rainProbabilityElement: document.getElementById("rainprob"),
};
const changeLocationElement = document.getElementById("btn");

//sub card
//day select
const daysElements = [
    {
        day: document.getElementById("day0name"),
        icon: document.getElementById("day0icon"),
    },
    {
        day: document.getElementById("day1name"),
        icon: document.getElementById("day1icon"),
    },
    {
        day: document.getElementById("day2name"),
        icon: document.getElementById("day2icon"),
    },
    {
        day: document.getElementById("day3name"),
        icon: document.getElementById("day3icon"),
    },
    {
        day: document.getElementById("day4name"),
        icon: document.getElementById("day4icon"),
    },
    {
        day: document.getElementById("day5name"),
        icon: document.getElementById("day5icon"),
    },
    {
        day: document.getElementById("day6name"),
        icon: document.getElementById("day6icon"),
    },
    {
        day: document.getElementById("day7name"),
        icon: document.getElementById("day7icon"),
    },
];

// highlights
const highlightsElements = {
    uv: document.getElementById("uvidx"),
    wind: document.getElementById("windspeed"),
    sunsetSunrise: {
        sunrise: document.getElementById("sunrisetime"),
        sunset: document.getElementById("sunsettime"),
    },
    humidity: document.getElementById("humidity"),
    visibility: document.getElementById("vis"),
    precipitation: document.getElementById("precip"),
};

//functions

function changeMainCardImage() {
    let icon_Code_main = requiredData[selectedDay].iconCode;
    let icon_main;
    for (let obj of iconMap) {
        if (obj.code == icon_Code_main) {
            icon_main = obj.icon;
        }
    }
    mainCardElements.mainImageElement.src = `/icons/day/${icon_main}.svg`;
}
function changeMainCardTemp() {
    if (tempUnit == 1) {
        mainCardElements.mainTempElement.innerHTML = `${requiredData[selectedDay].avgTemp_c}°C`;
    } else {
        mainCardElements.mainTempElement.innerHTML = `${requiredData[selectedDay].avgTemp_f}°F`;
    }
}
function changeMainCardDate() {
    let mainDate = new Date();
    mainDate = requiredData[selectedDay].date;
    mainDateObj = new Date(mainDate);
    let mainDay = mainDateObj.getDay();
    let mainDayName = getDayOfWeek(mainDay);
    mainCardElements.mainDayDateElement.innerHTML = `${mainDayName} | ${mainDate}`;
}
function changeMainCardSubInfo() {
    mainCardElements.weatherDescriptionElement.innerHTML =
        requiredData[selectedDay].weatherDesc;
    mainCardElements.rainProbabilityElement.innerHTML = `Chance of rain - ${requiredData[selectedDay].rainProb}%`;
}

function changeMainCard() {
    changeMainCardImage();
    changeMainCardTemp();
    changeMainCardDate();
    changeMainCardSubInfo();
}

function changeHighlights() {
    highlightsElements.uv.innerHTML = requiredData[selectedDay].uv;
    highlightsElements.humidity.innerHTML = `${requiredData[selectedDay].humidity}%`;
    highlightsElements.sunsetSunrise.sunrise.innerHTML = `${requiredData[selectedDay].sunrise}`;
    highlightsElements.sunsetSunrise.sunset.innerHTML = `${requiredData[selectedDay].sunset}`;
    highlightsElements.visibility.innerHTML = `${requiredData[selectedDay].visibility}km`;
    highlightsElements.wind.innerHTML = `${requiredData[selectedDay].wind}km/h`;
    highlightsElements.precipitation.innerHTML = `${requiredData[selectedDay].precip}mm`;
}

function changeIcons() {
    //also changes the names
    for (let i = 0; i <= 6; i++) {
        let mainDate = new Date();
        mainDate = requiredData[i].date;
        mainDateObj = new Date(mainDate);
        let mainDay = mainDateObj.getDay();
        let mainDayName = getDayOfWeek(mainDay);
        daysElements[i].day.innerHTML = mainDayName;
    }
    for (let i = 0; i <= 6; i++) {
        let icon_Code = requiredData[i].iconCode;
        let icon;
        for (let obj of iconMap) {
            if (obj.code == icon_Code) {
                icon = obj.icon;
            }
        }
        daysElements[i].icon.src = `/icons/day/${icon}.svg`;
    }
}

async function callWeatherAPI() {
    let requestUrl = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${weatherLocation}&days=${dayCount}&api=no&alerts=no`;
    const response = await fetch(requestUrl);
    const data = await response.json();
    const fullResponse = await data.forecast.forecastday;
    requiredData = [
        {
            date: fullResponse[0].date,
            weatherDesc: fullResponse[0].day.condition.text,
            rainProb: fullResponse[0].day.daily_chance_of_rain,
            iconCode: fullResponse[0].day.condition.code,
            avgTemp_c: fullResponse[0].day.avgtemp_c,
            avgTemp_f: fullResponse[0].day.avgtemp_f,
            uv: fullResponse[0].day.uv,
            wind: fullResponse[0].day.maxwind_kph,
            sunrise: fullResponse[0].astro.sunrise,
            sunset: fullResponse[0].astro.sunset,
            humidity: fullResponse[0].day.avghumidity,
            visibility: fullResponse[0].day.avgvis_km,
            precip: fullResponse[0].day.totalprecip_mm,
        },
        {
            date: fullResponse[1].date,
            weatherDesc: fullResponse[1].day.condition.text,
            rainProb: fullResponse[1].day.daily_chance_of_rain,
            iconCode: fullResponse[1].day.condition.code,
            avgTemp_c: fullResponse[1].day.avgtemp_c,
            avgTemp_f: fullResponse[1].day.avgtemp_f,
            uv: fullResponse[1].day.uv,
            wind: fullResponse[1].day.maxwind_kph,
            sunrise: fullResponse[1].astro.sunrise,
            sunset: fullResponse[1].astro.sunset,
            humidity: fullResponse[1].day.avghumidity,
            visibility: fullResponse[1].day.avgvis_km,
            precip: fullResponse[1].day.totalprecip_mm,
        },
        {
            date: fullResponse[2].date,
            weatherDesc: fullResponse[2].day.condition.text,
            rainProb: fullResponse[2].day.daily_chance_of_rain,
            iconCode: fullResponse[2].day.condition.code,
            avgTemp_c: fullResponse[2].day.avgtemp_c,
            avgTemp_f: fullResponse[2].day.avgtemp_f,
            uv: fullResponse[2].day.uv,
            wind: fullResponse[2].day.maxwind_kph,
            sunrise: fullResponse[2].astro.sunrise,
            sunset: fullResponse[2].astro.sunset,
            humidity: fullResponse[2].day.avghumidity,
            visibility: fullResponse[2].day.avgvis_km,
            precip: fullResponse[2].day.totalprecip_mm,
        },
        {
            date: fullResponse[3].date,
            weatherDesc: fullResponse[3].day.condition.text,
            rainProb: fullResponse[3].day.daily_chance_of_rain,
            iconCode: fullResponse[3].day.condition.code,
            avgTemp_c: fullResponse[3].day.avgtemp_c,
            avgTemp_f: fullResponse[3].day.avgtemp_f,
            uv: fullResponse[3].day.uv,
            wind: fullResponse[3].day.maxwind_kph,
            sunrise: fullResponse[3].astro.sunrise,
            sunset: fullResponse[3].astro.sunset,
            humidity: fullResponse[3].day.avghumidity,
            visibility: fullResponse[3].day.avgvis_km,
            precip: fullResponse[3].day.totalprecip_mm,
        },
        {
            date: fullResponse[4].date,
            weatherDesc: fullResponse[4].day.condition.text,
            rainProb: fullResponse[4].day.daily_chance_of_rain,
            iconCode: fullResponse[4].day.condition.code,
            avgTemp_c: fullResponse[4].day.avgtemp_c,
            avgTemp_f: fullResponse[4].day.avgtemp_f,
            uv: fullResponse[4].day.uv,
            wind: fullResponse[4].day.maxwind_kph,
            sunrise: fullResponse[4].astro.sunrise,
            sunset: fullResponse[4].astro.sunset,
            humidity: fullResponse[4].day.avghumidity,
            visibility: fullResponse[4].day.avgvis_km,
            precip: fullResponse[4].day.totalprecip_mm,
        },
        {
            date: fullResponse[5].date,
            weatherDesc: fullResponse[5].day.condition.text,
            rainProb: fullResponse[5].day.daily_chance_of_rain,
            avgTemp_c: fullResponse[5].day.avgtemp_c,
            avgTemp_f: fullResponse[5].day.avgtemp_f,
            iconCode: fullResponse[5].day.condition.code,
            uv: fullResponse[5].day.uv,
            wind: fullResponse[5].day.maxwind_kph,
            sunrise: fullResponse[5].astro.sunrise,
            sunset: fullResponse[5].astro.sunset,
            humidity: fullResponse[5].day.avghumidity,
            visibility: fullResponse[5].day.avgvis_km,
            precip: fullResponse[5].day.totalprecip_mm,
        },
        {
            date: fullResponse[6].date,
            weatherDesc: fullResponse[6].day.condition.text,
            rainProb: fullResponse[6].day.daily_chance_of_rain,
            iconCode: fullResponse[6].day.condition.code,
            avgTemp_c: fullResponse[6].day.avgtemp_c,
            avgTemp_f: fullResponse[6].day.avgtemp_f,
            uv: fullResponse[6].day.uv,
            wind: fullResponse[6].day.maxwind_kph,
            sunrise: fullResponse[6].astro.sunrise,
            sunset: fullResponse[6].astro.sunset,
            humidity: fullResponse[6].day.avghumidity,
            visibility: fullResponse[6].day.avgvis_km,
            precip: fullResponse[6].day.totalprecip_mm,
        },
    ];
    changeIcons();
    changeMainCard();
    changeHighlights();
    callLog();
    console.log("Changes complete");
}
//onbuttonclick event
changeLocationElement.addEventListener("click", () => {
    const value = document.getElementById("locchangeinput").value;
    weatherLocation = value;
    console.log(weatherLocation);
    callWeatherAPI();
});

function setDay(x) {
    selectedDay = x;
    changeMainCard();
    changeHighlights();
}

function setTempratureUnit(x) {
    tempUnit = x;
    changeMainCard();
}

function callLog() {
    console.log(requiredData);
}

function getDayOfWeek(x) {
    switch (x) {
        case 0:
            return "Sun";
        case 1:
            return "Mon";
        case 2:
            return "Tue";
        case 3:
            return "Wed";
        case 4:
            return "Thu";
        case 5:
            return "Fri";
        case 6:
            return "Sat";
        default:
            return "";
    }
}
