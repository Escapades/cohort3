// import { Account, AccountController } from './account.js'
import * as functions from "./functions.js";

// the following test structures were adapted from https://dev.to/snowleo208/things-i-learned-after-writing-tests-for-js-and-html-page-4lja

// one needs to add the following snippet in order to import the whole to HTML
const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(path.resolve(__dirname, "../index.html"), "utf8"); //../index.html moves back one directory and utf8 refers to unicode
jest.dontMock("fs"); //don'tMock indicates that the module should never return a mocked version of the specified module

beforeEach(() => {
  document.documentElement.innerHTML = html.toString(); //import entire html file before each test function
});

afterEach(() => {
  jest.resetModules(); // restore the original func after test
});


test("makeListElement() creates a new list item", function () {
    let jestList = document.getElementById("idList");
    let listCount = jestList.childElementCount;
  
    functions.makeListElement();
    expect(jestList.childElementCount).toEqual(listCount + 1);
  });
  
  test("appendCardElement() creates a new card at the end of the panel", function () {
    let jestLeftPanel = document.getElementById("idPanelOnLeft");
    let childCount = jestLeftPanel.childElementCount;
    let cardCount = childCount - 1;
    let lastCard = jestLeftPanel.lastElementChild;
  
    functions.appendCardElement();
  
    expect(jestLeftPanel.childElementCount).toEqual(childCount + 1);
    expect(lastCard.nextElementSibling).toEqual(jestLeftPanel.lastChild);
    expect(jestLeftPanel.lastElementChild.firstChild.textContent).toEqual("Card" + (Num(cardCount) + 1));
  });
  
  test("addCardButtons() appends buttons to cards", function () {
    let newCard = document.createElement("DIV");
  
    functions.addCardButtons(newCard);
  
    expect(newCard.children[1].firstChild.nodeValue).toEqual("Deposit");
  });
  
  test("addCardBefore() creates a new card before the current card", function () {
    let jestLeftPanel = document.getElementById("idPanelOnLeft");
    functions.appendCardElement();
    functions.appendCardElement();
    let childCount = jestLeftPanel.childElementCount;
    let cardCount = childCount - 1;
    let currentCard = jestLeftPanel.children[2];
  
    functions.addCardBefore(currentCard);
  
    expect(jestLeftPanel.childElementCount).toEqual(childCount + 1);
    expect(currentCard.previousElementSibling.firstChild.textContent).toEqual("Card " + (Num(cardCount) + 1));
  });
  
  test("addCardAfter() creates a new card after the current card", function () {
    let jestLeftPanel = document.getElementById("idPanelOnLeft");
    functions.appendCardElement();
    let childCount = jestLeftPanel.childElementCount;
    let cardCount = childCount - 1;
    let currentCard = jestLeftPanel.children[1];
  
    functions.addCardAfter(currentCard);
  
    expect(jestLeftPanel.childElementCount).toEqual(childCount + 1);
    expect(currentCard.nextElementSibling.firstChild.textContent).toEqual("Card " + (Num(cardCount) + 1));
  });
  
  test("deleteCard() deletes the current card", function () {
    let jestLeftPanel = document.getElementById("idPanelOnLeft");
    functions.appendCardElement();
    functions.appendCardElement();
    let childCount = jestLeftPanel.childElementCount;
    let cardCount = childCount - 1;
    let currentCard = jestLeftPanel.children[1];
  
    functions.deleteCard(currentCard);
  
    expect(jestLeftPanel.childElementCount).toEqual(childCount - 1);
    expect(jestLeftPanel.children[1].firstChild.textContent).toEqual("Card2");
  });
  
  //test structure from https://dev.to/snowleo208/things-i-learned-after-writing-tests-for-js-and-html-page-4lja
  

// describe is a function in the jasmine testing framework that simply describes the suite of a test case
// new is the design of Class Account

// describe('Account Testing', () => {
//     const checkingAccount = new Account("Checking Account", 100);


//     test('Account properties', () => {
//         expect(checkingAccount.name).toEqual("Checking Account");
//         expect(checkingAccount.currentBalance).toEqual(100);
//         console.log(checkingAccount.currentBalance);
//     });

//     test('deposit(value) adds value to currentBalance', () => {
//         checkingAccount.deposit(50);
//         expect(checkingAccount.currentBalance).toEqual(150);
//         console.log(checkingAccount.currentBalance);
//     });

//     test('withdraw(value) subtracts value from currentBalance', () => {
//         checkingAccount.withdraw(25);
//         expect(checkingAccount.currentBalance).toEqual(125);
//         console.log(checkingAccount.currentBalance);
//     });

//     test('balance() returns currentBalance', () => {
//         expect(checkingAccount.balance()).toEqual(125);
//     });
// });


// describe('Account Controller Testing', () => {
//     const banker = new AccountController();


//     test('createAccount() adds new account to accountList', () => {
//         banker.createAccount("Savings Account", 5);
//         expect(banker.accountArray[0].name).toEqual("Savings Account");
//     });

    // test('getAccounts() returns array of all accounts', () => {
    //     banker.createAccount("Checking Account", 75);
    //     expect(banker.getAccounts()).toEqual([{ "currentBalance": 5, "name": "Savings Account" }, { "currentBalance": 75, "name": "Checking Account" }]);
    // });

//     test('getAccount(name) returns account by name', () => {
//         expect(banker.getAccount("Checking Account")).toEqual({ "currentBalance": 75, "name": "Checking Account" });
//         expect(banker.getAccount("Non-existent Account")).toEqual(undefined);
//         expect(banker.getAccount("")).toEqual(undefined);
//     });

//     test('removeAccount() removes account of that name', () => {
//         const accountCount = banker.getAccounts().length
//         banker.removeAccount("Savings Account");
//         expect(banker.getAccounts().length).toEqual(accountCount - 1);
//         expect(banker.getAccounts()).toEqual([{ "currentBalance": 75, "name": "Checking Account" }]);
//     });

//     test('totalAccounts() returns total balance of all accounts', () => {
//         banker.createAccount("Joint Account", 500);
//         banker.createAccount("Holiday Account", 25);
//         expect(banker.totalAccounts()).toEqual(600);
//     });

//     test('mostValuableAccount() returns account with highest balance', () => {
//         expect(banker.mostValuableAccount()).toEqual({ "currentBalance": 500, "name": "Joint Account" });
//     });

//     test('leastValuableAccount() returns account with highest balance', () => {
//         expect(banker.leastValuableAccount()).toEqual({ "currentBalance": 25, "name": "Holiday Account" });
//     });
// });