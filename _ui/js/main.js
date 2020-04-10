$(document).ready(function(){
    $.ajax({
        "async": true,
	"crossDomain": true,
	"url": "http://api.weatherstack.com/current?access_key=560387de2f204b44b887553608224976&query=Cluj",
	"method": "GET",
        success : function(data){
            console.log(data.current.temperature);
        },
        error : function(data){
            console.log(data);
        }
    })
});
//# sourceMappingURL=main.js.map