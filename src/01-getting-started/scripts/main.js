import functions from "./functions.js";


// **********
//
// Add the event listeners
//

idNumber.addEventListener("change", () => {
  idNumberSize.textContent = functions.size(idNumber.value);
});

idAdd.addEventListener("click", () => {
  let userinput1 = parseInt(idNum1.value);
  let userinput2 = parseInt(idNum2.value);
  idAnswer.value = functions.add(userinput1, userinput2);

  // idAnswer.value = functions.sub(userinput1, userinput2);
  // console.log("Hello World from 10_25_tddmain.js");
  // console.log(idDoIt);
  // console.log("Flabbergasted");
  // idDoIt.addEventListener("click", () => {
  //   console.log("Inside Event Listner");
  //   console.log("Number 1; ", idNum1.value);
  
});

idSub.addEventListener("click", () => {
  let userinput1 = parseInt(idNum1.value);
  let userinput2 = parseInt(idNum2.value);
  idAnswer.value = functions.sub(userinput1, userinput2);
});

idMult.addEventListener("click", () => {
  let userinput1 = parseInt(idNum1.value);
  let userinput2 = parseInt(idNum2.value);
  idAnswer.value = functions.mult(userinput1, userinput2);
});

idDiv.addEventListener("click", () => {
  let userinput1 = parseInt(idNum1.value);
  let userinput2 = parseInt(idNum2.value);
  idAnswer.value = functions.div(userinput1, userinput2);
});

idTax.addEventListener('click', (() => {
  let userinput3 = parseInt(idGross.value);
  idGross.value = "$" + functions.tax(userinput3);
}));
