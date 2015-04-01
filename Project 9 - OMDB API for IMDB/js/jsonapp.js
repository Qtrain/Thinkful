/**
 * Created by qtrain on 3/30/15.
 */
$(document).ready(function(){

    /* refactor see line: */
    $(function(){
        $('#search-term').submit(function(event){
            event.preventDefault();
            var searchTerm = $('#query').val();
            getRequest(searchTerm);
        });
    });

    function getRequest(searchTerm){
        $.getJSON('http://www.omdbapi.com/?s=' + searchTerm + '&r=json', function(data){
            showResults(data.Search);
        });
    }

    function showResults(results){
        var html = "";
        $.each(results, function(index,value){
            html += '<p>' + value.Title + '</p>';
            console.log(value.Title);
        });
        $('#search-results').html(html);
    }
    /* Start of unrefactored code */
    /* https://api.jquery.com/jquery.get/
    $.get('http://www.omdbapi.com/?s=Star%20Wars&r=json', function(data){
        console.log(data);
        showResults(data.Search);
    }, 'json');

    function showResults(results) {
        var html = "";
         //https://api.jquery.com/jquery.each/
        //http://stackoverflow.com/questions/10968555/jquery-eachfunctionindex-value-what-is-value
        $.each(results, function (index, value) {
            html += '<p>' + value.Title + '</p>';
            console.log(value.Title);
        });
        $('#search-results').html(html);
    }
     */

    /*
     Some APIs will require different parameters; this is an easier way to keep track of them.

     function getRequest(searchTerm){
     var params = {
     s: searchTerm,
     r: 'json'
     };
     url = 'http://www.omdbapi.com';

     $.getJSON(url, params, function(data){
     showResults(data.Search);
     });
     }
     */
});
