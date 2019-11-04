import functions from './syntax.js';

console.log("Hello World from basic.js");

function onButtonClicked(){
  console.log("I am in the button clicked event");

  let a = document.getElementById("userinput").value;

  let b = parseInt(a) + 1;

  console.log("the value of x is " + b);

}
function size(){

  let c = document.getElementById("userinput").value;
  let x = parseInt(c);
  let num =""
  ￼

  x < 10 ? num = 'small' : x >= 10 && x <= 19 ? num = 'med': num = 'large';
  console.log(num);
  document.getElementById("button2").innerHTML=num;

}


// **********
//
// Add the event listeners
// 

   idNumber.addEventListener('change', (() => {
   idNumberSize.textContent = functions.size(idNumber.value);
}));

