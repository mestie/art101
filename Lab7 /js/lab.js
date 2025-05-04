// index.js - Lab 7
// Author: mestie
// Date:5.4.2025
//ger user input 
function myVariable () {
    var userName = window.prompt("Who are you?");
    console.log("userName =", userName);
    return userName.toLowerCase().split("").sort().join("");
} 
// ouutpuut 
document.writelm("Who are you, ", myVariable (), "<br>", "Nice to meet you!");