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

/*Working with Arrays*/
let currentArray = [];

idadd.addEventListener('click', (() => {
    if (isNaN(idElementInput.value) || idElementInput.value ==="") {
        idMessageArea.textContent = "Please enter a valid number";
    } else {
        functions.addElement(currentArray, idElementInput.value);
        idMessageArea.textContent = idElementInput.value + " Has been added to the array";
    }
}));

idshow.addEventListener('click', (() => {
  idMessageArea.textContent = "Array state: " + currentArray.toString();
}));

idtotal.addEventListener('click', (() => {
  idMessageArea.textContent = "Total: " + functions.totalArr(currentArray);
}));

idclear.addEventListener('click', (() => {
  functions.clearArr(currentArray);
  idMessageArea.textContent = "Array Cleared"
}));
