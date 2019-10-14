import functions from './syntax'




test('Check the sizes', () => {

    // (1) write a stub
    // (2) write a test that fails by setting a parameter to fail
    // (3) comment out the failing test and write the code to pass
    //  expect(functions.size(-101)).toBe("");

    // (4) write the code that will now pass and run the test
    expect(functions.size(-101)).toBe("Pass");

    // (5) repeat 
    expect(functions.size(-101)).toBe("Pass");
    //*********************************************

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