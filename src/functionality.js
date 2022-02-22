//General DateTime arrays//
let now = new Date();
let weekdaynumber = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let weekday = weekdaynumber[now.getDay()];

let monthnumber = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = monthnumber[now.getMonth()];

//Today's date and time//
document.getElementById("weekday").innerHTML = weekday;
document.getElementById("day").innerHTML = now.getDate();
document.getElementById("month").innerHTML = month;
document.getElementById("year").innerHTML = now.getFullYear();
document.getElementById("hours").innerHTML =
  (now.getHours() < 10 ? "0" : "") + now.getHours();
document.getElementById("minutes").innerHTML =
  (now.getMinutes() < 10 ? "0" : "") + now.getMinutes();


//Search Engine//
function retrieveTemperature(response) {
  console.log(response.data);
  let temperature = Math.round(response.data.main.temp);
  let tempToday = `${temperature}`;
  let tempTodayDisplay = document.querySelector("#temp-today");
  tempTodayDisplay.innerHTML = `${tempToday}C`;

  let humidity = Math.round(response.data.main.humidity);
  let humidityToday = `${humidity}`;
  let humidityTodayDisplay = document.querySelector("#humidity-today");
  humidityTodayDisplay.innerHTML = `${humidityToday}%`;

  let windspeed = Math.round(response.data.wind.speed);
  let windspeedToday = `${windspeed}`;
  let windspeedTodayDisplay = document.querySelector("#windspeed-today");
  windspeedTodayDisplay.innerHTML = `${windspeedToday}mps`;

  let weatherDesc = response.data.weather[0].description;
  let weatherDescToday = `${weatherDesc}`;
  let weatherDescTodayDisplay = document.querySelector(
    "#weather-description-today"
  );
  weatherDescTodayDisplay.innerHTML = `${weatherDescToday}`;
}

function showCity(event) {
  event.preventDefault();
  let title = document.querySelector("#title");
  let cityInput = document.querySelector("#city");
  title.innerHTML = `5-Day Forecast: ${cityInput.value}`;

  findCity(cityInput.value);
}

function findCity(city) {
  let apiKey = `72a4d6e3c49499c57e42e446cad198b6`;
  let chosenUnits = `metric`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${chosenUnits}&appid=${apiKey}`;

  axios.get(apiUrl).then(retrieveTemperature);
}

let searchEngine = document.querySelector("#search-engine-form");
searchEngine.addEventListener("submit", showCity);