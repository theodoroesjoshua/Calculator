function add(num1, num2) {
  return num1 + num2;
}

function substract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(operator, num1, num2) {
  if (operator === '+') {
    return add(num1, num2);
  }
  if (operator === '-') {
    return substract(num1, num2);
  }
  if (operator === '*') {
    return multiply(num1, num2);
  }
  if (operator === '/') {
    return divide(num1, num2);
  }
}

const screenText = document.querySelector('.screenText');
screenText.textContent = '0';
const MAXLENGTH = 9;

function addToScreen(str) {
  if (screenText.textContent.length < MAXLENGTH) {
    if (screenText.textContent === '0') {
      screenText.textContent = str;
    } else {
      screenText.textContent += str;
    }
  }
}

function putToScreen(str) {
  if (str.length < MAXLENGTH) {
    screenText.textContent = str.slice(0, MAXLENGTH);
  }
}

const inputs = document.querySelectorAll('.number');
inputs.forEach((input) => {
  input.addEventListener('click', () => {
    addToScreen(input.textContent);
  });
});
