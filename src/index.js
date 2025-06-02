import fetchWeather from "./modules/fetch-weather";
import processWeatherData from "./modules/display-weather";
import loadForm from "./modules/form/form";

loadForm()

const form = document.querySelector(".location-form")
form.addEventListener("submit", (event) => {
    event.preventDefault()
    main(form.location.value)
})

async function main(location) {
    const data = await fetchWeather(location)
    processWeatherData(data)
}
