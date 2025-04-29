// index.js - Lab 6
// Author: mestie
// Date:

//lab assignment my transportaion 

var myMainRide = { 
  make: "Toyota", 
  model: "Corolla", 
  color: "grey", 
  year: 2018, 
  age: function() {
      return 2025 - this.year;
  } 
} 
document.writeln("My Main Ride: <pre>", 
  JSON.stringify(myMainRide, null, '\t'), "</pre>"); 
