// Script for filling in the mad lib blanks (ooh I love the commenting font)

// Mad Lib Form Variables
var personName = document.getElementById("person-name");
var movieName = document.getElementById("movie-name");
var firstAdjective = document.getElementById("1st-adjective");
var firstNumber = document.getElementById("1st-number");
var firstCurrency = document.getElementById("1st-currency");
var occupation = document.getElementById("occupation");
var secondNumber = document.getElementById("2nd-number");
var firstAdverb = document.getElementById("1st-adverb");
var verbIng = document.getElementById("verb-ing");
var secondAdjective = document.getElementById("2nd-adjective");
var firstNoun = document.getElementById("1st-noun");
var thirdAdjective = document.getElementById("3rd-adjective");
var secondNoun = document.getElementById("2nd-noun");
var thirdNumber = document.getElementById("3rd-number");
var unitOfTime = document.getElementById("unit-of-time");
var firstFood = document.getElementById("1st-food");
var secondFood = document.getElementById("2nd-food");
var fourthNumber = document.getElementById("4th-number");
var secondCurrency = document.getElementById("2nd-currency");
var fourthAdjective = document.getElementById("4th-adjective");

var form = document.getElementById("form-mad-lib-2"); // Form Itself

// Mad Lib Result Variables 
var nameResult = document.getElementById("name-result");
var movieNameResult = document.getElementById("movie-name-result");
var firstAdjectiveResult = document.getElementById("first-adjective-result");
var firstNumberResult= document.getElementById("first-number-result");
var firstCurrencyResult = document.getElementById("first-currency-result");
var occupationResult = document.getElementById("occupation-result");
var nameResultPartTwo = document.getElementById("name-result-2");
var secondNumberResult = document.getElementById("second-number-result");
var nameResultPartThree = document.getElementById("name-result-3");
var firstAdverbResult = document.getElementById("first-adverb-result");
var verbIngResult = document.getElementById("verb-ing-result");
var secondAdjectiveResult = document.getElementById("second-adjective-result");
var firstNounResult = document.getElementById("first-noun-result");
var thirdAdjectiveResult = document.getElementById("third-adjective-result");
var secondNounResult = document.getElementById("second-noun-result");
var thirdNumberResult = document.getElementById("third-number-result");
var unitOfTimeResult = document.getElementById("unit-of-time-result");
var nameResultPartFour = document.getElementById("name-result-4");
var firstFoodResult = document.getElementById("first-food-result");
var secondFoodResult = document.getElementById("second-food-result");
var fourthNumberResult = document.getElementById("fourth-number-result");
var secondCurrencyResult = document.getElementById("second-currency-result");
var fourthAdjectiveResult = document.getElementById("fourth-adjective-result");

// Variables for Cover and Paragraph
var cover = document.getElementById("mad-lib-result-cover");
var paragraph = document.getElementById("result-paragraph-2");

// Form Event Listener
form.addEventListener("submit", insertFormResults);

// Function for inputting the results into the result paragraph
function insertFormResults() {
    // Changing result.innerHTML to input values
    nameResult.innerHTML = personName.value;
    movieNameResult.innerHTML = movieName.value;
    firstAdjectiveResult.innerHTML = firstAdjective.value;
    firstNumberResult.innerHTML = firstNumber.value
    firstCurrencyResult.innerHTML = firstCurrency.value;
    occupationResult.innerHTML = occupation.value;
    nameResultPartTwo.innerHTML = personName.value;
    secondNumberResult.innerHTML = secondNumber.value;
    nameResultPartThree.innerHTML = personName.value;
    firstAdverbResult.innerHTML = firstAdverb.value;
    verbIngResult.innerHTML = verbIng.value;
    secondAdjectiveResult.innerHTML = secondAdjective.value;
    firstNounResult.innerHTML = firstNoun.value;
    thirdAdjectiveResult.innerHTML = thirdAdjective.value;
    secondNounResult.innerHTML = secondNoun.value;
    thirdNumberResult.innerHTML = thirdNumber.value;
    unitOfTimeResult.innerHTML = unitOfTime.value;
    nameResultPartFour.innerHTML = personName.value;
    firstFoodResult.innerHTML = firstFood.value;
    secondFoodResult.innerHTML = secondFood.value;
    fourthNumberResult.innerHTML = fourthNumber.value;
    secondCurrencyResult.innerHTML = secondCurrency.value;
    fourthAdjectiveResult.innerHTML = fourthAdjective.value;
    // Switching Layers for the Paragraph and Cover on Submit
    cover.style.position = "absolute";
    cover.style.zIndex = -1;
    paragraph.style.position = "relative";
    // Title Element Change, Forgot to Add when Coding this:
    document.querySelector("title").innerText = "Results: Mad Lib 2";

}