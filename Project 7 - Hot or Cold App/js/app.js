$(document).ready(function(){

	var randNumber = Math.floor((Math.random() * 100) + 1);//generate a random number btwn 1-100
	var uGuess; //holds users guess
	var count=0;//counter variable

	console.log(randNumber);

	$("#guessButton").click(function(){
		uGuess = $('#userGuess').val();
		console.log(uGuess);
		console.log("hello?");
		evaluate(uGuess);
		$('#userGuess').val(' ');//clears form
		return false;
		/*
		* The default type for a button is "submit" which submits its containing form and refreshes the page.
		* By returning false from your click handler you are preventing this default action. The alternative is to
		* specify the button type as "button".
		*/
	});

	function evaluate(){
		count++
		if (uGuess < randNumber){
			alert('Too low try again');
		}
		else if (uGuess > randNumber){
			alert('Sorry too high');
		}
		else {
			alert("You got it right in " + count +" guesses!");
			location.reload();
		}
		console.log("count: " + count);
		$("#count").text(count);
	}

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});


