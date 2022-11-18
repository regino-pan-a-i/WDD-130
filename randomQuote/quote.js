import renderQuote from "./randomQuote.mjs";
renderQuote("#quoteContainer");

// add button to the html
// add a listener to the button: click
// when clicked get a new quote, render the new quote 



document.querySelector('#button').addEventListener(
    'click', function(event){
        renderQuote("#quoteContainer")
    });
