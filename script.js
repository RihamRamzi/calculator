function add(num1, num2) {
  let answer = num1 + num2;
  let decimal = getDecimalPlaces(answer);

  return checkDecimal(answer, decimal);
}
function subtract(num1, num2) {
  let answer = num1 - num2;
  let decimal = getDecimalPlaces(answer);

  return checkDecimal(answer, decimal);
}
function multiply(num1, num2) {
  let answer = num1 * num2;
  let decimal = getDecimalPlaces(answer);

  return checkDecimal(answer, decimal);
}
function divide(num1, num2) {
  let answer = num1 / num2;
  let decimal = getDecimalPlaces(answer);

  return checkDecimal(answer, decimal);
}
//functions to get decimal value and check it
function getDecimalPlaces(num) {
  return num.toString().split(".")[1]?.length || 0;
}
function checkDecimal(answer, decimal) {
  if (decimal > 8) {
    return answer.toFixed(8);
  } else {
    return answer;
  }
}

let number = add(1, 2.333467221234111);
console.log(number);
let decimal = getDecimalPlaces(number);
console.log(decimal);
console.log(checkDecimal(number, decimal));

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
        num2 = parseFloat(num2);
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
            num1 = parseFloat(num1);
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

      case "-":
        button.addEventListener("click", () => {
          if (num2 == "" || num2 == null) {
            num1 = calDisplay.textContent;
            num1 = parseFloat(num1);
            operator = subtract;
            isNum2 = true;
            isNewNumber = true;
          } else {
            let answer = operate(operator, num1, num2);
            calDisplay.textContent = answer;
            num1 = answer;
            num2 = "";
            isComplete = true;
            operator = subtract;
          }
        });
        break;

      case "×":
        button.addEventListener("click", () => {
          if (num2 == "" || num2 == null) {
            num1 = calDisplay.textContent;
            num1 = parseFloat(num1);
            operator = multiply;
            isNum2 = true;
            isNewNumber = true;
          } else {
            let answer = operate(operator, num1, num2);
            calDisplay.textContent = answer;
            num1 = answer;
            num2 = "";
            isComplete = true;
            operator = multiply;
          }
        });
        break;

      case "÷":
        button.addEventListener("click", () => {
          if (num2 === 0) {
            calDisplay.textContent = `IDioT`;
            num1 = "";
            num2 = "";
            operator = "";
            isComplete = true;
            isNum2 = false;
          }
          if (num2 == "" || num2 == null) {
            num1 = calDisplay.textContent;
            num1 = parseFloat(num1);
            operator = divide;
            isNum2 = true;
            isNewNumber = true;
          } else {
            let answer = operate(operator, num1, num2);
            calDisplay.textContent = answer;
            num1 = answer;
            num2 = "";
            isComplete = true;
            operator = divide;
          }
        });
        break;
    }
  }
  // = button
  else if (button.textContent === "=") {
    button.addEventListener("click", () => {
      if (operator === divide && num2 === 0) {
        calDisplay.textContent = `IDioT`;
        num1 = "";
        num2 = "";
        operator = "";
        isComplete = true;
        isNum2 = false;
      } else {
        let answer = operate(operator, num1, num2);
        calDisplay.textContent = answer;
        num1 = "";
        num2 = "";
        operator = "";
        isNum2 = false;
        isComplete = true;
      }
    });
    // AC Button
  } else if (button.textContent === "AC") {
    button.addEventListener("click", () => {
      calDisplay.textContent = "";
      num1 = "";
      num2 = "";
      operator = "";
      isNum2 = false;
    });
  } else if (button.textContent === "DEL") {
    button.addEventListener("click", () => {});
  } // . button
  else {
    button.addEventListener("click", () => {
      if (calDisplay.textContent.includes(".")) {
        button.disabled;
      } else {
        calDisplay.textContent += button.textContent;
      }
    });
  }
});
