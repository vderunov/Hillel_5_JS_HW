document.querySelector('.weather-btn').addEventListener('click', getWeather);

function getWeather() {
    let link = 'https://api.openweathermap.org/data/2.5/weather?q=';
    let city = document.querySelector('.city').value || handler() || 'Dnipro';
    let api = 'APPID=cc6eb1dd89b9dbb84bb005d55fc16bab';
    fetch(`${link}${city}&${api}&units=metric`)
        .then(response => response.json())
        .then((weather) => {
            let out = '';
            let outAdd = '';
            out += `<img src="https://openweathermap.org/img/w/${weather.weather[0].icon}.png">`;
            outAdd += `City:<b>&nbsp${weather.name}</b><br>`;
            outAdd += `Temp:<b>&nbsp${weather.main.temp}&#176C</b><br>`;
            outAdd += `Humidity:<b>&nbsp${weather.main.humidity}%</b><br>`;
            outAdd += `Pressure:<b>&nbsp${Math.round(
                weather.main.pressure * 0.00750063755419211 * 100,
            )}mmHg</b><br>`;
            outAdd += `Visibility:<b>&nbsp${weather.visibility / 1000}km</b><br>`;
            document.getElementById('weather').innerHTML = out;
            document.querySelector('.weather-add').innerHTML = outAdd;

            // put weather in LocalStorage
            let weatherObj = JSON.stringify(weather);
            localStorage.setItem('weather', weatherObj);
        })

        .catch((error) => {
            console.log(error);
        });
}

getWeather();

document.addEventListener('DOMContentLoaded', handler);

function handler() {
    let returnObj = JSON.parse(localStorage.getItem('weather'));
    if ('name' in returnObj) {
        return returnObj.name;
    }
    return false;
}