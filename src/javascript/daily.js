const functions = {
  assertEquals: (num1, num2) => {
    if (num1 === num2) {
      return true;
    } else if (num1 !== num2) {
      console.log("the two values are not the same:");
      console.log("p1-->", num1);
      console.log("p2-->", num2);
      return false;
    }
  },

  makeEmailArr: arr => {
    console.log(arr[0]);
    
    return (arr[0].toLowerCase() + '.' + arr[1].toLowerCase() + "@evolveu.ca");
    
  }

};
export default functions;



