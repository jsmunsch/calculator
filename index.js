const numberButtons = document.querySelectorAll(".number-button");
const numberInput = document.querySelector("#manual-inputfield");
const resultField = document.querySelector("#result-input");
const operatorButtons = document.querySelectorAll(".operator-button");
const result = numberInput.value;

numberButtons.forEach(button => {
  button.addEventListener("click", () => {
    const number = button.innerHTML;
    numberInput.value += number;
  });
});

operatorButtons.forEach(button => {
  button.addEventListener("click", () => {
    if (resultField.value === "") {
      resultField.value = numberInput.value;
      numberInput.value = "";
      return result;
    } else if (button.innerHTML === "*") {
      resultField.value = multiply();
      numberInput.value = "";
    } else if (button.innerHTML === "/") {
      resultField.value = divide();
      numberInput.value = "";
    } else if (button.innerHTML === "+") {
      resultField.value = add();
      numberInput.value = "";
    } else if (button.innerHTML === "-") {
      resultField.value = substract();
      numberInput.value = "";
    }
  });
});

function multiply() {
  return (resultField.value * numberInput.value).toFixed(2);
}

function divide() {
  return (resultField.value / numberInput.value).toFixed(2);
}

function add() {
  return Number(resultField.value) + Number(numberInput.value);
}

function substract() {
  return resultField.value - numberInput.value;
}
