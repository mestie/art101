/*
lab.js - This simple Javascript/jQuery script uses buttons to modify some elements on the page 
requirments: jQuery must be loaded for this script to work. 
Author: Mestie 
Date: 6/21/25

*/
//add button to each section 
$("#challenge").append("<button id='challengeButton'>Challenge</button>");
//add a click listener to the challenge button 
$("#challengeButton").click(function() {
    $(this).parent().toggleClass("special");
});
