let result = document.getElementById('result');

function buttonPressed(buttonValue) {
  if (buttonValue === '=') {
    result.value = eval(result.value);
  } else {
    result.value += buttonValue;
  }
}

function clearResult() {
  result.value = '';
}