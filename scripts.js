"use strict";

//Initialize values to 0
let userInput = document.querySelector("#billAmt");
let numGuests = document.querySelector("#numOfGuests");
let errorMsg = document.querySelectorAll(".errorMsg");
let calcBtn = document.querySelector("#calculateTip");
let tipTotal = document.querySelector("#totalTip");
let custTip = document.querySelector("#customTip");

let tipAmt = {
  tenPercent: .10,
  twentyPercent: .20,
  twentyFivePercent: .25,
  fifteenPercent: .15
};


function calculateTotal(tipPercentage) {

  // let numericUserInput = Number(userInput);
  // let numericCustTip = Number(custTip);
  let tip = 0;

  if (userInput.value === "" || userInput.value < 0) { //isNaN(!numericUserInput)
    errorMsg[0].classList.remove("hidden");
    errorMsg[0].innerHTML = "Please enter a positive value.";
  } else {
    errorMsg[0].classList.add("hidden");
  }

  if (numGuests.value <= 0) {
    errorMsg[1].classList.remove("hidden");
    errorMsg[1].innerHTML = "Please enter a positive value.";
  } else {
    errorMsg[1].classList.add("hidden");
  }

  if (custTip.value != "") {
    custTip.classList.remove("hidden");

    if (custTip.value < 0) {
      errorMsg[2].innerHTML = "Please enter a positive value.";
    } else {
      errorMsg[2].classList.add("hidden");
    }
  }

  switch (tipPercentage) {
    case tenPercent:
      tip = .10;
      break;
    case fifteenPercent:
      tip = .15;
      break;
    case twentyPercent:
      tip = .20;
      break;
    case twentyFivePercent:
      tip = .25;
      break;
    case otherTipAmt:
      tip = custTip.value;
      break;
  }

  console.log(tip);
  tip = (billAmt * tip) / numGuests;
  tipTotal.innerHTML = "Total tip: " + tip;
  tipTotal.classList.remove("hidden");
}

function tipBtn(event) {
  let tipPercentage = tipAmt[event.currentTarget.id];
  console.log(userInput.value);
  calculateTotal(tipPercentage);
}

calcBtn.addEventListener("click", calculateTotal);