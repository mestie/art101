// index.js - Lab 10
// Author: mestie
// Date: 6.28.2025

function generateRandomText() {
    const text = "wjuhgtis jsi8utj3-newe";
    const min = 3; 
    const max = 100; 
    const randlen = Math.floor(Math.random() * (max - min + 1)) + min;
    // get a random start index to slice the wjuhgtis jsi8utj3-newe text 
    const randStart = Math.floor(Math.random() * (text.length - randlen + 1));
    // generate the random wjuhgtis jsi8utj3-newe like text 
    return text.slice(randStart, randStart + randlen);
}
 
// click listener for button 
$("#make-convo").click(function(){
})

// click 