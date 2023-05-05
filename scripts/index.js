"use strict";

// declair all of our form controls as variables, any html elements that we may need to interact with.

const numberOfScoops = document.getElementById("numberOfScoops");//number of  scoops

const coneChoice = document.getElementById("coneChoice"); //Cone Radio choice

const cupChoice = document.getElementById("cupChoice"); //Cup Radio choice

//Toppings Checkboxes
const toppingSprinkles = document.getElementById("toppingSprinkles");
const toppingHotfudge  = document.getElementById("toppingHotfudge");
const toppingWhipped   = document.getElementById("toppingWhipped");
const toppingCherry    = document.getElementById("toppingCherry");


// Spans that will hold the output.
const basePrice = document.getElementById("base-price"); 
const toppingsAmount = document.getElementById("toppings-amount");
const totalAmount = document.getElementById("total-amount");

const button = document.getElementById("button");




window.onload = function(){
    console.log("Window loaded")
    // wire up the button
    button.onclick = onButtonClick;

    // wire up the radio boxes

    cupChoice.onchange = toggleToppingDisplay;
    coneChoice.onchange = toggleToppingDisplay;
}


//this will be for when the button is clicked.
function onButtonClick(){
 console.log ("onbuttonclick")
    // caltulate the base price 

    
    //calculate the toppings price


    // calculate the total

  

}




function toggleToppingDisplay(){
    console.log ("toggletoppingdisplay");
    //figure out if the toppings should or should not be displayed.

    //identify if Cup is selected, and show the toppings if it is.

    //identify if Cone is selected, and hide the toppings if it is.

}
