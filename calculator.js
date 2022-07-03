let num1 = '';
let num2 = '';
let operatorStr = '';
let firstInput = true;
const screenText = document.querySelector('.screenText');
screenText.textContent = '0';
const MAXLENGTH = 9;

function add(numb1, numb2) {
  return numb1 + numb2;
}

function substract(numb1, numb2) {
  return numb1 - numb2;
}

function multiply(numb1, numb2) {
  return numb1 * numb2;
}

function divide(numb1, numb2) {
  if (numb2 === 0) {
    return 'error';
  }
  return num1 / num2;
}

function operate(operator, numb1, numb2) {
  const firstNum = parseFloat(numb1, 10);
  const secondNum = parseFloat(numb2, 10);
  if (operator === '+') {
    return add(firstNum, secondNum);
  }
  if (operator === '-') {
    return substract(firstNum, secondNum);
  }
  if (operator === 'x') {
    return multiply(firstNum, secondNum);
  }
  if (operator === '÷') {
    return divide(firstNum, secondNum);
  }
  return 0;
}

function putToScreen(str) {
  if (str.length >= MAXLENGTH) {
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

let decimal = false;
const inputs = document.querySelectorAll('.number');
inputs.forEach((input) => {
  input.addEventListener('click', () => {
    // Check if decimal is already there
    if (decimal && input.textContent === '.') return;
    if (!decimal && input.textContent === '.') {
      decimal = true;
    }
    // handle if the first input in num1 or num2 is a decimal
    if (firstInput) {
      if (num1 === '0' && input.textContent !== '.') {
        num1 = input.textContent;
      } else {
        num1 += input.textContent;
      }
      putToScreen(num1);
    } else {
      if (num2 === '0' && input.textContent !== '.') {
        num2 = input.textContent;
      } else {
        num2 += input.textContent;
      }
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
      case '÷':
        decimal = false;
        if (firstInput) {
          firstInput = false;
          operatorStr = operator.textContent;
          putToScreen('0');
        } else if (num2 !== '') {
          num1 = operate(operatorStr, num1, num2).toString();
          if (num1 === 'error') {
            num1 = '';
            firstInput = true;
            operatorStr = '';
          }
          num2 = '';
          putToScreen(num1);
          operatorStr = operator.textContent;
        }
        break;
      case '=':
        decimal = false;
        if (num2 !== '') equals();
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
    } else if (firstInput) { // else if del is clicked
      if (num1 !== '') {
        if (num1.length === 1) {
          num1 = '';
          putToScreen('0');
        } else {
          if (num1.charAt(num1.length - 1) === '.') decimal = false;
          num1 = num1.slice(0, num1.length - 1);
          putToScreen(num1);
        }
      }
    } else if (num2 !== '') {
      if (num2.length === 1) {
        num2 = '';
        putToScreen('0');
      } else {
        if (num2.charAt(num2.length - 1) === '.') decimal = false;
        num2 = num2.slice(0, num1.length - 1);
        putToScreen(num2);
      }
    }
  });
});
