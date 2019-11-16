// import functions from './functions.js';
import * as functions from "./functions.js";

containerId.addEventListener("click", event => {
  console.log(event);
  //   console.log("We are here ...");
  if (event.target.id === "idShow") {
    alert(functions.showChildren(idList));
  }

  if (event.target.id === "idAdd") {
    functions.makeListElement();
  }
});

idPanelOnLeft.addEventListener("click", event => {
  console.log(event);
  if (event.target.id === "idAddCard") {
    functions.appendCardElement();
  }
  /********************************************************************************************************************* */

  if (event.target.textContent === "Add Before") {
    functions.addCardBefore(event.target.parentNode);
  }

  if (event.target.textContent === "Add After") {
    functions.addCardAfter(event.target.parentNode);
  }

  if (event.target.textContent === "Delete") {
    functions.deleteCard(event.target.parentNode);
  }
});
