const numberButtons = document.querySelectorAll(".number-button");
const numberInput = document.querySelector("#manual-inputfield");
const resultField = document.querySelector("#result-input");

function addNumber() {
  numberInput.value = number;
}

numberButtons.forEach(button => {
  button.addEventListener("click", () => {
    const number = button.innerHTML;
    numberInput.value = number;
  });
});

const result = {
  value: ""
};

function setNumber1(value) {
  numberInput = value;
}
