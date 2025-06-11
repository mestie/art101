// index.js - Lab 12 debugging
// Author: mestie
// Date: 7.10.2025

// Date: May 2025

// Function to determine the nation based on the length of the name
function sortNation(num) {
    let remainder = num % 4; // Get the remainder when dividing the name length by 4
    let str = "";
  
    // Determine the nation based on the remainder
    if (remainder == 0) {
      str = "Fire kingdowm!";
    } else if (remainder == 1) {
      str = "Earth dwelers!"; 
    } else if (remainder == 2) {
      str = "Water nomaids!";
    } else if (remainder == 3) {
      str = "Air tribe!";
    }
  
    return str; // Return the determined nation
  }
  
  // Click handler for the button
  $("#button").click(function () {
    let name = $("#input").val(); // Get the value entered in the input field
  
    // Check if the user entered a name
    if (name) {
      console.log("there is data");
    } else {
      // Show message if input is empty
      $("#output").append("Don't forget to enter a name.");
      return; // Stop further execution if input is missing
    }
  
    let nameLength = name.length; // Get the length of the input name
    let nation = sortNation(nameLength); // Call function to get the nation based on length
    $("#output").html("<h1>" + nation + "</h1>"); // Display result on the page
  });
