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
let isComplete = false;
let isNewNumber = false;

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
      if (isComplete) {
        calDisplay.textContent = "";
        isComplete = false;
      }
      if (isNewNumber) {
        calDisplay.textContent = "";
        isNewNumber = false;
      }

      if (isNum2) {
        calDisplay.textContent += button.textContent;
        num2 = calDisplay.textContent;
        num2 = parseInt(num2);
      } else {
        calDisplay.textContent += button.textContent;
      }
    });
  }
  //operators
  else if (operators.includes(button.textContent)) {
    switch (button.textContent) {
      case "+":
        button.addEventListener("click", () => {
          if (num2 == "" || num2 == null) {
            num1 = calDisplay.textContent;
            num1 = parseInt(num1);
            operator = add;
            isNum2 = true;
            isNewNumber = true;
          } else {
            let answer = operate(operator, num1, num2);
            calDisplay.textContent = answer;
            num1 = answer;
            num2 = "";
            isComplete = true;
            operator = add;
          }
        });
        break;
    }
  }
  // = button
  else if (button.textContent === "=") {
    button.addEventListener("click", () => {
      let answer = operate(operator, num1, num2);
      calDisplay.textContent = answer;
      num1 = "";
      num2 = "";
      operator = "";
      isNum2 = false;
      isComplete = true;
    });
  }
});
