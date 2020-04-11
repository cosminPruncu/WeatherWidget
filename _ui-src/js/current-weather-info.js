var WEATHER = WEATHER ? WEATHER : {};

WEATHER.info = {
    bind: function () {
        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": "http://api.openweathermap.org/data/2.5/weather?q=cluj&units=metric&appid=c02f4b3cff27f9755aab3b1021f34040",
            "method": "GET",
            success: function (data) {
                var $weatherInfo = data.weather[0];
                var $weatherMain = data.main;

                var utcSunset = data.sys.sunset;
                var date = new Date(utcSunset * 1000);
                var sunset = date.toLocaleTimeString();

                var utcSunrise = data.sys.sunrise;
                var date = new Date(utcSunrise * 1000);
                var sunrise = date.toLocaleTimeString();

                console.log(data);
                $('.city-name').text(data.name);
                $('.temperature').text(data.main.temp);
                $('.image').attr('src', `http://openweathermap.org/img/wn/${$weatherInfo.icon}@2x.png`);
                $('.weather-description').text($weatherInfo.description);
                $('.feels-like').text($weatherMain.feels_like);
                $('.sunset').text(sunset);
                $('.sunrise').text(sunrise);
            },
            error: function (data) {
                console.log(data);
            }
        });
    },
}

$(document).ready(function () {
    WEATHER.info.bind();
});