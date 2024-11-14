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
let isNum2 = false;

function operate(operator, num1, num2) {
  return operator(num1, num2);
}

const numbers = document.querySelector(".numbers");
const buttons = document.querySelectorAll("button");
const calDisplay = document.querySelector(".display");

buttons.forEach((button) => {
  const operators = ["÷", "×", "-", "+"];

  //numButtons
  if (/\d/.test(button.textContent)) {
    button.addEventListener("click", () => {
      if (isNum2) {
        calDisplay.textContent += button.textContent;
        num2 = calDisplay.textContent;
      } else {
        calDisplay.textContent += button.textContent;
        num1 = calDisplay.textContent;
      }
    });
  } else if (operators.includes(button.textContent)) {
    //operators
    if (button.textContent === "+") {
      button.addEventListener("click", () => {
        console.log(num1);

        operator = button.textContent;
        console.log(operator);
        console.log(num2);

        calDisplay.textContent = "";
        isNum2 = true;
      });
    }
  }
});
