// index.js - Lab 10
// Author: mestie
// Date: 6.30.2025

function generateRandomText() {
    const text = "ሰላም የሆነ ነገር ተናገር";
    const min = 3; 
    const max = 100; 
    const randlen = Math.floor(Math.random() * (max - min + 1)) + min;
    // get a random start index to slice the ሰላም የሆነ ነገር ተናገር
    const randStart = Math.floor(Math.random() * (text.length - randlen + 1));
    // generate the random ሰላም የሆነ ነገር ተናገር like text 
    return text.slice(randStart, randStart + randlen);
}
 
// click listener for button 
$("#start-convo").click(function(){
});

// click listener for button 
$("#start-convo").click(function() {
    // get the random text 
    const mewText = generateRandomText();

// append a new div to our ouput div
$("#output").append('<div class="text"><p>' + mewText + '</p></div>');
});