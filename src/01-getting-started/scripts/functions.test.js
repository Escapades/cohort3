import functions from './functions'

test('Check the sizes', () => {

    // Added the following statement
    expect(functions.size(-101)).toBe("extra large");
    //******************************************** 

    // Write a function for a dummy result
   // expect(functions.size(1)).toBe("zero");
    //************************************************

    expect(functions.size(-1)).toBe("small"); // Consider the edge cases
    expect(functions.size(0)).toBe("small");
    expect(functions.size(10)).toBe("medium");
    expect(functions.size(15)).toBe("medium");
    expect(functions.size(20)).toBe("large");
    expect(functions.size(2000000)).toBe("large");
});

test('Does that add function work?', () => {
    expect(functions.add(1,2)).toBe(3);
    expect(functions.add(101,202)).toBe(303);
});


//console logs below are the plumbing
test('just playing--------------', () => {
    console.log("Hello World from 10_25_tdd.js");
    functions.helloWorld();
    // this is my first test
    // this is my first fail
    //  expect(received).toBe(expected) Object.is equality
    expect(functions.sum(1,2)).toBe(3);
    expect(functions.sum(1,2)).toBe(5);
});


