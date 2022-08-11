"use strict";

let userInput = document.querySelector("#billAmt");
let numGuests = document.querySelector("#numOfGuests");
let errorMsg = document.querySelectorAll(".errorMsg");
let calcBtn = document.querySelector("#calculateTip");
let tipBtns = document.querySelectorAll(".tipBtn");
let tipTotal = document.querySelector("#totalTip");
let custTip = document.querySelector("#customTip");

// object to hold preset tip amounts
let tipAmt = {
  tenPercent: "10",
  fifteenPercent: "15",
  twentyPercent: "20",
  twentyFivePercent: "25"
};

// calculate total tip amount per guest
function calculateTotal() {

  let tip = 0;

  // Display error msg if bill amount is empty or less than or equal to 0
  if (userInput.value == "" || userInput.value <= 0) {
    errorMsg[0].classList.remove("hidden");
    errorMsg[0].innerHTML = "Please enter a value greater than zero.";
  } else {
    errorMsg[0].classList.add("hidden");
  }

  // Display error msg if tip amount is empty or less than or equal to 0
  if (custTip.value == "" || custTip.value <= 0) {
    errorMsg[1].classList.remove("hidden");
    errorMsg[1].innerHTML = "Please enter a positive value.";
  } else {
    errorMsg[1].classList.add("hidden");
  }

  // Display error msg if guest amount is empty or less than or equal to 0
  if (numGuests.value == "" || numGuests.value <= 0) {
    errorMsg[2].classList.remove("hidden");
    errorMsg[2].innerHTML = "Please enter a positive value.";
  } else {
    errorMsg[2].classList.add("hidden");
  }

  // Calculate tip
  if (custTip.value != "10" || custTip.value != "15" ||
    custTip.value != "20" || custTip.value != "25") {
    tip = ((billAmt.value * custTip.value / 100) / numGuests.value).toFixed(2);
    console.log(tip)
  } else {
    tip = (billAmt.value * custTip.value) / numGuests.value;
    tip = ((tip * 100) / 100).toFixed(2);
    console.log(tip)
  }

  // Display tip amount
  tipTotal.innerHTML = `Total tip: <strong>$${tip}</strong>`;
  tipTotal.classList.remove("hidden");
}

// Determine which tip button is clicked
function tipBtn(event) {
  let tipPercentage = tipAmt[event.currentTarget.id];
  document.querySelector("#customTip").value = tipPercentage;
}

// Event listeners
function addEventToTipBtns(tipBtns) {
  for (let btn of tipBtns) {
    btn.addEventListener("click", tipBtn);
  }
}
addEventToTipBtns(tipBtns);
calcBtn.addEventListener("click", calculateTotal);