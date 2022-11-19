window.addEventListener("load", bindEvents);
//Buttons Attach Event Listener
let buttons;
function bindEvents() {
  buttons = document.getElementsByTagName("button");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", printResult);
  }
}
let value = "";

let btn = document.getElementsByClassName("opr");
function isOperatorFirst() {
  for (let i = 0; i < btn.length; i++) {
    if (value === btn[i].innerText) {
      value = "";
    }
  }
}

function printResult() {
  //value += this.textContent;
  //console.log("value is ",value);
  let result = document.getElementById("result");
  // console.log("result ",result);
  // if (this.textContent === "*") {
  //   result.value = value;
  //   //console.log("result is ", result.value);
  // }
  //console.log("button type is ", typeof((this.textContent)))
  if (this.textContent === "CE") {
    result.value = "";
    value = "";
  } else if (this.textContent === "=") {
    if (value === "") {
      result.value = 0;
    } else {
      result.value = isNaN(eval(value)) ? "Math Error" : eval(value);
    }
    value = "";
  } else {
    value += this.innerText;
    result.value = value;
    //console.log("result is ", result.value);
  }
  isOperatorFirst();
}
