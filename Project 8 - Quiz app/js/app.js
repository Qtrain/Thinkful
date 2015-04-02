/**
 * Created by qtrain on 3/29/15.
 */

$(document).ready(function () {

    $(".what").click(function () {
        $(".overlay").fadeIn(1000);
    });

    /*--- Hide information modal box ---*/
    $("button.close").click(function () {
        $(".overlay").fadeOut(1000);
    });

    $(".new").click(function () {
        location.reload();
    });

    function sleep(milliseconds) {
        var start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
            if ((new Date().getTime() - start) > milliseconds) {
                break;
            }
        }
    }


    var quiz = [{
        "question": "what does this do div > p?",
        "choices": ["Selects all <p> elements inside <div> elements", "Selects <p> element that is a child of <div>", "Selects all <p> that are placed immediately after <div>"],
        "correct": "Selects <p> element that is a child of <div>"
    }, {
     "question": "What is information processing theory",
     "choices": ["provide model that help psychologists understand the processes involved in memory.", "to provide models that help psychologists understand the processes involved in learning.", "provide models that help psychologists understand the processes involved in infant learning."],
     "correct": "makes use of modern computer science and related fields to provide models that help psychologists understand the processes involved in memory."
    }, {
        "question": "How would we select all elements?",
        "choices": ["#{ property: attribute }", "@all{ property: attribute }", "*{ property: attribute }"],
        "correct": "*{ property: attribute }"
    }, {
        "question": "How would we use css to select an element with <h1 class = \"intro\">",
        "choices": [".intro{ property: attribute }", "intro{ property :attribute }", "#intro{property: attribute }"],
        "correct": ".intro{ property: attribute }"
    }, {
        "question": "what does div + p do?",
        "choices": ["Selects all <div> and <p> elements", "Selects all <p> elements inside <div> elements", "Selects all <p> elements that are placed immediately after <div> elements"],
        "correct": "Selects all <p> elements that are placed immediately after <div> elements"
    }];

/*
    var quiz = [{
        "question": "What is information processing theory",
        "choices": ["provide model that help psychologists understand the processes involved in memory.", "to provide models that help psychologists understand the processes involved in learning.", "provide models that help psychologists understand the processes involved in infant learning."],
        "correct": "makes use of modern computer science and related fields to provide models that help psychologists understand the processes involved in memory."
}, {
    "question": "What are the three distinct processes of memory.",
    "choices": ["encoding storage and retrieval", "encoding processing and retrieval", "encoding storage and learning"],
    "correct": "encoding storage and retrieval"
}, {
    "question": "What is encoding",
    "choices": ["information stored in memory is brought to mind", "the transformation of information into a form that can be stored in memory", "keeping or maintaining information in memory"],
    "correct": "the transformation of information into a form that can be stored in memory"
}, {
    "question": "what is storage",
    "choices": ["keeping or maintaining information in memory", "information stored in memory is brought to mind", "keeping or maintaining information in memory"],
    "correct": "keeping or maintaining information in memory"
}, {
    "question": "what is retreival",
    "choices": ["information stored in memory is brought to mind", "keeping or maintaining information in memory", "the cognitive process that includes encoding storage and retrieval"],
    "correct": "information stored in memory is brought to mind"
}, {
    "question": "what is memory",
    "choices": ["information stored in memory is brought to mind", "keeping or maintaining information in memory", "the cognitive process that includes encoding storage and retrieval"],
    "correct": "the cognitive process that includes encoding storage and retrieval"
}, {
    "question": "what is sensory memory",
    "choices": ["information stored in memory is brought to mind", "Virtually everything we see, hear, or otherwise sense that is stored for a brief period of time", "the cognitive process that includes encoding storage and retrieval"],
    "correct": "Virtually everything we see, hear, or otherwise sense that is stored for a brief period of time"
}, {
    "question": "what is sensory memory",
    "choices": ["information stored in memory is brought to mind", "Virtually everything we see, hear, or otherwise sense that is stored for a brief period of time", "the cognitive process that includes encoding storage and retrieval"],
    "correct": "Virtually everything we see, hear, or otherwise sense that is stored for a brief period of time"
}, {
    "question": "what is displacement",
    "choices": ["when you repeat something over and over to yourself", "Virtually everything we see, hear, or otherwise sense that is stored for a brief period of time", "short term memory is limited so each new incoming item pushes out an existing item which is fogotten"],
    "correct": "Virtually everything we see, hear, or otherwise sense that is stored for a brief period of time"
}, {
    "question": "what is rehearsal",
    "choices": ["when you repeat something over and over to yourself", "Virtually everything we see, hear, or otherwise sense that is stored for a brief period of time", "short term memory is limited so each new incoming item pushes out an existing item which is fogotten"],
    "correct": "Virtually everything we see, hear, or otherwise sense that is stored for a brief period of time"
}, {
    "question": "what is chunking",
    "choices": ["when you repeat something over and over to yourself", "organizing and grouping information into larger units", "organizing information into smaller units"],
    "correct": "organizing and grouping information into larger units"
}, {
    "question": "what is working memory",
    "choices": ["the part of the memory which processes thoughts", "the temporary storage structures of the brain", "memory used to process thoughts"],
    "correct": "the temporary storage structures of the brain"
}, {
    "question": "what is the difference between maintenance reherasal and elaborative rehearsal",
    "choices": ["M.R. is repeating something to retain it elaborative is relating new info", "the temporary storage structures of the brain", "M.R. is relating new information and elaborative is repeating something to retain it"],
    "correct":"M.R. is repeating something to retain it elaborative is relating new info"
}, {
    "question": "what is automaticity",
    "choices": ["instantly knowing the time by simply glancing at the clock", "remembering your name and street address", "Virtually everything we see, hear, or otherwise sense that is stored for a brief period of time"],
        "correct":"instantly knowing the time by simply glancing at the clock"
}, {
    "question": "what is declaritive memory",
    "choices": ["it is part of long-term memory and stores facts and information", "remembering your name and street address", "Virtually everything we see, hear, or otherwise sense that is stored for a brief period of time"],
        "correct":"it is part of long-term memory and stores facts and information"
}, {
    "question": "what is episodic memory",
    "choices": ["a type of declaritive memory that records events as they have been subjectively experienced", "remembering your name and street address", "Virtually everything we see, hear, or otherwise sense that is stored for a brief period of time"],
        "correct":"a type of declaritive memory that records events as they have been subjectively experienced"
}, {
    "question": "what is semantic memory",
    "choices": ["type of declarative memory, is memory for general knowledge, or objective facts and information", "type of declaritive memory that records events as they have been subjectively experienced", "subsystem within long-term memory that stores procedures, motor skills, habits, and simple classically conditioned responses"],
    "correct": "type of declarative memory, is memory for general knowledge, or objective facts and information"
}, {
    "question": "Which of the following is not one of the three basic memory processes?",
    "choices": ["retreival", "decoding", "storage"],
    "correct": "decoding"
}, {
    "question": "when information stored either before or after a given memory can hinder the ability to remember it",
    "choices": ["interference", "decay", "brain farts"],
    "correct": "interference"
}, {
    "question": "memories, if not used, fade with time and ultimately disappear entirely",
    "choices": ["encoding theory", "pattern loss theory", "decay theory"],
    "correct": "decay theory"
}, {
    "question": "________ is the physiological process by which encoded information is stored in memory",
    "choices": ["Consolidation", "encoding", "assimilation"],
    "correct": "Consolidation"
}, {
    "question": "While taking a test, you can’t remember the answer to a question that you are sure you know.",
    "choices": ["Retrieval failure", "studying at 2am the night before", "encoding failure"],
    "correct": "Retrieval failure"
}, {
    "question": "What brain structures are associated with memory?",
    "choices": ["hippocampus", "frontal lobe", "anterior minor"],
    "correct": "hippocampus"
}, {
    "question": "_______ amnesia is the inability to make new memories",
    "choices": ["anterograde", "retrograde", "dementia"],
    "correct": "anterograde"
}, {
    "question": "_______ amnesia is the inability to remember the past",
    "choices": ["anterograde", "retrograde", "dementia"],
    "correct": "retrograde"
}, {
    "question": "Everytime a subject does what you want they get a reward",
    "choices": ["continuous reinforcment", "negative reinforcement", "positive reinforcement"],
    "correct": "retrograde"
}];
*/
    function escapeHtmlChars(unsafe) {
        return unsafe
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    for (var i = 0; i < quiz.length; i++) {
       /* quiz[i].correct = escapeHtmlChars(quiz[i].correct);*/

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

        if (percentage < 60) {
            content.innerHTML = "<h2>Oi!  What the hell was that, mate? No tits for you! Try again!</h2>" +
            "<h2>Below are your results:</h2>" +
            "<h2>" + score + " out of " + quiz.length + " questions, " +
            Math.round(score / quiz.length * 100) + "%<h2>";
        }
        else {
            $("h1").remove();
            content.innerHTML = "<h2>Great Job!</h2>" +
            "<h2>" + score + " out of " + quiz.length + " questions, " +
            Math.round(score / quiz.length * 100) + "%!" + "<br>" + " Now, here are some tits!";
            $(".container").fadeOut(5000);
            $(".quiz").append('<p style="margin: 1000px"></p>');
            $("body").css('background-image', 'url("http://media.giphy.com/media/IjmMzurYulKEw/giphy.gif")');

        }
    }

    window.addEventListener("load", askQuestion, false);
    submitBtn.addEventListener("click", checkAnswer, false);


});
