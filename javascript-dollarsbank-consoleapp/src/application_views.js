import { createRequire } from 'module';
import {BankAccount} from './customer_account.js';
import {updatePin} from './customer_account.js';

const require = createRequire(import.meta.url);
const prompt = require('prompt-sync')({sigint: true});


export function accountInfo (choice) {
    var account = new BankAccount();
    let running = true;
    while(running) {
    console.log("\x1b[37m","");
    choice = prompt("Perform another transaction?");
    if(choice == "y" || choice=="Y" || choice=="yes" || choice=="Yes" || choice=="YES") {
    console.log('\x1b[36m%s\x1b[0m', "--------------" + "\n" + "Transaction Menu" + "\n" + "--------------")
    choice = prompt('1> Account Balance Check 2> Print Transactions 3> Update Pin 4> Withdraw Amount 5> Deposit Amount');
    switch(choice) {
        case "Account Balance Check":
        case "1":
            account.checkBalance();
            console.log("\x1b[32m",`The current balance is: ${account.balance}`);
            break;
        case "Print Transactions":
        case "2":
            account.printTransactions();
            break;
        case "Update Pin":
        case "3":
            updatePin();
            break;
        case "Withdraw":
        case "4":
            account.withdraw();
            break;
        case "Deposit":
        case "5":
            account.deposit();
            break;
        default:
            console.log("\x1b[31m","Incorrect command. Please enter the numeric value or string corresponding with the available commands.")
    }
} else {
    console.log("\x1b[32m","You successfully logged out.")
    process.exit(1);
}
}
}