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

for (i = 9; i >= 0; i--) {
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
let numbers = [];
let answer = 0;
let operatorPressed = false;

function regDigit(e) {
  if (currentNum === 0) {
    clearAll();
  }
  if (operatorPressed) {
    currentNum = "";
    operatorPressed = false;
  }
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

//CALCULATE NUMBERS

const operatorBtns = document.querySelectorAll(".operator-btn");
let operatorSymbol = "";

const setOperator = function (e) {
  numbers.push(Number(currentNum)); // register first number
  operatorSymbol = e.target.textContent; // register operator
  operatorPressed = true;
  console.log(numbers, operatorSymbol);
};

operatorBtns.forEach((operatorBtn) =>
  operatorBtn.addEventListener("click", setOperator)
);

const equalsBtn = document.querySelector(".equals-button");

const operate = function () {
  numbers.push(Number(currentNum));
  switch (operatorSymbol) {
    case "+":
      answer = Math.round(add(numbers) * 10000) / 10000;
      break;
    case "-":
      answer = Math.round(subtract(numbers) * 10000) / 10000;
      break;
    case "*":
      answer = Math.round(multiply(numbers) * 10000) / 10000;
      break;
    case "/":
      if (numbers[1] === 0) {
        displayValue.textContent = "Nope";
        return setTimeout(clearAll, 2000);
      }
      answer = Math.round(divide(numbers) * 10000) / 10000;
      break;
  }
  currentNum = answer;
  displayValue.textContent = currentNum;
  answer = 0;
  numbers = [];
  console.log(answer);
};

equalsBtn.addEventListener("click", operate);

// CLEAR BUTTON

const clearAll = function () {
  currentNum = "";
  displayValue.textContent = 0;
  numbers = [];
  answer = 0;
  console.log(currentNum, displayValue.textContent, answer, numbers);
};

const clearBtn = document.querySelector(".clear-button");

clearBtn.addEventListener("click", clearAll);
