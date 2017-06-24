
                
 



$('#twitterButton').on('click', function (){
    var text = "Our air qaulity index is" +aqi+ "this is terrible";
    var twitterName;
    var hashtags = "magaPolution", "fixItNow";
    $(this).attr('data-text', text);
    $(this).attr('data-via', twitterName);
    $(this).attr('data-hashtags', hashtags);
 
});









                
    