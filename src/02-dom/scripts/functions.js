export const showChildren = listElement => {
  let childrenArray = [];
  let index = 0;
  let x;
  for (x of listElement.children) {
    childrenArray[index] = x.textContent;
    index++;
  }
  return childrenArray;
};

export const makeListElement = () => {
  let li = document.createElement("li"); //create a <li> node
  li.appendChild(
    document.createTextNode("Item " + (idList.childElementCount + 1))
  ); //add item to basic DOM with increment
  idList.appendChild(li); //display the item at idList
};

export const appendCardElement = () => {
  let newCard = document.createElement("DIV");
  newCard.textContent = "Card" + idPanelOnLeft.childElementCount; //faster than createTextNode
  idPanelOnLeft.appendChild(newCard); //display the item at idPanelOnLeft
  newCard.className = "card";

  addCardButtons(newCard);
};

/**************************************************************************************************************************/

export const addCardButtons = newCard => {
  newCard.appendChild(document.createElement("BR"));
  let insertBeforeButton = document.createElement("BUTTON");
  insertBeforeButton.textContent = "Insert Before";
  newCard.appendChild(insertBeforeButton);

  let addAfterButton = document.createElement("BUTTON");
  addAfterButton.textContent = "Insert After";
  newCard.appendChild(addAfterButton);

  newCard.appendChild(document.createElement("BR"));

  let deleteButton = document.createElement("BUTTON");
  deleteButton.textContent = "Delete";
  newCard.appendChild(deleteButton);
};

export const addCardBefore = currentCard => {
  let newCard = document.createElement("DIV");
  newCard.textContent = "Card " + idPanelOnLeft.childElementCount; //faster than createTextNode
  idPanelOnLeft.insertBefore(newCard, currentCard); //display the item at idPanelOnLeft
  newCard.className = "card";

  addCardButtons(newCard);
};

export const addCardAfter = currentCard => {
  let newCard = document.createElement("DIV");
  newCard.textContent = "Card " + idPanelOnLeft.childElementCount; //faster than createTextNode
  idPanelOnLeft.insertBefore(newCard, currentCard.nextSibling); //display the item at idPanelOnLeft
  newCard.className = "card";

  addCardButtons(newCard);
};

export const deleteCard = currentCard => {
  currentCard.remove();
};
