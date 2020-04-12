var WEATHER = WEATHER ? WEATHER : {};

WEATHER.forecast = {
    bind: function () {
        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": "http://api.openweathermap.org/data/2.5/forecast?q=cluj&units=metric&appid=c02f4b3cff27f9755aab3b1021f34040",
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

                
                $('.image-forecast-first').attr('src', `http://openweathermap.org/img/wn/${firstForecast.weather[0].icon}.png`);
                $('.image-forecast-second').attr('src', `http://openweathermap.org/img/wn/${secondForecast.weather[0].icon}.png`);
                $('.image-forecast-third').attr('src', `http://openweathermap.org/img/wn/${thirdForecast.weather[0].icon}.png`);
                $('.image-forecast-fourth').attr('src', `http://openweathermap.org/img/wn/${fourthForecast.weather[0].icon}.png`);
                $('.image-forecast-fifth').attr('src', `http://openweathermap.org/img/wn/${fifthForecast.weather[0].icon}.png`);
                $('.image-forecast-sixth').attr('src', `http://openweathermap.org/img/wn/${sixthForecast.weather[0].icon}.png`);


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
    },
}

$(document).ready(function () {
    WEATHER.forecast.bind();
});

