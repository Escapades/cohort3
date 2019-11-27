
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
//         this.accountArray.push(new Account(name, Number(startingBalance)));
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