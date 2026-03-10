// console.log("tst");
const result = document.getElementById("result");
const buttons = document.querySelectorAll("#buttons-container button");
const clearBtn = document.getElementById("clear-btn");

let operation = null;
let previousNum = "";
let isNewOperation = false;
//handling numbers btns and (.)btn
function handleNumber(number) {
  if (isNewOperation) {
    result.innerText = "";
    isNewOperation = false;
  }
  if (number === ".") {
    //to allow only one dot (.)
    if (result.innerText.includes(".")) return;
  }

  if (result.innerText === "0" && number !== ".") result.innerText = number;
  else {
    result.innerText += number;
  }
  clearBtn.innerText = "C";
}

function handleOperation(operationBtn) {
  if (operation !== null) {
    previousNum = handleEquals();

    result.innerText = previousNum;
  } else {
    previousNum = result.innerText;
  }

  operation = operationBtn;
  isNewOperation = true;
}

// allclear(AC) btn and clear(C)btn
function handleClear(clearAllclearBtn) {
  if (clearAllclearBtn === "C") {
    result.innerText = "0";
    clearBtn.innerText = "AC";
  } else {
    result.innerText = "0";
    previousNum = "";
    operation = null;
    isNewOperation = false;
  }
}

function handleSign() {
  if (result.innerText === "0") return;
  
  if (result.innerText.startsWith("-")) {
    result.innerText = result.innerText.slice(1);
  } 
  else {
    result.innerText = "-" + result.innerText;
  }
}

function handlePercentage() {
  result.innerText = parseFloat(result.innerText) / 100;
}

function handleEquals() {
    if (operation === null || previousNum === "") {
    return result.innerText;
  }
  let lastNum = parseFloat(previousNum);
  let currentNum = parseFloat(result.innerText);
  switch (operation) {
    case "+":
      return lastNum + currentNum;

    case "-":
      return lastNum - currentNum;

    case "×":
      return lastNum * currentNum;

    case "÷":
      // دا حل مبدئي بعدين هرمي error
      if (currentNum === 0) {
        alert("can't devide on zero!");
        return lastNum;
      }
      return lastNum / currentNum;
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let pressedBtn = e.target.innerText;
    // to hold only numbers
    if (!isNaN(pressedBtn) || pressedBtn === ".") {
      handleNumber(pressedBtn);
    }
    // clear
    else if (pressedBtn === "AC" || pressedBtn === "C") {
      handleClear(pressedBtn);
      //postive/ negative
    } else if (pressedBtn === "+/-") {
      handleSign();
    } else if (pressedBtn === "%") {
      handlePercentage();
    } else if (pressedBtn === "=") {
      //handleEquals
      result.innerText = handleEquals();
    } else {
      handleOperation(pressedBtn);
    }
  });
});
//
