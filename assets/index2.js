/* User Story
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly
Acceptance Criteria
GIVEN a weather dashboard with form inputs
WHEN I search for a city
- create a search bar for city inputs
THEN I am presented with current and future conditions for that city and that city is added to the search history
- fetch current and future conditions for city. append them to the city
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
- include city name, date, and weather icon associated with the weather
WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
- ensure UV index has a color feature for three tiers: favorable, moderate, or severe
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
- include 5-day forecast for the future weather conditions; needs to include dates, weather icon, temperature and humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
- when user clicks on the past searched cities, the current and future conditions for that city appear
WHEN I open the weather dashboard
THEN I am presented with the last searched city forecast 
- past searches are saved to the local storage and displayed, even when the page is refreshed */
var button = document.querySelector('.searchBtn');
var inputValue = document.querySelector('.inputValue');
console.log(inputValue);
var cityName = document.querySelector('.cityName')
var desc = document.querySelector('.desc')
var temp = document.querySelector('.temp')

button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue+'&appid=e6ba2c290e501b458abfcf542542980c')
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
});








// $("#city").append('<form method="POST">');
// $(document).ready(function() {

// });
// var div = document.getElementById('search');
// var form = document.createElement('form');
// form.setAttribute('action', 'sharer.php');
// form.setAttribute('method', 'POST');
// /*-----------*/
// var appm = document.createElement('div');
// appm.appendChild(document.createTextNode('Save This'));
// appm.setAttribute('class', 'appm');
// /*-----------*/

// var input1 = document.createElement('input');
// input1.setAttribute('type', 'text');
// input1.setAttribute('placeholder', 'Name');
// input1.setAttribute('name', 'routename');
// input1.setAttribute('id', 'rname');

// var input2 = document.createElement('input');
// input2.setAttribute('type', 'text');
// input2.setAttribute('placeholder', 'description');
// input2.setAttribute('name', 'routedescription');
// input2.setAttribute('id', 'rdescription');
// input2.setAttribute('class', 'address');

// var tags = document.createElement('input');
// tags.setAttribute('type', 'text');
// tags.setAttribute('placeholder', 'tags');
// tags.setAttribute('name', 'routetags');
// tags.setAttribute('id', 'tags');

// var submit = document.createElement('input');
// submit.setAttribute('type', 'submit');
// submit.setAttribute("value", "Save");
// submit.setAttribute('id', 'savebutton');

// form.appendChild(input1);
// form.appendChild(input2);
// form.appendChild(tags);
// form.appendChild(submit);

// div.appendChild(form);



