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

// // 3rd Daily (11th Oct, 2019):
makeEmailObj: (obj) => {
    return (obj.fname.toLowerCase() +
      "." + obj.lname.toLowerCase() +
      "@evolveu.ca"
    );
  },

  makeEmailArr: arr => {
    console.log(arr[0]);
    
    return (arr[0].toLowerCase() + '.' + arr[1].toLowerCase() + "@evolveu.ca");
    
  },

// loopStaff: in / of - October 24, 2019
  // Do the same assignment as the last one using the two forms of the “for” statement. 
  // Create your own tests but use the function names that are provided below.

  loopStaffIn: (data) => {
    let staffEmail = [];
    for (let element in data) {
      let eachEmail = functions.makeEmailObj(data[element]);
      staffEmail.push(eachEmail)
    };
    return staffEmail;
  },

  loopStaffOf: (data) => {
    let ofStaffEmail = [];
    for (let element in data) {
      let singleEmail = functions.makeEmailObj(data[element]);
      ofStaffEmail.push(singleEmail)
    };
    return ofStaffEmail;
  },

// loopStaff each / map - October 25, 2019
  // Do the same assignment again, but this time use callback functions. 
  // Use the ‘forEach’ and ‘map’ built-in functions.

  loopStaffForEach: (staff) => {
    let eachStaffEmail = [];
    staff.forEach(function (element) {
      let eachEmail = functions.makeEmailObj(element);
      eachStaffEmail.push(eachEmail);
       });
    console.log(eachStaffEmail);
    return eachStaffEmail;
   
  },

  loopStaffMap: (staff) => {
    let mapStaffEmail = staff.map((elements) => {
      return functions.makeEmailObj(elements);
    });
    console.log(mapStaffEmail);
    return mapStaffEmail;
  },


};
export default functions;

// More Array Exercises - October 29, 2019

// Use only the JavaScript built-in functions listed below to complete this exercise. Make sure you write your tests first.

// write a function to receive the same array (staff) and return the total of balances
// write a function to receive the same array (staff) and return the average the balances

// Understand the documentation. Now that we have a few arrays, let’s practice using the following:


 