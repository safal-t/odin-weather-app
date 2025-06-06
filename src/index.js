import fetchWeather from "./modules/fetch-weather";
import processWeatherData from "./modules/process-weather-data.js";
import displayWeather from "./modules/display-weather.js"
import "./index.css"

const form = document.querySelector(".location-form")
form.addEventListener("submit", (event) => {
    event.preventDefault()
    main(form.location.value)
    form.reset()
})

async function main(location) {
    try {
        const data = await fetchWeather(location)
        const processedData = processWeatherData(data)
        const temperature = processedData.currentTemp
        const feelsLike = processedData.feelsLike
        displayWeather(location, temperature, feelsLike)
    } catch {
    }
}
