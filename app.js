$(document).ready(function () {
    $("#weatherBtn").click(function() {
        const city = $("#weatherInput").val();
        getWeatherData(city);
    });
});

async function getWeatherData(city) {

    const apiKey = "85413a2e953da4f357c8047545a7b90f"
    const unit = "metric"    
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=" + apiKey + "&units=" + unit + ""

    const responde = await fetch(apiUrl);
    const data = await responde.json();

        

    $("#City").text(data.name);

    const temp = Math.round(data.main.temp)
    $("#weatherTemp").text(temp + " °C");
    $("#weatherDescription").text(data.weather[0].main);

    const temp_max = Math.round(data.main.temp_max)
    $("#temp_max").text(temp_max + " °C");

    const temp_min = Math.round(data.main.temp_min)
    $("#temp_min").text(temp_min + " °C");
    

    weatherIcon = data.weather[0].icon;
    iconUrl ="icon_svg/" + weatherIcon + ".svg";
    $("#WeatherIcon").attr("src", iconUrl);
    console.log(iconUrl);

    console.log(apiUrl);
}

