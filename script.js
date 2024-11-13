function add(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}

let num1 = "";
let num2 = "";
let operator = "";

function operate(operator, num1, num2) {
  return operator(num1, num2);
}

const numbers = document.querySelector(".numbers");
const buttons = document.querySelectorAll("button");
const calDisplay = document.querySelector(".display");

buttons.forEach((button) => {
  if (/\d/.test(button.textContent)) {
    button.addEventListener("click", () => {
      calDisplay.textContent += button.textContent;
      num1 = calDisplay.textContent;
      console.log(num1);
    });

    console.log(button);
  }
});
