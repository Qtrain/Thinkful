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
        "question": "How would we use css to select an element with <h1 class = \"intro\">",
        "choices": [".intro{ property: attribute }", "intro{ property :attribute }", "#intro{property: attribute }"],
        "correct": ".intro{ property: attribute }"
    }, {
        "question": "How would we select the element with id firstname <p id=\"firstname\">?",
        "choices": ["#firstname{ property: attribute }", ".firstname{ property: attribute }", "who fucking cares?"],
        "correct": "#firstname{ property: attribute }"
    }, {
        "question": "How would we select all elements?",
        "choices": ["#{ property: attribute }",  "@all{ property: attribute }", "*{ property: attribute }"],
        "correct": "*{ property: attribute }"
    }, {
        "question": "what does this do div > p?",
        "choices": ["Selects all <p> elements inside <div> elements", "Selects <p> element that is a child of <div>", "Selects all <p> that are placed immediately after <div>"],
        "correct": "Selects <p> element that is a child of <div>"
    }, {
        "question": "what does div + p do?",
        "choices": ["Selects all <div> and <p> elements", "Selects all <p> elements inside <div> elements", "Selects all <p> elements that are placed immediately after <div> elements"],
        "correct": "Selects all <p> elements that are placed immediately after <div> elements"
    }];


    function escapeHtmlChars(unsafe) {
        return unsafe
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    for (var i = 0; i < quiz.length; i++) {
        quiz[i].correct = escapeHtmlChars(quiz[i].correct);

        for (var j = 0; j < quiz[i].choices.length; j++) {
            quiz[i].choices[j] = escapeHtmlChars(quiz[i].choices[j]);
        }
    }


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
            content.innerHTML = "<h2>Great Job!</h2>" +
            "<h2>" + score + " out of " + quiz.length + " questions, " +
            Math.round(score / quiz.length * 100) + "%!" + "<br>" + " Now, here are some tits!";
            $(".container").fadeOut(5000);
            $(".quiz").append('<p style="margin: 500px"></p>');
            $("body").css('background-image', 'url("http://media.giphy.com/media/IjmMzurYulKEw/giphy.gif")');

        }
    }

    window.addEventListener("load", askQuestion, false);
    submitBtn.addEventListener("click", checkAnswer, false);



});
