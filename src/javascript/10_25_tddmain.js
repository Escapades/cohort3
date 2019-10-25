import functions from "./10_25_tdd.js"

functions.helloWorld();

idDoIt.addEventListener('click', () => {

let userinput1 = parseInt(idNum1.value);
let userinput2 = parseInt(idNum2.value);
idAnswer.value = functions.sum(userinput1, userinput2);

// console.log("Hello World from 10_25_tddmain.js");
// console.log(idDoIt);
// console.log("Flabbergasted");
// idDoIt.addEventListener("click", () => {
//   console.log("Inside Event Listner");
//   console.log("Number 1; ", idNum1.value);
});
