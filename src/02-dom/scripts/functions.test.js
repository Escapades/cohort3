import functions from './functions.js';

// test('Check if npm test runs', () => {
//   console.log("Check to see if functions.test is running");
//   functions.test();
// });


//readfilesync (i.e. fs) is synchronous and blocks execution until finished
const fs = require('fs');
const path = require('path');
//../index.html moves back one directory
// utf8 refers to unicode and required of the command
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

//don'tMock indicates that the module should never return a mocked version of the specified module
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


