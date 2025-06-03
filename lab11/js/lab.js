// index.js - Lab 11
// Author: mestie
// Date: 7.1.2025


// Sorts the characters of a string in alphabetical order. 
function sortString(inputString) {
    // Convert our string to an array and back again to sor it 
    return inputString.split('').sort().join('');
}
// Click listener for button 
$("#submit").click(function() {

// Get the input field
const userName = $("#user-name").val();
console.log("you entered: " + userName);

// now lets sor it 
userNameSorted = sortString(userName); 

// append a new div to our output div 
$("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
});