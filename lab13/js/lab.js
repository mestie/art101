// index.js - Lab 8
// Author: mestie
// Date: 7.10.2025
maxFactors = 4;

outputEl = document.getElementById("output");

// get the values from the webpage and write them in an object

function getFactorObj() {
    var factorObj = {};
    for (var factor=0; factor<maxFactors; factor++) {
        numId = "num" + factor;
        textId = "text" + factor;
        numValue = document.getElementById(numId).value;
        textValue = document.getElementById(textId).value;
        console.log(factor + ") num:", numValue, "text:", textValue)
        // if either value is blank, don't use it
        if (numValue && textValue) {
            factorObj[numValue] = textValue;
        }
    }
    return factorObj;
}

function outputToPage(str) {
    newEl = document.createElement("p");
    newEl.innerHTML = str;
    outputEl.appendChild(newEl);
}

// loops over the numbers and outputs the number and the matching text
function fizzBuzzBoom(maxNums, factorObj) {

    for (var num=0; num<maxNums; num++) {
        debugger;
        
        var outputStr = "";
       
        for (var factor in factorObj) {
            // check to see if this num is a multiple of factor
            if (num % factor == 0) {
                // if yes, than add the text to output string
                outputStr += factorObj[factor];
            }
        }
        
        if (outputStr) {
            outputStr = " - " + outputStr + "!";
        }
        outputToPage(num.toString() + outputStr)
    }
}

function reportError(str) {
    outputEl.innerHTML = "<div class='error'>" + str + "</div>";
}

document.getElementById("submit").addEventListener("click", function() {
    var max = document.getElementById("max").value;
    console.log("max:", max)
    if (! max) {
        reportError("You must provide a maximum");
        return;
    }
    var factorObj = getFactorObj();
    console.log("factorObj:", factorObj);
    if (Object.keys(factorObj).length === 0) {
        reportError("You must provide at least one factor and text");
        return;
    }
    // clear error if there is one
    outputEl.innerHTML = "";
    fizzBuzzBoom(max, factorObj);
    outputEl.classList.add("cols");
})

