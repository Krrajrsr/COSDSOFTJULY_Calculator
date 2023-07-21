const display = document.getElementById("display");
let currentInput = "0";
let firstOperand = null;
let operator = null;
let secondOperand = null;
let shouldReset = false;

function updateDisplay() {
  display.textContent = currentInput;
}

function clear() {
  currentInput = "0";
  firstOperand = null;
  operator = null;
  secondOperand = null;
  shouldReset = false;
  updateDisplay();
}

function handleNumberClick(number) {
  if (currentInput === "0" || shouldReset) {
    currentInput = number;
    shouldReset = false;
  } else {
    currentInput += number;
  }
  updateDisplay();
}

function handleOperatorClick(op) {
  if (operator) {
    calculate();
  }
  firstOperand = parseFloat(currentInput);
  operator = op;
  shouldReset = true;
}

function calculate() {
  if (operator && firstOperand !== null && currentInput !== "") {
    secondOperand = parseFloat(currentInput);
    switch (operator) {
      case "+":
        currentInput = (firstOperand + secondOperand).toString();
        break;
      case "-":
        currentInput = (firstOperand - secondOperand).toString();
        break;
      case "*":
        currentInput = (firstOperand * secondOperand).toString();
        break;
      case "/":
        if (secondOperand === 0) {
          currentInput = "Error";
        } else {
          currentInput = (firstOperand / secondOperand).toString();
        }
        break;
      default:
        break;
    }
    firstOperand = null;
    operator = null;
    secondOperand = null;
    shouldReset = true;
    updateDisplay();
  }
}

document.getElementById("clear").addEventListener("click", clear);

document.querySelectorAll(".number").forEach((button) => {
  button.addEventListener("click", () => {
    handleNumberClick(button.textContent);
  });
});

document.querySelectorAll(".operator").forEach((button) => {
  button.addEventListener("click", () => {
    handleOperatorClick(button.textContent);
  });
});

document.getElementById("equals").addEventListener("click", () => {
  if (!operator || shouldReset) return;
  secondOperand = parseFloat(currentInput);
  calculate();
});
function handleOperatorClick(op) {
  if (operator) {
    calculate();
  }
  firstOperand = parseFloat(currentInput);
  operator = op;
  shouldReset = true;

  currentInput = operator;
  updateDisplay();
}
