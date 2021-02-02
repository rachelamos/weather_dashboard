// Global Variables - form and submit button
var button = document.querySelector('.searchBtn');
var inputValue = document.querySelector('.inputValue');
// console.log(inputValue);
var cityName = document.querySelector('.cityName');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
var humidity = document.querySelector('.humidity');
var windSpeed = document.querySelector('.windSpeed');
var uvIndex = document.querySelector('.uvIndex');

// Fetch information on city from OpenWeather API

function firstAPI (event){
    event.preventDefault();
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value.trim() +'&appid=e6ba2c290e501b458abfcf542542980c&units=imperial')
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      cityName.textContent = data.name;
      temp.textContent = "Temperature: " + data.main.temp + "°F";
      humidity.textContent = "Humidity: " + data.main.humidity + "%";
      windSpeed.textContent = "Wind Speed: " + data.wind.speed;
      var lat = data.coord.lat;
      var lon = data.coord.lon;
      uvFunction(lat, lon);
    })

};

function uvFunction (lat, lon){
  fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&exclude=alerts,minutely,hourly,daily&appid=e6ba2c290e501b458abfcf542542980c')
  .then(function (response){
    console.log(response);
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    uvIndex.textContent = "UV Index: " + data.current.uvi;
    forecast(lat, lon);
  })
};

function forecast (lat, lon){
  fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&exclude=alerts,minutely,hourly,&appid=e6ba2c290e501b458abfcf542542980c')
  .then(function (response){
    console.log(response);
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    
    // uvIndex.textContent = "UV Index: " + data.current.uvi;
  })
};

button.addEventListener('click', firstAPI, forecast);

    // Current Weather
    // Future Five Day forecast
// Dynamically Append to HTML
// Save to Local Storage