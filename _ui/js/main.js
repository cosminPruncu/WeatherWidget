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
});;var WEATHER = WEATHER ? WEATHER : {};

WEATHER.forecast = {
    forecastInfo: function () {
        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": `http://api.openweathermap.org/data/2.5/forecast?q=${WEATHER.info.$cityValue}&units=metric&appid=c02f4b3cff27f9755aab3b1021f34040`,
            "method": "GET",
            success: function (data) {
                var firstForecast = data.list[0];
                var secondForecast = data.list[1];
                var thirdForecast = data.list[2];
                var fourthForecast = data.list[3];
                var fifthForecast = data.list[4];
                var sixthForecast = data.list[5];

                var firstDate = firstForecast.dt;
                var secondDate = secondForecast.dt;
                var thirdDate = thirdForecast.dt;
                var fourthDate = fourthForecast.dt;
                var fifthDate = fifthForecast.dt;
                var sixthDate = sixthForecast.dt;


                $('.image-forecast-first').attr('src',
                    `http://openweathermap.org/img/wn/${firstForecast.weather[0].icon}.png`);
                $('.image-forecast-second').attr('src',
                    `http://openweathermap.org/img/wn/${secondForecast.weather[0].icon}.png`);
                $('.image-forecast-third').attr('src',
                    `http://openweathermap.org/img/wn/${thirdForecast.weather[0].icon}.png`);
                $('.image-forecast-fourth').attr('src',
                    `http://openweathermap.org/img/wn/${fourthForecast.weather[0].icon}.png`);
                $('.image-forecast-fifth').attr('src',
                    `http://openweathermap.org/img/wn/${fifthForecast.weather[0].icon}.png`);
                $('.image-forecast-sixth').attr('src',
                    `http://openweathermap.org/img/wn/${sixthForecast.weather[0].icon}.png`);


                $('.first-hour').text(WEATHER.converter.unixConverter(firstDate));
                $('.second-hour').text(WEATHER.converter.unixConverter(secondDate));
                $('.third-hour').text(WEATHER.converter.unixConverter(thirdDate));
                $('.fourth-hour').text(WEATHER.converter.unixConverter(fourthDate));
                $('.fifth-hour').text(WEATHER.converter.unixConverter(fifthDate));
                $('.sixth-hour').text(WEATHER.converter.unixConverter(sixthDate));


                $('.first-forecast').text((firstForecast.main.temp).toFixed(1) + " °C");
                $('.second-forecast').text((secondForecast.main.temp).toFixed(1) + " °C");
                $('.third-forecast').text((thirdForecast.main.temp).toFixed(1) + " °C");
                $('.fourth-forecast').text((fourthForecast.main.temp).toFixed(1) + " °C");
                $('.fifth-forecast').text((fifthForecast.main.temp).toFixed(1) + " °C");
                $('.sixth-forecast').text((sixthForecast.main.temp).toFixed(1) + " °C");

            },
            error: function (data) {
                console.log(data);
            }
        });
    }
};var WEATHER = WEATHER ? WEATHER : {};

WEATHER.converter = {
    unixConverter: function (unix) {
        var date = new Date(unix * 1000);
        var hour = "0" + date.getHours();
        var minutes = "0" + date.getMinutes();
        return hour.substr(-2) + ':' + minutes.substr(-2);
    }
}
//# sourceMappingURL=main.js.map