import { createRequire } from 'module';
import { Customer } from './customer_account.js';
import {LogIn} from './customer_account.js';
const require = createRequire(import.meta.url);
const prompt = require('prompt-sync')({sigint: true});

export function greetingATM (choice) {
    let running = true;
    while(running) {
    console.log('\x1b[36m%s\x1b[0m', "------------------------------" + "\n" + "DOLLARSBANK ATM Welcomes You!!" + "\n" + "------------------------------");
    console.log("Enter a valid choice: ");
    console.log('1> Transaction\n2> Open New Account');
    choice = prompt()
    switch(choice) {
        case "Transaction":
        case "1":
            LogIn();
            break;
        case "Open New Account":
        case "2":
            Customer();
            break;
        default:
            console.log("\x1b[31m","Incorrect command. Please enter the numeric value or string corresponding with the available commands.","\x1b[37m")
    }
}
}


