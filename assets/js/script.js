var searchFormEl = document.querySelector('#search-form');
var resultTextEl = document.querySelector('#result-text');
var resultContentEl = document.querySelector('#result-content');
var APIKey = 'e0e4e065129c66722af1075860939b8a'


var city = document.querySelector('#search-input');

// fetch(queryURL);


var searchBtn = document.querySelector('.btn');
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
// idea from https://tutorial.tips/how-to-use-fetch-api-in-javascript-to-get-data/
var getData = function (event) {
    event.preventDefault();
    fetch(queryURL)
    .then(res => res.json())
    .then(data => console.log(data))
}

searchBtn.addEventListener('click', getData);