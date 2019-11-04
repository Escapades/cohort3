import functions from "./daily.js";

// /*	
// 	Write the function that will create this output:

// *** the two values are not the same:
//     p1--> a
//     p2--> b
// *** the two values are not the same:
//     p1--> 1
//     p2--> 2
// *** the two values are not the same:
//     p1--> 2
//     p2--> 2
// */

  test("Test the assertEquals", () => {
  expect(functions.assertEquals("a", "b")).toBe(false);
  expect(functions.assertEquals("a", "a")).toBe(true);
  expect(functions.assertEquals(1, 2)).toBe(false);
  expect(functions.assertEquals(2, 2)).toBe(true);
  expect(functions.assertEquals("2", 2)).toBe(false);
  expect(functions.assertEquals("This value", "This value")).toBe(true);
});

/*
    Write a function to format an email based on an array.
*/

  test("email builder from an array", () => {
  const name = ["first", "last"];
  expect(functions.makeEmailArr(name)).toEqual("first.last@evolveu.ca");
  expect(functions.makeEmailArr(["First", "Last"])).toEqual(
    "first.last@evolveu.ca"
  );
  expect(functions.makeEmailArr(["Bill", "Smith"])).toEqual(
    "bill.smith@evolveu.ca"
  );
});

/* Write a function to format an email based on an object */

test('email builder from an object / map', () => {
  const name = { fname: 'first', lname: 'last' };
  expect(functions.makeEmailObj(name))
      .toEqual("first.last@evolveu.ca");
  expect(functions.makeEmailObj({ fname: 'First', lname: 'Last' }))
      .toEqual("first.last@evolveu.ca");
  expect(functions.makeEmailObj({ fname: "Bill", lname: "Smith" }))
      .toEqual("bill.smith@evolveu.ca");
});

// THE FOLLOWING ARE EXAMPLES ON LOOPS
// EXAMPLE: FOR LOOP - Prepare for Array Work - October 15, 2019
 var todos = ["Study JavaScript", "Do Daily Exercises", "Watch UDemy Videos"];
  for (var i = 0; i < 3; i++)
    // Display the output at the Terminal
    console.log(todos[i]);

//EXAMPLE: WHILE LOOP - Prepare for Array Work - October 15, 2019
var x = 0;
var myArray = ["Honda", "Kawasaki", "BMW"];
var motorcycles;
while ((motorcycles = myArray[x++])) {
  console.log(motorcycles);
}

//EXAMPLE: DO WHILE LOOP - Prepare for Array Work - October 15, 2019
var j = 0;
var secondArray = ["Lamborgini", "Corvette", "Tesla"];
var car;
do {
  car = secondArray[j++];
  console.log(car);
} while (j < 3);

//EXAMPLE: FOR IN LOOP - Prepare for Array Work - October 15, 2019
var thirdArray = [3, 5, 7];
thirdArray.jaws = "test";
for (var i in thirdArray) {
  console.log(i); // logs 0, 1, 2, "jaws"
}

//EXAMPLE: FOR OF LOOP - Prepare for Array Work - October 15, 2019
// for (var i of thirdArray) {var thirdArray = [3, 5, 7];var thirdArray = [3, 5, 7];
thirdArray.jaws = "test";
for (var i in thirdArray) {
  console.log(i); // logs 0, 1, 2, "jaws"
}
thirdArray.jaws = "test";
for (var i in thirdArray) {
  console.log(i); // logs 0, 1, 2, "jaws"
}
//   console.log(i); // logs 3, 5, 7
// }

//THE FOLLOWING ARE MORE EXAMPLES ON ARRAYS 
//EXAMPLE: MORE ARRAY WORK - Daily Exercises - Oct 16 - 17

//EXAMPLE: SLICE ARRAY WORK 
var drinks = ["Vodka","Rum","Whiskey","Wine","Liquers"];
console.log(drinks.slice(2,4)); //expected output: Array ["Whiskey","Wine"]
//EXAMPLE; SPLICE ARRAY WORK
drinks.splice(4,1,"Beer"); //expected output: Array ["Vodka","Rum","Whiskey","Wine","Beer"]
console.log(drinks);

//EXAMPLE: FOR EACH ARRAY WORK
var array1 =['x','y','z'];
array1.forEach(function(element) {
    console.log(element); //expected output: "x" "y" "z"
});

