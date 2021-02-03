// Global Variables - form and submit button
var button = document.querySelector('.searchBtn');
var inputValue = document.querySelector('.inputValue');
// console.log(inputValue);
var cityName = document.querySelector('.cityName');
// var date = document.querySelector('.cityName');
// var weatherIcon = "";
var temp = document.querySelector('.temp');
var humidity = document.querySelector('.humidity');
var windSpeed = document.querySelector('.windSpeed');
var uvIndex = document.querySelector('.uvIndex');
var date1 = document.querySelector('.date1');
var temp1 = document.querySelector('.temp1');
var humidity1 = document.querySelector('.humidity1');
var date2 = document.querySelector('.date2');
var temp2 = document.querySelector('.temp2');
var humidity2 = document.querySelector('.humidity2');
var date3 = document.querySelector('.date3');
var temp3 = document.querySelector('.temp3');
var humidity3 = document.querySelector('.humidity3');
var date4 = document.querySelector('.date4');
var temp4 = document.querySelector('.temp4');
var humidity4 = document.querySelector('.humidity4');
var date5 = document.querySelector('.date5');
var temp5 = document.querySelector('.temp5');
var humidity5 = document.querySelector('.humidity5');

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
      var date = new Date(data.dt*1000).toLocaleDateString('en-US');
      console.log(date);
      var weatherIcon = document.getElementById('.weatherIcon').src = "http://openweathermap.org/img/wn/" + data.weather[0].icon +"@2x.png";
      weatherIcon.src = "http://openweathermap.org/img/wn/" + data.weather[0].icon +"@2x.png";
      console.log(document.getElementById('.weatherIcon').src);
      cityName.textContent = data.name + " (" + date + ")" + " " + weatherIcon;
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
  fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&exclude=alerts,minutely,hourly,&appid=e6ba2c290e501b458abfcf542542980c&units=imperial')
  .then(function (response){
    console.log(response);
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    var newDate1 = new Date(data.daily[1].dt*1000).toLocaleDateString('en-US');
    console.log(newDate1);
    date1.textContent = newDate1;
    temp1.textContent = "Temp: " + data.daily[1].temp.day + "°F";
    humidity1.textContent = "Humidity: " + data.daily[1].humidity + "%";
    var newDate2 = new Date(data.daily[2].dt*1000).toLocaleDateString('en-US');
    date2.textContent = newDate2;
    temp2.textContent = "Temp: " + data.daily[2].temp.day + "°F";
    humidity2.textContent = "Humidity: " + data.daily[2].humidity + "%";
    var newDate3 = new Date(data.daily[3].dt*1000).toLocaleDateString('en-US');
    date3.textContent = newDate3;
    temp3.textContent = "Temp: " + data.daily[3].temp.day + "°F";
    humidity3.textContent = "Humidity: " + data.daily[3].humidity + "%";
    var newDate4 = new Date(data.daily[4].dt*1000).toLocaleDateString('en-US');
    date4.textContent = newDate4;
    temp4.textContent = "Temp: " + data.daily[4].temp.day + "°F";
    humidity4.textContent = "Humidity: " + data.daily[4].humidity + "%";
    var newDate5 = new Date(data.daily[5].dt*1000).toLocaleDateString('en-US');
    date5.textContent = newDate5;
    temp5.textContent = "Temp: " + data.daily[5].temp.day + "°F";
    humidity5.textContent = "Humidity: " + data.daily[5].humidity + "%";
  })
};

button.addEventListener('click', firstAPI, forecast);

    // Current Weather
    // Future Five Day forecast
// Dynamically Append to HTML
// Save to Local Storage