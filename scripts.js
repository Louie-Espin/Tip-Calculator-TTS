"use strict";

/*
//Initialize values to 0
let billAmt = 0;
let tipAmt = 0;
let numOfGuests = 0;
let tenPercent = 10;
let twentyPercent = 20;
let twentyFivePercent = 25;
let fifteenPercent = 15;

//Main function here
function justTheTipCalculator() {
  let billAmt = document.querySelector('#billAmt').value;
  let tipAmount = document.querySelector('#tipamount').value;
  let numOfGuests = document.querySelector('#numOfGuests').value;
*/

//error handling
//if any text fields = empty, prompt error message
//if (tipAmt === "" || billAmt === "") {
//$(".errorMsg hidden").text("Please input values for Bill and select a tip amount").fadeIn();
//}

//implement numofGuests 
//if numOfGuest === "" || numOfGuests < 1) {
//$(".errorMsg hidden").text("Please enter positive number for number of peeps").fadeIn();
//} else {
//document.querySelector('#numOfGuests').value;
//}

//implement calculation of tip from (bill amt * tipamt selected) / numofGuests
//let totalTipAmount = (billAmt * tipamt selected) / numOfGuests;

//convert total to dollar decimal amount
//totalTipAmount = Math.round(totalTipAmount * 100) / 100;
//totalTipAmount = totalTipAmont.tofixed(2);




//}



let calcButton = document.getElementById("calculateTip");

calcButton.onclick = function () {
    alert("Just the tip!")
}
