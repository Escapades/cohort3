// const functions = {

//     test: () => {
//       console.log("Check on functions");
//     }
// };

// export default functions;  

export const showChildren = (listElement) => {
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
  let li = document.createElement("li");
  li.appendChild(document.createTextNode("Item " + (idList.childElementCount + 1)));
  idList.appendChild(li);
};

