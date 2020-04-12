var WEATHER = WEATHER ? WEATHER : {};

WEATHER.converter = {
    unixConverter: function (unix) {
        var date = new Date(unix * 1000);
        var hour = "0" + date.getHours();
        var minutes = "0" + date.getMinutes();
        return hour.substr(-2) + ':' + minutes.substr(-2);
    }
}