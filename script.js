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
  const digitBtn = document.createElement("button");
  digitBtn.classList.add(`digit-btn-${i}`);
  digitBtn.textContent = [i];
  digitButtons.appendChild(digitBtn);
}
