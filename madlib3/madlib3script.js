// Script for inserting the inputs into the mad lib blanks (.mad-lib-results)

// Mad Lib Form Input Variables
var firstNoun = document.getElementById("1st-noun");
var secondNoun = document.getElementById("2nd-noun");
var firstAdjective = document.getElementById("1st-adjective");
var secondAdjective = document.getElementById("2nd-adjective");
var thirdAdjective = document.getElementById("3rd-adjective");
var firstUnitOfTime = document.getElementById("1st-unit-of-time");
var firstNumber = document.getElementById("1st-number");
var fourthAdjective = document.getElementById("4th-adjective");
var thirdNoun = document.getElementById("3rd-noun");
var secondNumber = document.getElementById("2nd-number");
var currency = document.getElementById("currency");
var secondUnitOfTime = document.getElementById("2nd-unit-of-time");
var verb = document.getElementById("verb");
var firstAdverb = document.getElementById("1st-adverb");
var fifthAdjective = document.getElementById("5th-adjective");
var sixthAdjective = document.getElementById("6th-adjective");
var seventhAdjective = document.getElementById("7th-adjective");
var secondAdverb = document.getElementById("2nd-adverb");

// Form
var form = document.getElementById("form-mad-lib-3");

// Mad Lib Result Variables
var firstNounResult = document.getElementById("first-noun-result");
var secondNounResult = document.getElementById("second-noun-result");
var firstNounResultPartTwo = document.getElementById("first-noun-result-2");
var firstAdjectiveResult = document.getElementById("first-adjective-result");
var secondAdjectiveResult = document.getElementById("second-adjective-result");
var thirdAdjectiveResult = document.getElementById("third-adjective-result");
var firstUnitOfTimeResult = document.getElementById("first-unit-of-time-result");
var firstNumberResult = document.getElementById("first-number-result");
var firstNounResultPartThree = document.getElementById("first-noun-result-3");
var fourthAdjectiveResult = document.getElementById("fourth-adjective-result");
var thirdNounResult = document.getElementById("third-noun-result");
var secondNumberResult = document.getElementById("second-number-result");
var currencyResult = document.getElementById("currency-result");
var secondUnitOfTimeResult = document.getElementById("second-unit-of-time-result");
var firstNounResultPartFour = document.getElementById("first-noun-result-4");
var verbResult = document.getElementById("verb-result");
var firstNounResultPartFive = document.getElementById("first-noun-result-5");
var firstAdverbResult = document.getElementById("first-adverb-result");
var fifthAdjectiveResult = document.getElementById("fifth-adjective-result");
var sixthAdjectiveResult = document.getElementById("sixth-adjective-result");
var firstNounResultPartSix = document.getElementById("first-noun-result-6");
var seventhAdjectiveResult = document.getElementById("seventh-adjective-result");
var secondNounResultPartTwo = document.getElementById("second-noun-result-2");
var secondAdverbResult = document.getElementById("second-adverb-result");

// Variables for cover and paragraph
var cover = document.getElementById("mad-lib-result-cover");
var paragraph = document.getElementById("result-paragraph-3");

// Event Listener for Submitting the Form 
form.addEventListener("submit", doMadLib);
function doMadLib() {
    firstNounResult.innerHTML = firstNoun.value;
    secondNounResult.innerHTML = secondNoun.value;
    firstNounResultPartTwo.innerHTML = firstNoun.value;
    firstAdjectiveResult.innerHTML = firstAdjective.value;
    secondAdjectiveResult.innerHTML = secondAdjective.value;
    thirdAdjectiveResult.innerHTML = thirdAdjective.value;
    firstUnitOfTimeResult.innerHTML = firstUnitOfTime.value;
    firstNumberResult.innerHTML = firstNumber.value;
    firstNounResultPartThree.innerHTML = firstNoun.value;
    fourthAdjectiveResult.innerHTML = fourthAdjective.value;
    thirdNounResult.innerHTML = thirdNoun.value;
    secondNumberResult.innerHTML = secondNumber.value;
    currencyResult.innerHTML = currency.value;
    secondUnitOfTimeResult.innerHTML = secondUnitOfTime.value;
    firstNounResultPartFour.innerHTML = firstNoun.value;
    verbResult.innerHTML = verb.value;
    firstNounResultPartFive.innerHTML = firstNoun.value;
    firstAdverbResult.innerHTML = firstAdverb.value;
    fifthAdjectiveResult.innerHTML = fifthAdjective.value;
    sixthAdjectiveResult.innerHTML = sixthAdjective.value;
    firstNounResultPartSix.innerHTML = firstNoun.value;
    seventhAdjectiveResult.innerHTML = seventhAdjective.value;
    secondNounResultPartTwo.innerHTML = secondNoun.value;
    secondAdverbResult.innerHTML = secondAdverb.value;

    // Switching Cover and Paragraph Layers
    cover.style.position = "absolute";
    cover.style.zIndex = -1;
    paragraph.style.position = "relative";
    // Title Changing
    document.querySelector("title").innerText = "Results: Mad Lib 3";
}