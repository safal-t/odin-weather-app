import fetchWeather from "./modules/fetch-weather";
import processWeatherData from "./modules/process-weather-data.js";
import displayWeather from "./modules/display-weather.js"
import displayError from "./modules/display-error.js"

const form = document.querySelector(".location-form")
form.addEventListener("submit", (event) => {
    event.preventDefault()
    main(form.location.value)
})

async function main(location) {
    try {
        const data = await fetchWeather(location)
        const temperature = processWeatherData(data)
        displayWeather(location, temperature)
    } catch {
    }
}
