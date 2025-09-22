// Getting all of the mad lib words and initializing the submit button

var heading = document.getElementById("heading");
var input = document.getElementById("1st-noun");
var button = document.querySelector("button");
var inputSecond = document.getElementById("verb-ing");
button.addEventListener("click", heyExample);

function heyExample() {
    heading.innerText = input.value;
    heading.innerText = inputSecond.value;
}   

