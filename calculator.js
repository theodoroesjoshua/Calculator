function add(num1, num2) {
  console.log(num1);
  console.log(num2);
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
  const firstNum = parseInt(num1, 10);
  const secondNum = parseInt(num2, 10);
  if (operator === '+') {
    return add(firstNum, secondNum);
  }
  if (operator === '-') {
    return substract(firstNum, secondNum);
  }
  if (operator === '*') {
    return multiply(firstNum, secondNum);
  }
  if (operator === '/') {
    return divide(firstNum, secondNum);
  }
  return 0;
}

let num1 = '';
let num2 = '';
let operatorStr = '';
let firstInput = true;
const screenText = document.querySelector('.screenText');
screenText.textContent = '0';
const MAXLENGTH = 9;

function putToScreen(str) {
  if (str.length < MAXLENGTH) {
    str = str.slice(0, MAXLENGTH);
  }
  screenText.textContent = str;
}

function equals() {
  if (firstInput) {
    return;
  }
  num1 = operate(operatorStr, num1, num2).toString();
  putToScreen(num1);
  num1 = '';
  num2 = '';
  firstInput = true;
  operatorStr = '';
}

const inputs = document.querySelectorAll('.number');
inputs.forEach((input) => {
  input.addEventListener('click', () => {
    if (firstInput) {
      num1 += input.textContent;
      putToScreen(num1);
    } else {
      num2 += input.textContent;
      putToScreen(num2);
    }
  });
});

const operators = document.querySelectorAll('.operator');
operators.forEach((operator) => {
  operator.addEventListener('click', () => {
    switch (operator.textContent) {
      case '+':
      case '-':
      case 'x':
      case '/':
        if (firstInput) {
          firstInput = false;
          operatorStr = operator.textContent;
          putToScreen('0');
        } else {
          num1 = operate(operatorStr, num1, num2).toString();
          num2 = '';
          putToScreen(num1);
          operatorStr = operator.textContent;
        }
        break;
      case '=':
        equals();
        break;
      default:
        break;
    }
  });
});

const specials = document.querySelectorAll('.special');
specials.forEach((specialOperator) => {
  specialOperator.addEventListener('click', () => {
    if (specialOperator.textContent === 'clr') {
      num1 = '';
      num2 = '';
      firstInput = true;
      operatorStr = '';
      screenText.textContent = '0';
      putToScreen('0');
    } else if (firstInput) {
      num1 = num1.slice(0, num1.length - 1);
      putToScreen(num1);
    } else {
      num2 = num2.slice(0, num2.length - 1);
      putToScreen(num2);
    }
  });
});
