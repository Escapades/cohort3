//if (4 + 3 === 7){
	//alert("You're smart!");
	//console.log("Helloooo", "How are you");
//console.log("Helloooo");

//function sayHello(){
	//console.log("Hello");
//}

//sayHello();

//var sayBye = function() {
	//console.log("Bye");
//}

//sayBye();

//function sing(song) {
	//console.log(song);
//}

//sing ("Laaa deee daaa");
//sing ("helllloooooo");
//sing (" backstreets back alright");

// function multiply(a, b){
// 	if (a > 10 || b > 10) {
// 		return "that's too hard";
// 	} else {
// 		return a*b;
// 	}
// }

// function multiply(a,b)
// {
// 	return a*b;
// }
// alert(multiply(5,10));

// var age = prompt("What is your age?");

// if (Number(age) < 18) {
// 	alert("Sorry, you are too yound to drive this car. Powering off");
// } else if (Number(age) > 18) {
// 	alert("Powering On. Enjoy the ride!");
// } else if (Number(age) === 18) {
// 	alert("Congratulations on your first year of driving. Enjoy the ride!");
// }

//prompt("What is your age?");

// function checkDriverAge() {
// var age = prompt("What is your age?");
// 	if (Number(age) < 18) {
//  	alert("Sorry, you are too young to drive this car. Powering off");
//  } else if (Number(age) > 18) {
//  	alert("Powering On. Enjoy the ride!");
//  } else if (Number(age) === 18) {
//  	alert("Congratulations on your first year of driving. Enjoy the ride!");
//  }
// }
// checkDriverAge();

// checkDriverAge2()
// var checkDriverAge2 = function() {
// 	var age = prompt("What is your age?");
// 	if (Number(age) < 18) {
// 		alert("Sorry, you are too yound to drive this car. Powering off");
// 	} else if (Number(age) > 18) {
// 		alert("Powering On. Enjoy the ride!");
// 	} else if (Number(age) === 18) {
// 		alert("Congratulations on your first year of driving. Enjoy the ride!");
// 	}
// }
// checkDriverAge2();


// var list =[["tiger", "cat", "bear", "bird"]];
// console.log(list[0][2]);
//concat, push, shift, pop, sort, my List, myNewList

//var array = ["Banana", "Apples", "Oranges", "Blueberries"];
//console.log(array[0][2]);
// array.shift();
// //array.sort();
// // 1. Remove the Banana from the array.
// array.shift();

// // 2. Sort the array in order. 
// array.sort();

// // 3. Put "Kiwi" at the end of the array.
// array.push("Kiwi");

// // 4. Remove "Apples" from the array.
// array.splice(0, 1);

// // 5. Sort the array in reverse order. 
// array.reverse();

// // using this array, 
// var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// access "Oranges".
//array2[1][1][0];


// var user = {
// 	name: "John",
// 	age: 34,
// 	hobby: "Soccer",
// 	isMarried: false,
// 	spells: ["abrakadra","shazam","boo"]
// };

// var list = [
// {
// 	username: "andy",
// 	password: "secret"
// },
// {
// 	username: "jess",
// 	password: "123"
// }

// ];

var todos = [
    "clean room",
    "brush teeth",
    "exercise",
    "study javascript",
    "eat healthy"
];

var todosImportant = [
    "clean room!",
    "brush teeth!",
    "exercise!",
    "study javascript!",
    "eat healthy!"
];

var todosLength = todos.length;

function logTodos(todo,i) {
	console.log(todo,i);
}

todos.forEach(logTodos);
todosImportant.forEach(logTodos);

// for (var i=0; i < todosLength; i++) {
//     //console.log(todos[i] + "!");
//     //todos[i] = todos[i] + "!";
//     todos.pop();
// }

//todos[i] = todos[i] + "!";

// todos.length
// 5
// "helllooo".length
// 8

// var counterOne = 10;
// while (counterOne > 0) {
// 	console.log(counterOne);
// 	counterOne--;
// }

// var counterTwo = 10
// do {
// 	console.log(counterTwo);
// 	counterTwo--;
// }while (counterTwo > 0);

