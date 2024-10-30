let displayValue = '0';

function updateDisplay() {
  const display = document.getElementById('display');
  display.innerText = displayValue;
}

function clearDisplay() {
  displayValue = '0';
  updateDisplay();
}

function deleteDigit() {
  displayValue = displayValue.slice(0, -1) || '0';
  updateDisplay();
}

function input(value) {
  if (displayValue === '0') {
    displayValue = value;
  } else {
    displayValue += value;
  }
  updateDisplay();
}

function calculate() {
  try {
    displayValue = eval(displayValue).toString();
  } catch (error) {
    displayValue = 'Error';
  }
  updateDisplay();
}
