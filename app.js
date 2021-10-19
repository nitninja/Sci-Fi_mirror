const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temperature-value p");
const descElement = document.querySelector(".temperature-description p");
const locationElement = document.querySelector(".location p");
const notificationElement = document.querySelector(".notification");

const weather = {};
const KELVIN = 273;
const key = "1b152361152c051cc620c8175f00ef1e";
const latitu ="30.3983";
const longi="78.0751";
weather.temperature = {
    unit : "celsius"
}



// if('geolocation' in navigator){
//     navigator.geolocation.getCurrentPosition(setPosition, showError);
// }else{
//     notificationElement.style.display = "block";
//     notificationElement.innerHTML = "<p>Browser doesn't Support Geolocation</p>";
// }

// function setPosition(position){
//     let latitude = latitu;
//     let longitude = longi;
//
// }

  getWeather(latitu, longi);
//ERROR
function showError(error){
    notificationElement.style.display = "block";
    notificationElement.innerHTML = `<p> ${error.message} </p>`;
}

//WEATHER API
function getWeather(){
 let api =`https://api.openweathermap.org/data/2.5/weather?lat=${latitu}&lon=${longi}&appid=${key}`;
    fetch(api)
        .then(function(response){
            let data = response.json();
            return data;
        })
        .then(function(data){
            weather.temperature.value = Math.floor(data.main.temp - KELVIN);
            weather.description = data.weather[0].description;
            weather.iconId = data.weather[0].icon;
            weather.city = data.name;
            weather.country = data.sys.country;
        })
        .then(function(){
            displayWeather();
        });
}

function displayWeather(){
    iconElement.innerHTML = `<img src="icons/${weather.iconId}.png"/>`;
    tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;
    descElement.innerHTML = weather.description;
    locationElement.innerHTML = `${weather.city}, ${weather.country}`;
}

function celsiusToFahrenheit(temperature){
    return (temperature * 9/5) + 32;
}

tempElement.addEventListener("click", function(){
    if(weather.temperature.value === undefined) return;

    if(weather.temperature.unit == "celsius"){
        let fahrenheit = celsiusToFahrenheit(weather.temperature.value);
        fahrenheit = Math.floor(fahrenheit);

        tempElement.innerHTML = `${fahrenheit}°<span>F</span>`;
        weather.temperature.unit = "fahrenheit";
    }else{
        tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;
        weather.temperature.unit = "celsius"
    }
});
