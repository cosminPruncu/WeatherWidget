var WEATHER = WEATHER ? WEATHER : {};

WEATHER.forecast = {
    bind: function () {
        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": "http://api.openweathermap.org/data/2.5/forecast?q=cluj&units=metric&appid=c02f4b3cff27f9755aab3b1021f34040",
            "method": "GET",
            success: function (data) {
                var forecastList = data.list[0];
                console.log(forecastList.dt_txt);
                $('.first-forecast').text(forecastList.main.temp);
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

