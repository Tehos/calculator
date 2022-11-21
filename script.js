// OPERATORS

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
