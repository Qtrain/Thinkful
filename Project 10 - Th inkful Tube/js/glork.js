/**
 * Created by qtrain on 3/31/15.
 */
$(document).ready( function(){
    $.get('https://www.googleapis.com/youtube/v3/channels?part=contentDetails &mine=true', function(data){
        console.log(data);
    }, 'json');
});

/*
  How to use the youTube api: https://developers.google.com/youtube/v3/code_samples/javascript
 */

