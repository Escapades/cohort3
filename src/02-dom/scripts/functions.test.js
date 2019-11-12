import functions from './functions.js';

// test('Check if npm test runs', () => {
//   console.log("Check to see if functions.test is running");
//   functions.test();
// });



const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

jest.dontMock('fs');


beforeEach(() => {
    //import entire html file before each test function
    document.documentElement.innerHTML = html.toString();
});

afterEach(() => {
    // restore the original func after test
    jest.resetModules();
});

test('createChildren() returns children of list element', function () {
    let jestList = document.getElementById('idList');
    expect(functions.showChildren(jestList)).toEqual(["Item 1", "Item 2", "Item 3"]);
});


