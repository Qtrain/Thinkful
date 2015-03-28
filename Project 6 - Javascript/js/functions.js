$(document).ready(function(){
    $("#fb").click(function(){
        var num=prompt('please enter a number');
        var convertedNum = +num;
       fizzbuzz(convertedNum);
    });
});

function fizzbuzz(max) {

    for (var i=1; i <= max; i++) {
        if (i % 15 == 0)
            $("#fizz").append('<li> FizzBuzz</li>');
        else if (i % 3 == 0)
            $("#fizz").append('<li> Fizz</li>');
        else if (i % 5 == 0)
            $("#fizz").append('<li> Buzz</li>');
        else
            $("#fizz").append("<li>" + i + "</li>");
    }
}
