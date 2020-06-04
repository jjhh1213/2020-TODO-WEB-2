const weather = document.querySelector(".js-weather");
const maxWeather = document.querySelector(".js-maxWeather");
const minWeather = document.querySelector(".js-minWeather");
const humidity = document.querySelector(".js-humidity");

const COORDS = "coords";
const API_KEY = "9686372d993485376dbdc6170f316b21";

function getWeather(lat, lng) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      console.log(json);
      const temperature = json.main.temp;
      const maxTemp = json.main.temp_max;
      const minTemp = json.main.temp_min;
      const humi = json.main.humidity;
      weather.innerText = `오늘 기온: ${temperature}°C | 습도: ${humi}%`;
      maxWeather.innerText = `최고기온: ${maxTemp}°C | 최저기온: ${minTemp}°C`;
    });
}

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude,
  };
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
}

function handleGeoError() {
  console.log("위치를 읽을수 없습니다.");
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    const parsedCoords = JSON.parse(loadedCoords);
    getWeather(parsedCoords.latitude, parsedCoords.longitude);
  }
}

function init() {
  loadCoords();
}
init();
