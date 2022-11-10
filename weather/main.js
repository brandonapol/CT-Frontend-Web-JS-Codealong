const API_key = "cb0e2c5ea4c83b9c517301b8e88f8121";

function getData(){
    let city = document.querySelector("#city").value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${API_key}`)
    .then(response => response.json())
    .then(weatherdata => {
        console.log(weatherdata)
        let high = weatherdata.main.temp_max;
        let low = weatherdata.main.temp_min;
        let weather = weatherdata.weather[0].description;
        let humidity = weatherdata.main.humidity;
        document.querySelector(`#high`).innerHTML = 'high: ' + high;
        document.querySelector(`#low`).innerHTML = 'low: ' + low;
        document.querySelector(`#weather`).innerHTML = 'weather: ' + weather;
        document.querySelector(`#humidity`).innerHTML = 'humidity: ' + humidity;
        if (weather.includes('cloud')){
            document.querySelector(`#weatherimg`).setAttribute('src', 'images/noun_weather_4023107.png');
        } else if (weather.includes('rain')){
            document.querySelector(`#weatherimg`).setAttribute('src', 'images/noun_weather_4026314.png');
        } else if (weather.includes('snow')){
            document.querySelector(`#weatherimg`).setAttribute('src', 'images/noun_snowing_4026308.png');
        }else {
            document.querySelector(`#weatherimg`).setAttribute('src', 'images/noun_weather_2914086.png');
        }
    })
}

