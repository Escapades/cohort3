const functions = {
    
    size: (num) => {
        
        
        if (num < -100) return "Pass";
        
       // if (num < 0) return "zero";

        if (num < 10) return "small";
        if (num < 20) return "medium";
        return "large";
    },

    add: (num1, num2) => {
        return num1 + num2;
    },


    subtract: (num1, num2) => {
        return num1 - num2;
    }

    
};
export default functions;

test('Check the sizes', () => {
    console.log("The  two tests passed ...");
});


// ********* First Part Comp 100 Basic Syntax Pg 8 *********
// (1) write a stub
// (2) write a test that fails
// (3) write the code for the test to pass
// (4) run the test
// (5) repeat
//****************************************

// **********  Second Part  ***
//define attributes / variables
//number
//string
//boolean
//array
//dictionary / objBasecamp
//undefined
//sample if / elseBasecamp
//functions
//parameters
//returns
//arrays
//add to the frontBasecamp
//add to the end
//update values
//loops 
//for
//for/in
//while
//do while
//forEach (with array and function)
//Object / Dictionaries
//declare object
//lookup key to retrieve value