//THE FOLLOWING EXAMPLES ARE MEANT TO BETTER UNDERSTAND MAP, REDUCE, AND FILTER
//I STILL NEED TO WORK ON THIS SECTION - STOPPED ON SUNDAY OCT 20  @ 1:20 PM 
//ALL OTHER SECTIONS ARE COMPLETE EXCEPT FOR THIS ONE ...
// EXAMPLE: MAP, REDUCE, AND FILTER
var personnel = [
    {
      id: 5,
      name: "Luke Skywalker",
      pilotingScore: 98,
      shootingScore: 56,
      isForceUser: true,
    },
    {
      id: 82,
      name: "Sabine Wren",
      pilotingScore: 73,
      shootingScore: 99,
      isForceUser: false,
    },
    {
      id: 22,
      name: "Zeb Orellios",
      pilotingScore: 20,
      shootingScore: 59,
      isForceUser: false,
    },
    {
      id: 15,
      name: "Ezra Bridger",
      pilotingScore: 43,
      shootingScore: 67,
      isForceUser: true,
    },
    {
      id: 11,
      name: "Caleb Dume",
      pilotingScore: 71,
      shootingScore: 85,
      isForceUser: true,
    },
  ];

var totalJediScore = personnel
  .filter(function (person) {
    return person.isForceUser;
  })
  .map(function (jedi) {
    return jedi.pilotingScore + jedi.shootingScore;
  })
  .reduce(function (acc, score) {
    return acc + score;
  }, 0);

  console.log(totalJediScore);

  // EXAMPLE: ARRAY SORT WORK
  var months = ['May', 'Jan', 'April', 'Dec'];
  months.sort();
  console.log(months);
  // expected output: Array ["April", "Dec", "Jan", "May"]

  var array1 = [100, 60, 4, 31, 10000];
  array1.sort();
  console.log(array1);
  // expected output: Array [100, 10000, 31, 4, 60]

  // loopStaff - October 22, 2019
  // from Daily Cohort 3 Exercises

  const data = {
    staff: [
        { fname: "Jane", lname: "Smith", balance: 10 },
        { fname: "Liam", lname: "Henry", balance: 1000 },
        { fname: "Emma", lname: "Jones", balance: 1330 },
        { fname: "Olivia", lname: "Notly", balance: 310 },
        { fname: "Noah", lname: "Ho", balance: 503 },
        { fname: "William", lname: "Lee", balance: 520 },
        { fname: "Benjamin", lname: "Amis", balance: 150 },
    ],
    company: "EvolveU",
    city: "Calgary",
    prov: "Alberta"
};

//  loopStaff: in / of - October 24, 2019
// Do the same assignment as the last one using the two forms of the “for” statement.
//  Create your own tests but use the function names that are provided below.


test('For in loop staff email builder for company', () => {
  const staffEmail = functions.loopStaffIn(data.staff);
  expect(staffEmail[0])
      .toEqual("jane.smith@evolveu.ca");
  expect(staffEmail[3])
      .toEqual("olivia.notly@evolveu.ca");
  expect(staffEmail[6])
      .toEqual("benjamin.amis@evolveu.ca");
      console.log(staffEmail);
});

test('For of loop Staff Email for company', () => {
  const ofStaffEmail = functions.loopStaffOf(data.staff);
  expect(ofStaffEmail[0])
      .toEqual("jane.smith@evolveu.ca");
  expect(ofStaffEmail[3])
      .toEqual("olivia.notly@evolveu.ca");
  expect(ofStaffEmail[6])
      .toEqual("benjamin.amis@evolveu.ca");
      console.log(ofStaffEmail);
});

// loopStaff each / map - October 25, 2019

test('For each email builder for company', () => {
  const eachStaffEmail = functions.loopStaffForEach(data.staff);
  expect(eachStaffEmail[0])
      .toEqual("jane.smith@evolveu.ca");
  expect(eachStaffEmail[3])
      .toEqual("olivia.notly@evolveu.ca");
  expect(eachStaffEmail[6])
      .toEqual("benjamin.amis@evolveu.ca");
});

test('Map email builder for company', () => {
  const mapStaffEmail = functions.loopStaffMap(data.staff);
  expect(mapStaffEmail[0])
      .toEqual("jane.smith@evolveu.ca");
  expect(mapStaffEmail[3])
      .toEqual("olivia.notly@evolveu.ca");
  expect(mapStaffEmail[6])
      .toEqual("benjamin.amis@evolveu.ca");
});