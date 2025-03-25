const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const userInput = document.getElementById("user-input");
const resultOnScreen = document.getElementById("results-div");
const getResult = (userInputStr) => {
  const regexpUSNumber = /^(1|1 )?([0-9]{3}|\([0-9]{3}\)) ?-?([0-9]{3}) ?-?([0-9]{4})$/;  
  console.log(regexpUSNumber.test(userInputStr));
  const result = document.createElement("p");
  regexpUSNumber.test(userInputStr) ? 
  result.id="Valid" :
  result.id="Invalid" ;
  result.innerText = `${result.id} US number: ${userInputStr}`;
  userInput.value="";
  resultOnScreen.appendChild(result);
}

const clickCheckBtn = () => {  
  const userInputStr = userInput.value;    
  userInputStr === "" ? alert("Please provide a phone number") : getResult(userInputStr)  
  }
const clickClearBtn = () => {
   resultOnScreen.replaceChildren();
}
 
checkBtn.addEventListener("click", clickCheckBtn);
clearBtn.addEventListener("click", clickClearBtn)