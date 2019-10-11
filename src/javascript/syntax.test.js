import functions from './syntax'

// (1) write a stub
// (2) write a test that fails by setting the parameter in function.js to -500
// if (num < -500) return "ToPassEventually"; 

test('Check the sizes', () => {

    // Added the following statement
    expect(functions.size(-101)).toBe("extra large");
    //******************************************** cl

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
    expect(functions.add(1, 2)).toBe(3);
    expect(functions.add(101, 202)).toBe(303);
});
//test('Check the sizes', () => {
//   console.log("Hello World");
//});