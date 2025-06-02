const displayWeather = function (location, temperature) {
    const weatherInfoDiv = document.querySelector('.weather-info');
    if (!weatherInfoDiv) return;

    weatherInfoDiv.innerHTML = "";

    const h1 = document.createElement("h1");
    h1.classList.add("location-header");
    h1.innerText = location.charAt(0).toUpperCase() + location.slice(1).toLowerCase();

    const h2 = document.createElement("h2");
    h2.classList.add("location-weather");
    h2.innerText = temperature;

    weatherInfoDiv.append(h1, h2);
}

export default displayWeather;