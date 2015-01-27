/* What is everything doing?
  $ sign to define/access jQuery
  (selector) to "query (or find)" HTML elements
  jQuery action() to be performed on the element(s)
  function (){ ..code goes here..} is what we are telling it to do using methods

 Examples
 $(this).hide() - hides the current element.
 $("p").hide() - hides all <p> elements.
 $(".test").hide() - hides all elements with class="test".
 $("#test").hide() - hides the element with id="test".
 */

/* This function selects the document object uses the .ready event
and uses the alert method to display a window that says 'hello world'
when the page is loaded.
 */
$(document).ready(function(){
    alert("hello world");
});

/* Common JQuery Functions */
/* 1. Selectors */
/* When a button is clicked it will hide p elements */
$(document).ready(function(){
    $("#one").click(function(){
        $("p").hide();
    });
});
/* 2 Events http://www.w3schools.com/jquery/jquery_ref_events.asp */
/* hides current element (this) on click event */
$(document).ready(function(){
    $("h5").click(function(){
        $(this).hide();
    });
});
/* 3 Effects http://www.w3schools.com/jquery/jquery_ref_effects.asp*/
$(document).ready(function(){
    $("h4").click(function(){
        $("#div1").fadeIn();
        $("#div2").fadeIn("slow");
        $("#div3").fadeIn(3000);
    });
});

/*
Examples of selectors: Notice the similarities to css here?
 $("*")	Selects all elements
 $(this)	Selects the current HTML element
 $("p.intro")	Selects all <p> elements with class="intro"	Try it
 $("p:first")	Selects the first <p> element	Try it
 $("ul li:first")	Selects the first <li> element of the first <ul>
 $("ul li:first-child")	Selects the first <li> element of every <ul>
 $("[href]")	Selects all elements with an href attribute
 $("a[target='_blank']")	Selects all <a> elements with a target attribute value equal to "_blank"
 $("a[target!='_blank']")	Selects all <a> elements with a target attribute value NOT equal to "_blank"
 $(":button")	Selects all <button> elements and <input> elements of type="button"
 $("tr:even")	Selects all even <tr> elements
 $("tr:odd")	Selects all odd <tr> elements
 */