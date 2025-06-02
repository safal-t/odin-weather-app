import displayError from "./display-error"

async function fetchWeather(location) {
    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&elements=datetime%2CdatetimeEpoch%2Ctempmax%2Ctempmin%2Ctemp%2Cfeelslike&key=QPPUCPN8UMHUWTZ569ES3EV45&contentType=json`)
        if (!response.ok) throw new Error("Network response was not ok")
        const data = await response.json()
        // Check for API error in the response body
        if (data.error || data.code) {
            throw new Error(data.message || "Invalid location")
        }
        return data
    } catch (error) {
        console.error('Fetch weather failed:', error)
        displayError('Enter a valid location');
        return null
    }
}

export default fetchWeather

