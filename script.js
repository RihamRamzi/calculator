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
//Highlight button
function highlightBtn(button) {
  if (currentHighlightedBtn) {
    currentHighlightedBtn.classList.remove("highlighted");
  }

  button.classList.add("highlighted");
  currentHighlightedBtn = button;
}
function removeHighlightedBtn() {
  if (currentHighlightedBtn) {
    currentHighlightedBtn.classList.remove("highlighted");
  }
}

let num1 = "";
let num2 = "";
let operator = "";
let isNum2 = false;
let isComplete = false;
let currentHighlightedBtn = null;

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
          highlightBtn(button);

          if (num1 === "" || num1 === null) {
            num1 = parseFloat(calDisplay.textContent) || 0;
          } else if (num2 !== "" || num2 !== 0) {
            let answer = operate(operator, num1, num2);
            calDisplay.textContent = answer;
            num1 = parseFloat(answer);
            num2 = "";
            operator = add;
          }

          operator = add;
          isNum2 = true;
          isComplete = true;
        });
        break;

      case "-":
        button.addEventListener("click", () => {
          highlightBtn(button);

          if (num1 === "" || num1 === null) {
            num1 = parseFloat(calDisplay.textContent) || 0;
          } else if (num2 !== "" || num2 !== 0) {
            let answer = operate(operator, num1, num2);
            calDisplay.textContent = answer;
            num1 = parseFloat(answer);
            num2 = "";
            operator = subtract;
          }

          operator = subtract;
          isNum2 = true;
          isComplete = true;
        });
        break;

      case "×":
        button.addEventListener("click", () => {
          highlightBtn(button);

          if (num1 === "" || num1 === null) {
            num1 = parseFloat(calDisplay.textContent) || 0;
          } else if (num2 !== "" || num2 !== 0) {
            let answer = operate(operator, num1, num2);
            calDisplay.textContent = answer;
            num1 = parseFloat(answer);
            num2 = "";
            operator = multiply;
          }

          operator = multiply;
          isNum2 = true;
          isComplete = true;
        });
        break;

      case "÷":
        button.addEventListener("click", () => {
          highlightBtn(button);

          if (num1 === "" || num1 === null) {
            num1 = parseFloat(calDisplay.textContent) || 0;
            operator = divide;
            isNum2 = true;
            isComplete = true;
          } else if (num2 === 0) {
            calDisplay.textContent = `IdioT`;
            num1 = "";
            num2 = "";
            isComplete = true;
            isNum2 = false;
          } else if (num2 !== "" || num2 !== 0) {
            let answer = operate(operator, num1, num2);
            calDisplay.textContent = answer;
            num1 = parseFloat(answer);
            num2 = "";
            operator = divide;
          }
        });
        break;
    }
  }
  // = button
  else if (button.textContent === "=") {
    button.addEventListener("click", () => {
      removeHighlightedBtn();

      if (num1 === "" || num2 === "") {
        console.log(`Error`);
      } else if (operator === divide && num2 === 0) {
        calDisplay.textContent = `IdioT`;
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
      removeHighlightedBtn();
      calDisplay.textContent = "";
      num1 = "";
      num2 = "";
      operator = "";
      isNum2 = false;
    });
  } else if (button.textContent === "DEL") {
    button.addEventListener("click", () => {
      let number = calDisplay.textContent;
      let newNum = number.slice(0, -1);
      calDisplay.textContent = newNum;
      console.log(newNum);
    });
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
