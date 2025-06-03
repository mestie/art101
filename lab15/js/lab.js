// index.js - Lab 8
// Author: mestie
// Date: 7.3.2025

// Set up AJAX request details 
const ajazObj = {
    url: "https://yesno.wtf/api",
    type: "GET",
    dataType: "json",
}

// When button is clicked 
$("#activate").click(function() {
    console.log("click");
    // Make the AJAX request
    $.ajax(ajazObj)
    
    // if successful 
    .done(function(data){
        console.log("Success");
        console.log(data);
        $("#output").text(data.ansewer);
        $("#image").attr("src", data.image).css("display", "block");
    })

    // if error
    .fail(function(xhr, status, errorThrown) {
        console.log(errorThrhown + " Status: " + status);
    }); 
})
