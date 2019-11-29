
export class Account {

    constructor(name, startingBalance) {
        this.name = name;
        this.currentBalance = startingBalance;
    }


    deposit(value) {
        this.currentBalance += value;
    }

    withdraw(value) {
        this.currentBalance -= value;
    }

    balance() {
        return this.currentBalance;
    }
}


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

export const appendCardElement = () => {
    let newCard = document.createElement("DIV");
    
    let accountName = document.createElement("p");
    accountName.textContent = "Account Name: " + idNewAccountName.value;
    newCard.appendChild(accountName);
    let accountBalance = document.createElement("p");
    accountBalance.textContent = "Balance: " + idInitialBalance.value;
    newCard.appendChild(accountBalance);
    idPanelOnLeft.appendChild(newCard); //display the item at idPanelOnLeft
    newCard.className = "card";
  
    addCardButtons(newCard);
    
  };
  
  /**************************************************************************************************************************/
//   let testname = document.createElement("p");
//   testname.textContent = "hello" + idPanelLeft.childElementCount;
//   newCard.appendChild(name); // suggested by Brendan
// newCard is the pink panel of the card
  
  export const addCardButtons = newCard => {
    newCard.appendChild(document.createElement("BR"));
    let insertBeforeButton = document.createElement("BUTTON");
    insertBeforeButton.textContent = "Deposit";
    newCard.appendChild(insertBeforeButton);
  
    let addAfterButton = document.createElement("BUTTON");
    addAfterButton.textContent = "WithDraw";
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
  

// const viewFunctions = {

//     refreshAccountList: (accounts) => {
//         //Clear list
//         while (idAccountList.hasChildNodes()) {
//             idAccountList.removeChild(idAccountList.firstChild);
//         }
//         //Repopulate list
//         accounts.forEach((account) => {
//             let newAccount = document.createElement("LI");
//             newAccount.textContent = `${account.name}: $${account.currentBalance}`;
//             idAccountList.appendChild(newAccount);
//         })
//     },

//     createAccountCard: (accountName, accountBalance) => {
//         let newCard = document.createElement("DIV");
//         newCard.id = accountName;
//         newCard.className = "card";

//         let accountHeader = document.createElement("H3");
//         accountHeader.textContent = accountName;
//         newCard.appendChild(accountHeader);

//         viewFunctions.addCardButtons(newCard, accountBalance, accountName);

//         idCardPanel.appendChild(newCard);
//     },



// export class AccountController {
//     constructor() {
//         this.accountArray = [];
//     }

//     createAccount(name, startingBalance) {
//         this.accountArray.push(new Account(name, Num(startingBalance)));
//     }

//     getAccounts() {
//         return this.accountArray;
//     }

//     getAccount(name) {
//         return this.accountArray.filter(account => account.name === name)[0];
//     }

//     removeAccount(name) {
//         this.accountArray = this.accountArray.filter(account => account.name !== name);
//     }

//     totalAccounts() {
//         return this.accountArray.reduce(((accumulator, account) => accumulator + account.currentBalance), 0);
//     }

//     mostValuableAccount() {
//         return this.accountArray.sort((a, b) => b.currentBalance - a.currentBalance)[0];
//     }

//     leastValuableAccount() {
//         return this.accountArray.sort((a, b) => a.currentBalance - b.currentBalance)[0];
//     }
//  }