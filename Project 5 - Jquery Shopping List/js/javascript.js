/**
 * Created by qtrain on 2/4/15.
 */
$(document).ready(function () {
    $('#add').click(function() {
        //console.log('clicked');
        $('ul').append('<li>New Item</li>')
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
