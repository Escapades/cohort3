//EXERCISE1.txt
//****************

5 + "4"
// "54"

5 - "3"
 // 2

10 % 5 
// 0

5 % 10
 // 5

"Java" + "Coffee"
 // "JavaCoffee"

" " + " " 
//  "  "

" " + 0
 //  " 0"

true + true 
// 2

true + false 
// 1

false + true 
//  1

false - true 
//  -1

3 - 4 //
  -1

"Bob" - "bill" 
// NAN

5 >= 1 
// true

0 === 1 
//  false

4 <= 1 
//  false

1 != 1 
//  false

"A" > "B" 
//  false

"B" < "C" 
//  true

"a" > "A" 
//  true

"b" < "A" 
//  false

true === false 
//  false

true != true 
// false

//EXERCISE2.txt
//****************

// add variable "firstName" and "lastName" // so that they equal your name
var firstName = "George";
var lastName = "Fitzgerald";

// create a variable that holds the answer // of "firstName" + " " + "LastName"
var fullName = firstName + " " + lastName;
// "George Fitzgerald"

// Evaluate this question. What is a + b?
var a = 34;
var b = 21;
a = 7;
b + a // 28

// What is c equal to?
var c; // undefined

//EXERCISE3.txt
//****************

// Make a Calculator! using prompt(), and variables, make a program that does the following:
// 1. Prompts the user for first number.
// 2. Stores that first number
// 3. Prompts the user for the second number.
// 4. stores that number and responds with the SUM by using an alert.  

var a = Number (prompt("Please provide the first number"));
var b = Number (prompt("Please provide the second number"));

function addition(a,b)
{
	console.log(a,b);
	return ("Sum = " + (a+b));
}

alert(addition(a,b));

// EXERCISE4.txt
//****************

// Make a function called checkDriverAge(). Whenever you call this function, you will get prompted for age. Use Function
// Declaration to create this function.

var age = prompt("What is your age?");
function checkDriverAge() {

if (Number(age) < 18) {
	alert("Sorry, you are too young to drive this car. Powering off");
} else if (Number(age) > 18) {
	alert("Powering On. Enjoy the ride!");
	} else if (Number(age) === 18) {
	alert("Congratulations on your first year of driving. Enjoy the ride!");
	}
}
	checkDriverAge();

// Create another function that does the same thing, assign it to checkDriverAge2 variable using Function Expression.

function checkDriverAge2() {
var age = prompt("What is your age?");

if (Number(age) < 18) {
	alert("Sorry, you are too young to drive this car. Powering off");
} else if (Number(age) > 18) {
	alert("Powering On. Enjoy the ride!");
} else if (Number(age) === 18) {
	alert("Congratulations on your first year of driving. Enjoy the ride!");
}
}
checkDriverAge2();

// EXERCISE4.txt BONUS: Instead of using the prompt. Now, only use console.log and make the checkDriverAge() function 
// accept an argument of age, so that if you enter: checkDriverAge(92); it returns "Powering On. Enjoy the ride!"

//if (Number(age) === 92) {
 	//console.log(age);
//return ("Powering On. Enjoy the ridesssss !" );
  //   }