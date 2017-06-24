
//global variables


//APIs 

$('button').on("click", function () {

     var cityInput = $('#cityInput').val().trim();
    if (cityInput== '') {
        cityInput.after('<p class= text-danger>City Input Required</p>');
    }else{
        
    
$.ajax({
        //url:"https://api.propublica.org/congress/v1/members/senate/FL/current.json",
         // url: "https://api.propublica.org/congress/v1/members/senate/FL/current.json",
         url: "https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyB5Lq1bXmpkXfTxPJKyZJEd-88wjgzWlSg",
         type: "GET",
       }).done(function(data){
       var lat = data.results[0].geometry.location.lat;
       var lng = data.results[0].geometry.location.lng;
      
        breezeOmeter(lat, lng);

      })
    }
    
    });

//Breeze-O-Meter API

function breezeOmeter (lat, lng) {
        

     var queryURL = 'https://api.breezometer.com/baqi/?lat='+lat+'&lon='+lng+'&key=f17090c3cf4a448f981b47f391d41295'
        console.log(queryURL);
        $.ajax({
           url: queryURL, 
            method: 'GET',
        }).done(function(response) {
            console.log(response);
            //javascript code here
        })
};
                
 

//proPublica

$.ajax({
		//url:"https://api.propublica.org/congress/v1/members/senate/FL/current.json",
         url: "https://api.propublica.org/congress/v1/115/senate/members.json",
         type: "GET",
         dataType: 'json',
         headers: {'X-API-Key': 'GGL4y5FC2p9Eea8fAmrR16BZOg90Xott8D8D6NVU'}
       }).done(function(data){
    
       console.log(data)
       });
//twitter

$('#twitterButton').on('click', function (){
    var text = "Our air qaulity index is" +aqi+ "this is terrible";
    var twitterName;
    var hashtags = "magaPolution", "fixItNow";
    $(this).attr('data-text', text);
    $(this).attr('data-via', twitterName);
    $(this).attr('data-hashtags', hashtags);
    
    data-text="'Our air qaulity index is' +aqi+ 'this is terrible'" data-via= rep data-hashtags="megapollution" "fixitnow"
});









                
    