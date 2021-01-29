import { createRequire } from 'module';
import {BankAccount, logOut} from './customer_account.js';
import {updatePin} from './customer_account.js';

const require = createRequire(import.meta.url);
const prompt = require('prompt-sync')({sigint: true});


export function accountInfo (choice) {
    var account = new BankAccount();
    let running = true;
    while(running) {
    console.log('\x1b[33m%s\x1b[0m',"Perform another transaction? (Yes/No)","\x1b[37m");
    choice = prompt();
    if(choice=="yes" || choice=="Yes" || choice=="YES") {
    console.log('\x1b[36m%s\x1b[0m', "----------------" + "\n" + "Transaction Menu" + "\n" + "----------------")
    console.log('Please choose an option:\n1> Account Balance Check\n2> Print Transactions\n3> Update Pin\n4> Withdraw Amount\n5> Deposit Amount\n6> Log Out')
    choice = prompt();
    switch(choice) {
        case "Account Balance Check":
        case "1":
            account.checkBalance();
            console.log("\x1b[32m",`The current balance is: $${account.balance}`);
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
        case "Log Out":
        case "6":
            logOut();
        default:
            console.log("\x1b[31m","Incorrect command. Please enter the numeric value or string corresponding with the available commands.","\x1b[37m")
    }
} else {
    console.log("\x1b[32m","You successfully logged out.")
    process.exit(1);
}
}
}