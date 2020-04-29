var WEATHER = WEATHER ? WEATHER : {};

WEATHER.city = {
    city_list: [],
    getCityList: function () {
        $.getJSON('_ui-src/js/city.list.json', function (data) {
            $.each(data, function (key) {
                WEATHER.city.city_list.push(data[key].name);
            })
        });
    },

    cityAutocomplete: function () {
        $(".search-city-name").autocomplete({
            source: WEATHER.city.city_list,
            minLength: 3
        });
    }
}

$(document).ready(function () {
    WEATHER.city.getCityList();
    WEATHER.city.cityAutocomplete();
});