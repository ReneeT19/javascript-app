import { createRequire } from 'module';
import { Customer } from "./customer_account.js";
const require = createRequire(import.meta.url);
const prompt = require('prompt-sync')({sigint: true});

export function accountInfo (choice) {
    let running = true;
    while(running) {
    console.log("Transaction Menu")
    choice = prompt('Enter a valid choice (1> Account Balance Check 2> Print Transactions 3> Update Pin 4> Withdraw Amount 5> Deposit Amount)');
    switch(choice) {
        case "Account Balance Check":
        case "1":
            checkBalance();
            break;
        case "Print Transactions":
        case "2":
            printTransactions();
            break;
        case "Update Pin":
        case "3":
            updatePin();
            break;
        case "Withdraw":
        case "4":
            withdraw();
            break;
        case "Deposit":
        case "5":
            deposit();
            break;
        default:
            console.log("Incorrect command. Please enter the numeric value or string corresponding with the available commands.")
    }
}
}

function checkBalance() {
    console.log("The current account balance is: " + Customer.initialDeposit)
}

function printTransactions() {
 
}

function updatePin() {

}

function deposit() {

}

function withdraw() {

}

