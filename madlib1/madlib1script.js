// Getting all of the mad lib words

// Mad Lib Form Variables
var heading = document.getElementById("heading"); // Was for a test (will delete later)
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

var form = document.getElementById("form");
// Mad Lib Result Variables
var firstNounResult = document.getElementById("first-noun-result");
var verbIngResult = document.getElementById("verb-ing-result");
var secondNounResult = document.getElementById("second-noun-result");
var thirdNounResult = document.getElementById("third-noun-result");
var firstNounResultPartTwo = document.getElementById("first-noun-result-2");
var secondNounResultPartTwo = document.getElementById("second-noun-result-2");
var thirdNounResultPartTwo = document.getElementById("third-noun-result-2");
var firstAdjectiveResult = document.getElementById("first-adjective-result");
var firstNounResultPartThree = document.getElementById("first-noun-result-3");
var serviceJobResult = document.getElementById("service-job-result");
var thirdNounResultPartThree = document.getElementById("third-noun-result-3");
var serviceJobResultPartTwo = document.getElementById("service-job-result-2");
var firstNounResultPartFour = document.getElementById("first-noun-result-4");
var thirdNounResultPartFour = document.getElementById("third-noun-result-4");
var firstNumberResult = document.getElementById("first-number-result");


// Variables for the cover and the paragraph 
var cover = document.getElementById("mad-lib-result-cover");
var paragraph = document.getElementById("mad-lib-result-paragraph");

form.addEventListener("submit", heyExample);

function heyExample() {
    firstNounResult.innerHTML = firstNoun.value;
    verbIngResult.innerHTML = verbIng.value;
    secondNounResult.innerHTML = secondNoun.value;
    thirdNounResult.innerHTML = thirdNoun.value;
    firstNounResultPartTwo.innerHTML = firstNoun.value;
    secondNounResultPartTwo.innerHTML = secondNoun.value;
    thirdNounResultPartTwo.innerHTML = thirdNoun.value;
    firstAdjectiveResult.innerHTML = firstAdjective.value;
    firstNounResultPartThree.innerHTML = firstNoun.value;
    serviceJobResult.innerHTML = serviceJob.value;
    thirdNounResultPartThree.innerHTML = thirdNoun.value;
    serviceJobResultPartTwo.innerHTML = serviceJob.value;
    firstNounResultPartFour.innerHTML = firstNoun.value;
    thirdNounResultPartFour.innerHTML = thirdNoun.value;
    firstNumberResult.innerHTML = firstNumber.value;


    document.querySelector("title").innerText = "Results: Mad Lib 1";
    // Switching around the layers (whew)
    cover.style.position = "absolute"; 
    cover.style.zIndex = -1;
    paragraph.style.position = "relative";
}   



