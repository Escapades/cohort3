
const functions = {
    
    size: (num) => {
        
        // add a test that sends -101 as the parameter and checks that the string returned is “extra large”
        // this is from exercise enhancement comp 100
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
    },

    multiply: (num1, num2) => {
        return num1 * num2;
    },

    divide: (num1, num2) => {
        return num1 / num2;
    },
};

export default functions;
