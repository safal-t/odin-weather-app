const displayError = function (string) {
    const h1 = document.createElement('h1');
    h1.className = 'error';
    h1.textContent = string;
    const weatherInfoDiv = document.querySelector('.weather-info');
    if (weatherInfoDiv) {
        weatherInfoDiv.appendChild(h1);
    }
}

export default displayError;