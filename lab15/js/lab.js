// index.js - Lab 15
// Author: mestie thomas
// Date: June 2025

// Set up AJAX request details
const ajaxObj = {
  url: "https://yesno.wtf/api", 
  type: "GET",                  
  dataType: "json"             
}

// When button is clicked
$("#activate").click(function() {
  console.log("click");

  // Make AJAX request
  $.ajax(ajaxObj)

  // If successful
  .done(function(data){
    console.log("success");
    console.log(data);
    $("#output").text(data.answer); 
    $("#image").attr("src", data.image).css("display", "block"); 
  })

  // If failed
  .fail(function(xhr, status, errorThrown){
    console.log(errorThrown + " Status:" + status); 
  });
})

