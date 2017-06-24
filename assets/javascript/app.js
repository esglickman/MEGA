

                
 




    var placeSearch, autocomplete;
	var place = {}, lat, lng;

	function initAutocomplete() {
    	// Create the autocomplete object, restricting the search to geographical
        // location types.
        autocomplete = new google.maps.places.Autocomplete(
        	(document.getElementById("location")),
            {types: ['geocode']
        });

        // When the user selects an location from the dropdown, get de geometry location (lat,lng).
        autocomplete.addListener('place_changed', getGeometry);
    }

    function getGeometry() {
   		// Get the location from the autocomplete object.
     	place = autocomplete.getPlace();
    }
    
    //get breezeOmeter data
    function breezeOmeter (lat, lng) {              
        var queryURL = 'https://api.breezometer.com/baqi/?lat='+lat+'&lon='+lng+'&key=f17090c3cf4a448f981b47f391d41295'
        $.ajax({
           url: queryURL, 
            method: 'GET',
        }).done(function(response) {
            console.log(response);
            //javascript code here
        })
    };

$(document).ready(function(){
	//Button search click event
	$("#aqSearch").on("click", function () {
		var location = $("#location");
		if(location.val().trim() == ""){
			location.after('<p class= text-danger>Please enter a location: Address, City, Zip code.</p>');
		} else {
			if(!place.geometry){
      			location.after('<p class= text-danger>Please enter a valid location.</p>');
    		}else{
     			lat = place.geometry.location.lat();
     			lng = place.geometry.location.lng();
   
    			breezeOmeter(lat, lng);
     		}
     	}
    })
});

$('#twitterButton').on('click', function (){
    var text = "Our air qaulity index is" +aqi+ "this is terrible";
    var twitterName;
    var hashtags = "magaPolution", "fixItNow";
    $(this).attr('data-text', text);
    $(this).attr('data-via', twitterName);
    $(this).attr('data-hashtags', hashtags);
 
});

