// More Array Exercises (Really) - November 6, 2019
// Using one of the callback functions we researched in the last exercise (but may have not used previously) create a new array for 
// balances >= 1000 from the staff data. 

const functions = {
  balanceAbove: arr => {
    let newArr = [];
    arr.forEach(person => {
      newArr.push(person.balance);
    });
    let consoleArr = newArr.filter(balance => balance >= 1000);
    console.log("This is the >=1000 Totals", consoleArr);
    return newArr.filter(balance => balance >= 1000);
  },

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
  makeEmailObj: obj => {
    return (
      obj.fname.toLowerCase() + "." + obj.lname.toLowerCase() + "@evolveu.ca"
    );
  },

  makeEmailArr: arr => {
    console.log(arr[0]);

    return arr[0].toLowerCase() + "." + arr[1].toLowerCase() + "@evolveu.ca";
  },

  // loopStaff: in / of - October 24, 2019
  // Do the same assignment as the last one using the two forms of the “for” statement.
  // Create your own tests but use the function names that are provided below.

  loopStaffIn: data => {
    let staffEmail = [];
    for (let element in data) {
      let eachEmail = functions.makeEmailObj(data[element]);
      staffEmail.push(eachEmail);
    }
    return staffEmail;
  },

  loopStaffOf: data => {
    let ofStaffEmail = [];
    for (let element in data) {
      let singleEmail = functions.makeEmailObj(data[element]);
      ofStaffEmail.push(singleEmail);
    }
    return ofStaffEmail;
  },

  // loopStaff each / map - October 25, 2019
  // Do the same assignment again, but this time use callback functions.
  // Use the ‘forEach’ and ‘map’ built-in functions.

  loopStaffForEach: staff => {
    let eachStaffEmail = [];
    staff.forEach(function(element) {
      let eachEmail = functions.makeEmailObj(element);
      eachStaffEmail.push(eachEmail);
    });
    console.log(eachStaffEmail);
    return eachStaffEmail;
  },

  loopStaffMap: staff => {
    let mapStaffEmail = staff.map(elements => {
      return functions.makeEmailObj(elements);
    });
    console.log(mapStaffEmail);
    return mapStaffEmail;
  },

  // More Array Exercises Oct 29, 2019
  makeBalance: obj => {
    console.log("Daily Balance");
    var balancearray = obj.map(x => x.balance);
    //  console.log(balancearray);
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    console.log(balancearray.reduce(reducer));
    var totalBalance = balancearray.reduce(reducer);
    return totalBalance;
  },

  makeAverageBal: obj => {
    console.log("Average Balance");
    var totalBal = functions.makeBalance(obj);
    console.log(totalBal);

    var averageBalance = Math.round((totalBal / obj.length) * 100) / 100;
    console.log(averageBalance);
    return averageBalance;
  }
};
export default functions;
