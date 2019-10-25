import functions from "./larrycalc";


//test
test('just playing--------------', () => {
    console.log("We are here yes...");
    functions.helloWorld();
    expect(functions.sum(1,2)).toBe(3);
});

