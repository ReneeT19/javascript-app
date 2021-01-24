import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const prompt = require('prompt-sync')();

export function greetingATM (choice) {
console.log("DOLLARSBANK ATM Welcomes You!!")
choice = prompt('Enter a valid choice (1> Transaction 2> Open New Account)');
}

