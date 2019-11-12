// import functions from './functions.js';
import * as functions from './functions.js';

containerId.addEventListener("click", (event) => {
  console.log(event);
//   console.log("We are here ...");
  if (event.target.id === "idShow") {
            alert(functions.showChildren(idList));
        }
    
        if (event.target.id === "idAdd") {
            functions.makeListElement();
        } 
});

