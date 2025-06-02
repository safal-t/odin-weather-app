async function fetchWeather(location) {
    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&elements=datetime%2CdatetimeEpoch%2Ctempmax%2Ctempmin%2Ctemp%2Cfeelslike&key=QPPUCPN8UMHUWTZ569ES3EV45&contentType=json`)
        if (!response.ok) throw new Error("Network response was not ok")
        return response.json()
    } catch (error) {
        console.error('Fetch weather failed:', error)
        throw error;
    }
}

export default fetchWeather

