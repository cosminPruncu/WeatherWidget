var WEATHER = WEATHER ? WEATHER : {};

WEATHER.info = {
    $cityValue : "",

    bindSearchOnClick: function () {
        $('.search-city-btn').on('click', function () {
            WEATHER.info.$cityValue = $('.search-city-name').val();
            $.ajax({
                "async": true,
                "crossDomain": true,
                "url": `http://api.openweathermap.org/data/2.5/weather?q=${WEATHER.info.$cityValue}&units=metric&appid=c02f4b3cff27f9755aab3b1021f34040`,
                "method": "GET",
                success: function (data) {
                    var $weatherInfo = data.weather[0];
                    var $weatherMain = data.main;

                    var utcSunset = data.sys.sunset;
                    var utcSunrise = data.sys.sunrise;

                    console.log(data);
                    $('.city-name').text(data.name);
                    $('.city-name-additional').text("Additionl weather information for " + data.name);
                    $('.temperature').text((data.main.temp).toFixed(1) + " °C");
                    $('.feels-like').text(($weatherMain.feels_like).toFixed(1) + " °C");
                    $('.image-current').attr('src', `http://openweathermap.org/img/wn/${$weatherInfo.icon}@2x.png`);
                    $('.weather-description').text($weatherInfo.description);
                    $('.sunset').text(WEATHER.converter.unixConverter(utcSunset));
                    $('.sunrise').text(WEATHER.converter.unixConverter(utcSunrise));
                    WEATHER.forecast.forecastInfo();
                },
                error: function (data) {
                    console.log(data);
                }
            });
        });
    },
}

$(document).ready(function () {
    WEATHER.info.bindSearchOnClick();
});