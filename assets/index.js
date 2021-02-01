// Global Variables - form and submit button
var button = document.querySelector('.searchBtn');
var inputValue = document.querySelector('.inputValue');
console.log(inputValue);
var cityName = document.querySelector('.cityName')
var desc = document.querySelector('.desc')
var temp = document.querySelector('.temp')
// Fetch information on city from OpenWeather API
// function searchCity(event) {
//     event.preventDefault();
// }

button.addEventListener('click', function(event){
    event.preventDefault();
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=e6ba2c290e501b458abfcf542542980c')
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
});
    // Current Weather
    // Future Five Day forecast
// Dynamically Append to HTML
// Save to Local Storage