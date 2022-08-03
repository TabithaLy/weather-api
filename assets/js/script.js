var searchFormEl = document.querySelector('#search-form');
var resultTextEl = document.querySelector('#result-text');
var resultContentEl = document.querySelector('#result-content');
var APIKey = 'e0e4e065129c66722af1075860939b8a'


var city = document.getElementById('searchInput');

// fetch(queryURL);


var searchBtn = document.getElementById('searchBtn');
// idea from https://tutorial.tips/how-to-use-fetch-api-in-javascript-to-get-data/
// console.log(queryURL);
console.log(city);
var getData = function (event) {
    event.preventDefault();
    console.log(city.value);
    city = city.value;
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
    fetch(queryURL)
    .then(res => res.json())
    .then(data => console.log(data))
}

searchBtn.addEventListener('click', getData);