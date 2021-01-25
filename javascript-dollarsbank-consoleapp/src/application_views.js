import { createRequire } from 'module';
import { Customer } from "./customer_account.js";
import {BankAccount} from './customer_account.js';

const require = createRequire(import.meta.url);
const prompt = require('prompt-sync')({sigint: true});


export function accountInfo (choice) {
    var account = new BankAccount();

    let running = true;
    while(running) {
    console.log("Transaction Menu")
    choice = prompt('Enter a valid choice (1> Account Balance Check 2> Print Transactions 3> Update Pin 4> Withdraw Amount 5> Deposit Amount)');
    switch(choice) {
        case "Account Balance Check":
        case "1":
            account.checkBalance();
            console.log(`The current balance is ${account.balance}`);
            break;
        case "Print Transactions":
        case "2":
            printTransactions();
            console.log(`${account.record}`);
            break;
        case "Update Pin":
        case "3":
            updatePin();
            break;
        case "Withdraw":
        case "4":
            account.withdraw();
            account.printTransactions(record);
            break;
        case "Deposit":
        case "5":
            account.deposit();
            account.printTransactions();
            break;
        default:
            console.log("Incorrect command. Please enter the numeric value or string corresponding with the available commands.")
    }
}
}





function printTransactions() {
 
}

function updatePin() {

}



// Account.prototype._isPositive = function(amount) {
//     const isPositive = amount > 0;
//     if (!isPositive) {
//         console.error('Amount must be positive!');
//         return false;
//     }
//     return true;
//     }
// (function(exports) {
//     function Account () {
//         this.balance = 0;
//       }
//     Account.prototype.balance = function() {
//         return this.balance;
//     }
// })(this);

