function processWeatherData(data) {
    const currentTemp = data.currentConditions.temp
    console.log(`Temperature: ${currentTemp}°C`)
}

export default processWeatherData