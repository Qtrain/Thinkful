/**
 * Created by qtrain on 3/29/15.
 */

$(document).ready(function(){

    $(".what").click(function(){
        $(".overlay").fadeIn(1000);
    });

    /*--- Hide information modal box ---*/
    $("button.close").click(function(){
        $(".overlay").fadeOut(1000);
    });

    $(".new").click(function(){
        location.reload();
    });

    function sleep(milliseconds) {
        var start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
            if ((new Date().getTime() - start) > milliseconds){
                break;
            }
        }
    }


    var quiz = [{
        "question": "What is the full form of IP?",
        "choices": ["Internet Provider", "Internet Port", "Internet Protocol"],
        "correct": "Internet Protocol"
    }, {
        "question": "Who is the founder of Microsoft?",
        "choices": ["Bill Gates", "Steve Jobs", "Steve Wozniak"],
        "correct": "Bill Gates"
    }, {
        "question": "1 byte = ?",
        "choices": ["8 bits", "64 bits", "1024 bits"],
        "correct": "8 bits"
    }, {
        "question": "The C programming language was developed by?",
        "choices": ["Brendan Eich", "Dennis Ritchie", "Guido van Rossum"],
        "correct": "Dennis Ritchie"
    }, {
        "question": "What does CC mean in emails?",
        "choices": ["Carbon Copy", "Creative Commons", "other"],
        "correct": "Carbon Copy"
    }];




// define elements
    var content = document.getElementById("stuff"),
        questionContainer = document.getElementById("question"),
        choicesContainer = document.getElementById("choices"),
        scoreContainer = document.getElementById("score"),
        submitBtn = document.getElementById("submit");

// init vars
    var currentQuestion = 0,
        score = 0,
        askingQuestion = true;

    /* --
    function $(id) { // shortcut for document.getElementById
        return document.getElementById(id);
    } -- */

    function askQuestion() {
        var choices = quiz[currentQuestion].choices,
            choicesHtml = "";

        // loop through choices, and create radio buttons
        for (var i = 0; i < choices.length; i++) {
            choicesHtml += "<input type='radio' name='quiz" + currentQuestion +
            "' id='choice" + (i + 1) +
            "' value='" + choices[i] + "'>" +
            " <label for='choice" + (i + 1) + "'>" + choices[i] + "</label><br>";
        }

        // load the question
        questionContainer.textContent = "Question " + (currentQuestion + 1) + ": " +
        quiz[currentQuestion].question;

        // load the choices
        choicesContainer.innerHTML = choicesHtml;

        // setup for the first time
        if (currentQuestion === 0) {
            scoreContainer.textContent = "Score: 0 right answers out of " +
            quiz.length + " possible.";
            submitBtn.textContent = "Submit Answer";
        }
    }

    function checkAnswer() {
        // are we asking a question, or proceeding to next question?
        if (askingQuestion) {
            submitBtn.textContent = "Next Question";
            askingQuestion = false;

            // determine which radio button they clicked
            var userpick,
                correctIndex,
                radios = document.getElementsByName("quiz" + currentQuestion);
            for (var i = 0; i < radios.length; i++) {
                if (radios[i].checked) { // if this radio button is checked
                    userpick = radios[i].value;
                }

                // get index of correct answer
                if (radios[i].value == quiz[currentQuestion].correct) {
                    correctIndex = i;
                }
            }

            // setup if they got it right, or wrong
            var labelStyle = document.getElementsByTagName("label")[correctIndex].style;
            labelStyle.fontWeight = "bold";
            if (userpick == quiz[currentQuestion].correct) {
                score++;
                labelStyle.color = "green";
                submitBtn.click();
            } else {
                labelStyle.color = "red";
            }

            scoreContainer.textContent = "Score: " + score + " right answers out of " +
            quiz.length + " possible.";
        } else { // move to next question
            // setting up so user can ask a question
            askingQuestion = true;
            // change button text back to "Submit Answer"
            submitBtn.textContent = "Submit Answer";
            // if we're not on last question, increase question number
            if (currentQuestion < quiz.length - 1) {
                currentQuestion++;
                askQuestion();
            } else {
                showFinalResults();
            }
        }
    }

    function showFinalResults() {
        var percentage = Math.round(score / quiz.length * 100);

        if (percentage < 60){
            content.innerHTML = "<h2>Oi!  What the hell was that, mate? No tits for you! Try again!</h2>"+
            "<h2>Below are your results:</h2>" +
            "<h2>" + score + " out of " + quiz.length + " questions, " +
            Math.round(score / quiz.length * 100) + "%<h2>";
        }
        else{
            $("h1").remove();
            content.innerHTML = "<h2>You've completed the quiz!</h2>" +
            "<h2>" + score + " out of " + quiz.length + " questions, " +
            Math.round(score / quiz.length * 100) + "<br>" + " Now, here are some tits!";
            $(".container").fadeOut(5000);
            $(".quiz").append('<p style="margin: 500px"></p>')
            $("body").css('background-image', 'url("http://media.giphy.com/media/IjmMzurYulKEw/giphy.gif")');

        }
    }

    window.addEventListener("load", askQuestion, false);
    submitBtn.addEventListener("click", checkAnswer, false);



});
