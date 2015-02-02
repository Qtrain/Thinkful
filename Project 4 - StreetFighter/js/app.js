/* Using .show() and .hide()
 http://www.w3schools.com/jquery/jquery_hide_show.asp
 */
/* make sure document is ready i.e. page is loaded before executing jquery */
$(document).ready(function () {
    //call method
    ryuMoves();
});

function ryuMoves() {
$('.ryu').mouseenter(function () {
          $('.ryu-still').hide();
          $('.ryu-ready').show();
        })
        .mouseleave(function () {
           $('.ryu-ready').hide();
           $('.ryu-still').show();
        })
        .mousedown(function () {
            //debug statement
            /* console.log('mousedown'); */
            playHadouken();
            $('.ryu-ready').hide();
            $('.ryu-throwing').show();
            $('.hadouken').finish().show().animate(
                {'left': '300px'},
                500,
                function () {
                    $(this).hide();
                    $(this).css('left', '-212px');
                }
            );
        })
        .mouseup(function () {
            //debug statement
            console.log('mouseup');
            $('.ryu-throwing').hide();
            $('.ryu-ready').show();
        })
        .keydown(function () {
            $('ryu-ready').hide();
            $('ryu-cool').show();
        })
}

function playHadouken() {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
}

/******* Notes: ********/
/* Before you bother writing the code that determines what happens when this event fires,
 you should ensure that the event happens. Alerts or console.logs are a good technique.
 $('.ryu').mouseenter(function() {
 alert('mouse entered .ryu div')
 }); */