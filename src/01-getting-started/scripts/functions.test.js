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

test('Does the addElement function work?', () => {
    expect(functions.addElement([1, 2], 3)).toStrictEqual([1, 2, 3]);
    expect(functions.addElement([], -99)).toStrictEqual([-99]);
});

test('Does the totalArr function work?', () => {
    expect(functions.totalArr([1, 2, 3])).toBe(6);
    expect(functions.totalArr([0, -99, 1.56])).toBe(-97.44);
    expect(functions.totalArr(["1", "2", "3"])).toBe(6);
});

test('Does the clearArr function work?', () => {
    expect(functions.clearArr([1, 2, 3])).toStrictEqual([]);
    expect(functions.clearArr([0, -99, 1.56])).toStrictEqual([]);
    expect(functions.clearArr(["1", "2", "3"])).toStrictEqual([]);
});

// test('Does the tax function work?', () => {
//     expect(functions.tax(-100)).toBe(0);
//     expect(functions.tax(1.00)).toBe(0.15);
//     expect(functions.tax(2.00)).toBe(0.30);
//     expect(functions.tax(50000)).toBe(7630.85);
//     expect(functions.tax(100000)).toBe(18140.66);
//     expect(functions.tax(150000)).toBe(31211.57);
//     expect(functions.tax(250000)).toBe(61796.57);
// });

//console logs below are the plumbing
// test('just playing--------------', () => {
//    console.log("Hello World from main.js");
//     functions.helloWorld();
// //     // this is my first test
// //     // this is my first fail
// //     //  expect(received).toBe(expected) Object.is equality
//     //  expect(functions.sum(1,2)).toBe(3);
// //     expect(functions.sum(1,2)).toBe(5);
// });


