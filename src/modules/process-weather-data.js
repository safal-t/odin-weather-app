function processWeatherData(data) {
    const currentTemp = data.currentConditions.temp
    const feelsLike = data.currentConditions.feelslike
    return {
        currentTemp: currentTemp,
        feelsLike: feelsLike
    }
}

export default processWeatherData