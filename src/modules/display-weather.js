const displayWeather = function (location, temperature, feelsLike) {
    const weatherInfoDiv = document.querySelector('.weather-info');
    if (!weatherInfoDiv) return;

    weatherInfoDiv.innerHTML = "";

    const locationHeader = document.createElement("h2");
    locationHeader.classList.add("location-header");
    locationHeader.innerText = location.charAt(0).toUpperCase() + location.slice(1).toLowerCase();

    const temperatureHeader = document.createElement("h1");
    temperatureHeader.classList.add("location-weather");
    temperatureHeader.innerText = `${temperature}°C`;

    const feelsLikeHeader = document.createElement("h3");
    feelsLikeHeader.classList.add("feels-like");
    feelsLikeHeader.innerText = `Feels Like: ${feelsLike}°`;

    weatherInfoDiv.append(locationHeader, temperatureHeader, feelsLikeHeader);
}

export default displayWeather;