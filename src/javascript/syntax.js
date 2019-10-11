const functions = {
    
    size: (num) => {
        
        // I added this statement which is not part of larryevolve
        if (num < -100) return "extra large";
        // ************************************
        
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

// ********* First Part Comp 100 Basic Syntax Pg 8 *********
//write a stub
//write a test that fails
//write the code for the test to pass
//run the test
//repeat
//****************************************************************

// **********  Second Part  **********
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
//Objects / Dictionaries
//declare object
//lookup key to retrieve value
