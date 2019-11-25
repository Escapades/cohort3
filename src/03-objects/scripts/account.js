// Consider an ‘Account’. A bank account or investment account. To make life simple there are no interest or bank charges.

// Consider a class called ‘Account’ with the following methods:

// constructor - 2 parms - account name, initial balance
// deposit - 1 parm - value to be added
// withdraw -1 parm - value to be withdrawn 
// balance - no parms - returns current balance 

// In this case, state is only one thing “balance”.  Each method does something to the state of the object. It modifies it or shows it. 

// Methods are verbs or action words. State is typically nouns.  Consider how we would test such an Account. Don’t do this; just consider the following:

// Create an account ‘checkingAccount’ with an initial balance of $25
// Check the balance to ensure we have $25
// Deposit $10
// Check the balance to ensure we have $35
// Withdraw $30
// Check the balance to ensure we have $5

// Let’s consider the terminology of this example:

// What is the class? Account
// What is one of the objects or instances? checkingAccount
// What are the methods? constructor, deposit, withdraw, balance
// What are the parameters? to the constructor (accountName, startingBalance), to deposit (amount), to withdraw (amount), to balance() nothing.
// What is returned from? the constructor - reference to the new object, deposit - nothing, withdraw - nothing, balance - the balance.

    
// constructor - 2 parms - account name, initial balance
// deposit - 1 parm - value to be added
// withdraw -1 parm - value to be withdrawn 
// balance - no parms - returns current balance 

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