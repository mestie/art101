// index.js - Lab 8
// Author: mestie
// Date: 5.8.2025


function myNumbers(x){
    return (x % 2== 0); 
}
// test function 
console.log("Is 1 even? " + myNumbers(1)); 
console.log("Is 2 even? " + myNumbers(2));

array = [500, 7, 34, 50] 
console.log("My array", array); 

var result = array.map(myNumbers);
// should return [true, false, true, true] 
console.log("Test of evenness of array;", result); 

var result = array.map(function(x){
    return x ** 0.5; 
}) 
// should return [22.36, 2.65, 5.83, 7.07]
console.log("Square roots of array", result);

// your map results data
var mapResults = "Your map results here"; 
// use jQuery to select the element by it ID and set the HTML content
$("#output").html(mapResults);
