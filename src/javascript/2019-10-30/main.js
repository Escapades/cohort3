//This is your presentation logic ..

import functions from './functions.js';


// **********
//
// Add the event listeners
// 

idDoIt.addEventListener('change', (() => {
    idNumberSize.textContent = functions.size(idNumber.value);
 }));