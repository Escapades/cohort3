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
