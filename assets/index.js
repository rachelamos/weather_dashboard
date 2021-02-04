// Global Variables - form and submit button
var button = document.querySelector('.searchBtn');
var inputValue = document.querySelector('.inputValue');
// console.log(inputValue);
var cityName = document.querySelector('.cityName');
var weatherIcon = document.querySelector('.weatherIcon');
var temp = document.querySelector('.temp');
var humidity = document.querySelector('.humidity');
var windSpeed = document.querySelector('.windSpeed');
var uvIndex = document.querySelector('.uvIndex');
var date1 = document.querySelector('.date1');
var icon1 = document.querySelector('.icon1');
var temp1 = document.querySelector('.temp1');
var humidity1 = document.querySelector('.humidity1');
var date2 = document.querySelector('.date2');
var icon2 = document.querySelector('.icon2');
var temp2 = document.querySelector('.temp2');
var humidity2 = document.querySelector('.humidity2');
var date3 = document.querySelector('.date3');
var icon3 = document.querySelector('.icon3');
var temp3 = document.querySelector('.temp3');
var humidity3 = document.querySelector('.humidity3');
var date4 = document.querySelector('.date4');
var icon4 = document.querySelector('.icon4');
var temp4 = document.querySelector('.temp4');
var humidity4 = document.querySelector('.humidity4');
var date5 = document.querySelector('.date5');
var icon5 = document.querySelector('.icon5');
var temp5 = document.querySelector('.temp5');
var humidity5 = document.querySelector('.humidity5');
var citySearch = "";
var prevSearch = "";

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
      localStorage.setItem
      weatherIcon.src = "http://openweathermap.org/img/wn/" + data.weather[0].icon +"@2x.png";
      cityName.textContent = data.name + " (" + date + ")";
      console.log(data.name);
      temp.textContent = "Temperature: " + data.main.temp + "°F";
      humidity.textContent = "Humidity: " + data.main.humidity + "%";
      windSpeed.textContent = "Wind Speed: " + data.wind.speed;
      var lat = data.coord.lat;
      var lon = data.coord.lon;
      uvFunction(lat, lon);
      localStorage.setItem("currentWeather", JSON.stringify(inputValue.value));
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
    console.log(typeof data.current.uvi);
    if (data.current.uvi < 3) {
      uvIndex.setAttribute('style', 'background-color:green;');
    } else if (data.current.uvi >= 3 && data.current.uvi < 6) {
      uvIndex.setAttribute('style', 'background-color:yellow;');
      } else {
        uvIndex.setAttribute('style', 'background-color:red;');
          }
    forecast(lat, lon);
    document.querySelector('.forecast').hidden = false;
    document.querySelector('.card-deck').hidden = false;
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
    icon1.src = "http://openweathermap.org/img/wn/" + data.daily[1].weather[0].icon +"@2x.png";
    temp1.textContent = "Temp: " + data.daily[1].temp.day + "°F";
    humidity1.textContent = "Humidity: " + data.daily[1].humidity + "%";
    var newDate2 = new Date(data.daily[2].dt*1000).toLocaleDateString('en-US');
    date2.textContent = newDate2;
    icon2.src = "http://openweathermap.org/img/wn/" + data.daily[2].weather[0].icon +"@2x.png";
    temp2.textContent = "Temp: " + data.daily[2].temp.day + "°F";
    humidity2.textContent = "Humidity: " + data.daily[2].humidity + "%";
    var newDate3 = new Date(data.daily[3].dt*1000).toLocaleDateString('en-US');
    date3.textContent = newDate3;
    icon3.src = "http://openweathermap.org/img/wn/" + data.daily[3].weather[0].icon +"@2x.png";
    temp3.textContent = "Temp: " + data.daily[3].temp.day + "°F";
    humidity3.textContent = "Humidity: " + data.daily[3].humidity + "%";
    var newDate4 = new Date(data.daily[4].dt*1000).toLocaleDateString('en-US');
    date4.textContent = newDate4;
    icon4.src = "http://openweathermap.org/img/wn/" + data.daily[4].weather[0].icon +"@2x.png";
    temp4.textContent = "Temp: " + data.daily[4].temp.day + "°F";
    humidity4.textContent = "Humidity: " + data.daily[4].humidity + "%";
    var newDate5 = new Date(data.daily[5].dt*1000).toLocaleDateString('en-US');
    date5.textContent = newDate5;
    icon5.src = "http://openweathermap.org/img/wn/" + data.daily[5].weather[0].icon +"@2x.png";
    temp5.textContent = "Temp: " + data.daily[5].temp.day + "°F";
    humidity5.textContent = "Humidity: " + data.daily[5].humidity + "%";
  })
};

button.addEventListener('click', firstAPI, forecast);

function init() {
   var pastSearches = localStorage.getItem("currentWeather");
   if (pastSearches === null) {
     citySearch = "";
   }  else {
     citySearch = pastSearches;
   }
   prevSearch.textContent = pastSearches;
}

init ();

// function addPrevSearch (){
//   for(var i =0; i <prevSearch.length; i++){
//     var prevSearches = document.createElement("button");
//     var space = document.createElement("br");
//     prevSearches.setAttribute("class", "btn");
//     prevSearches.textContent = prevSearch[i];
//     prevSearchCol.append(prevSearches);
//     prevSearchCol.append(space);
//   }
// }

    // Current Weather
    // Future Five Day forecast
// Dynamically Append to HTML
// Save to Local Storage