/**
 * Created by qtrain on 2/4/15.
 */
$(document).ready(function () {
    $('#add').click(function() {
        //console.log('clicked');
        var addItem = prompt('Enter an item to add to your todo list');
        $('ul').append('<li>' + addItem + '</li>')
    })
        $('#delete').click(function(){
            $('li:last').remove();
    })
});
/*
function addToList () {
    $('#add').click(function() {
        console.log('clicked');
        $('li').append('<li>New Item</li>')
    })
}
*/
