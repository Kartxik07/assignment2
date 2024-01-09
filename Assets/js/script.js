let displayValue = '';

function handleButtonClick(event) {
  const buttonValue = event.target.dataset.value;

  if (buttonValue === '=') {
    calculate();
  } else if (buttonValue === 'C') {
    clearDisplay();
  } else {
    appendToDisplay(buttonValue);
  }
}

function appendToDisplay(value) {
  displayValue += value;
  updateDisplay();
}

function clearDisplay() {
  displayValue = '';
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').value = displayValue;
}

function calculate() {
  try {
    displayValue = eval(displayValue);
    updateDisplay();
  } catch (error) {
    displayValue = 'Error';
    updateDisplay();
  }
}