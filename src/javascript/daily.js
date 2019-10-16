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
    //console.log(arr[1]);
    return (arr[0].toLowerCase() + '.' + arr[1].toLowerCase() + "@evolveu.ca");
    
  }
};
export default functions;

/*	
	Write the function that will create this output:

*** the two values are not the same:
    p1--> a
    p2--> b
*** the two values are not the same:
    p1--> 1
    p2--> 2
*** the two values are not the same:
    p1--> 2
    p2--> 2
*/

// Write the function after this comment ---

// and before this comment ---

// assertEquals("a","b");
// assertEquals("a","a");
// assertEquals(1,2);
// assertEquals(2,2);
// assertEquals("2",2);
// assertEquals("This value","This value");
