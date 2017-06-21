//APIs 

//Air visual api key

function displayAirPollution () {
        
        var typeCountry = $(this).data('country');
        var typeState = $(this).data('state');
        var typeCity = $(this).data('city');
        var queryURL = 'https://api.airvisual.com/v2/city?country=' +typeCountry+ '&state=' +typeState+ '&city=' +typeCity+ '&api_key=AHhoa7Jdf33QQmMuN';
        console.log(queryURL);
        $.ajax({
           url: queryURL, 
            method: 'GET',
        }).done(function(response) {
            console.log(response);
            //javascript code here
        }
                
    