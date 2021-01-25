import { createRequire } from 'module';
import { Customer } from './customer_account.js';
import {Account} from './customer_account.js';
const require = createRequire(import.meta.url);
const prompt = require('prompt-sync')({sigint: true});

export function greetingATM (choice) {
    let running = true;
    while(running) {
    console.log("DOLLARSBANK ATM Welcomes You!!")
    choice = prompt('Enter a valid choice (1> Transaction 2> Open New Account)');
    switch(choice) {
        case "Transaction":
        case "1":
            Account();
            break;
        case "Open New Account":
        case "2":
            Customer();
            break;
        default:
            console.log("Incorrect command. Please enter the numeric value or string corresponding with the available commands.")
    }
}
}


