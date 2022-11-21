// OPERATORS
const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b;
};

const divide = function (a, b) {
  return a / b;
};

const operate = function (a, operator, b) {
  return operator(a, b);
};

// CREATE BUTTONS FOR DIGITS, OPERATORS AND EQUAL
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

// const addValue = function () {
//   displayValue.textContent += digit.textContent;
// };

let displayValueFull = false;

digitBtns.forEach((digit) => {
  digit.addEventListener("click", function addValue() {
    if (displayValueFull === false) {
      displayValue.textContent += digit.textContent;
      console.log(displayValue.textContent.length);
    }
    displayValue.textContent.length > 10
      ? (displayValueFull = true)
      : (displayValueFull = false);
  });
});
