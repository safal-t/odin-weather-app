function processWeatherData(data) {
    const currentTemp = data.currentConditions.temp
    return `${currentTemp}°C`
}

export default processWeatherData