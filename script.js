document.addEventListener("DOMContentLoaded", () => {
  const resultDisplay = document.getElementById("result");
  let currentInput = "";

  function updateDisplay(value) {
    resultDisplay.textContent = value;
  }

  function handleButtonClick(value) {
    currentInput += value;
    updateDisplay(currentInput);
  }

  function handleClear() {
    currentInput = "";
    updateDisplay("0");
  }

  function handleEqualClick() {
    try {
      currentInput = eval(currentInput).toString();
      updateDisplay(currentInput);
    } catch (e) {
      updateDisplay("Error");
    }
  }

  function handleBackspace() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay(currentInput || "0");
  }

  const buttons = document.querySelectorAll(
    "#btnGrup button, #btnGrup1 button"
  );
  buttons.forEach((button) => {
    const value = button.textContent;
    if (value === "C") {
      button.addEventListener("click", handleClear);
    } else if (value === "=") {
      button.addEventListener("click", handleEqualClick);
    } else if (value === "←") {
      button.addEventListener("click", handleBackspace);
    } else {
      button.addEventListener("click", () => handleButtonClick(value));
    }
  });
});
