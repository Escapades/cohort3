//a stub has a function name parameters that returns a dummy
///this is the first step is to write the stub
//with mininum code
//(1) Add a stub
//(2) Write a test
//(3) Get it to fail
//(4) Mininum code pass
//(5) Another test
//(6) Fail 
//(7) write
//(8) continue until you have all your functional
//(9) refactor

import functions from "./10_25_tdd.js";

//console logs below are the plumbing
test('just playing--------------', () => {
    console.log("Hello World from 10_25_tdd.js");
    functions.helloWorld();
    // this is my first test
    // this is my first fail
    //  expect(received).toBe(expected) Object.is equality
    expect(functions.sum(1,2)).toBe(3);
});


