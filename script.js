// OPERATORS

const add = function (arr) {
  return arr[0] + arr[1];
};

const subtract = function (arr) {
  return arr[0] - arr[1];
};

const multiply = function (arr) {
  return arr[0] * arr[1];
};

const divide = function (arr) {
  return arr[0] / arr[1];
};

// CREATE BUTTONS FOR DIGITS
const digitButtons = document.querySelector(".digit-buttons");

for (i = 0; i < 10; i++) {
  const digitButton = document.createElement("button");
  digitButton.classList.add("digit-btn");
  digitButton.textContent = [i];
  digitButtons.appendChild(digitButton);
}

// DISPLAY VALUE
const displayValue = document.querySelector(".display");
const digitBtns = document.querySelectorAll(".digit-btn");
displayValue.textContent = "";
let currentNum = "";
let currentNumFull = false;

function regDigit(e) {
  if (currentNum.length > 10) {
    currentNumFull = true;
  }
  if (!currentNumFull) {
    currentNum += e.target.textContent;
    displayValue.textContent = currentNum;
    console.log(currentNum);
  }
}
digitBtns.forEach((digitBtn) => digitBtn.addEventListener("click", regDigit));

//Calculate numbers
