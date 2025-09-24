// Getting all of the mad lib words and initializing the submit button

var button = document.querySelector("button"); // Submit button

// Switching Function 

// Mad Lib Form Variables
var heading = document.getElementById("heading");
var firstNoun = document.getElementById("1st-noun");
var verbIng = document.getElementById("verb-ing");
var secondNoun = document.getElementById("2nd-noun");
var thirdNoun = document.getElementById("3rd-noun");
var firstAdjective = document.getElementById("1st-adjective");
var serviceJob = document.getElementById("service-job");
var firstNumber = document.getElementById("1st-number");
var firstColor = document.getElementById("1st-color");
var fourthNoun = document.getElementById("4th-noun");
var secondNumber = document.getElementById("2nd-number");


// Mad Lib Result Variables
var firstNounResult = document.getElementById("first-noun-result");


// Transition Variables

button.addEventListener("click", heyExample); // Calls the function when the button's clicked on

function heyExample() {


    
    firstNounResult.innerHTML = firstNoun.value;
    // Empty for now 
    /*
    heading.innerText = input.value;
    heading.innerText = inputSecond.value;
    heading.innerText = inputThird.value;
    */
}   



