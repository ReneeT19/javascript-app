import { createRequire } from 'module';
import { accountInfo } from './application_views.js';

const require = createRequire(import.meta.url);
const prompt = require('prompt-sync')({sigint: true});

export var Customer = function () {

Customer.customerName = prompt("Customer name: ");
Customer.customerAddress = prompt("Customer Address: ")
Customer.contactNumber = prompt("Customer contact number: ")
Customer.userId = prompt("User Id: ");
Customer.securePin = prompt("Secure Pin: ")
Customer.verifyPin = prompt("Verify Pin: ")
Customer.initialDeposit = parseInt(prompt("Enter Initial Deposit in the format: 00.00: "))
}

export var LogIn = function () {
    LogIn.userId = prompt("Enter your User Id: ");
    LogIn.securePin = prompt("Enter your securePin: ");

    if(LogIn.userId === Customer.userId && LogIn.securePin === Customer.securePin) {
        console.log('You logged in successfully.');
        accountInfo();
    } else {console.log('Your User Id or Pin is incorrect.')}
}


export function BankAccount () {
    this.balance = Customer.initialDeposit;
    this.record = [];
}

BankAccount.prototype.checkBalance = function() {
    return this.balance;
}

BankAccount.prototype.deposit = function(amount) {
    amount = parseInt(prompt("Enter amount: "));
    return this.balance += amount;
}

BankAccount.prototype.withdraw = function(amount) {
    amount = parseInt(prompt("Enter amount: "));
    return this.balance -= amount;
}

BankAccount.prototype.printTransactions = function(record) {
    this.record.push(record);
};



// module.exports = Customer;
// properties = [
//     {
//         name: 'customer_name',
//         validator: /^[a-zA-Z\s\-]+$/,
//         warning: 'Name must be only letters, spaces, or dashes'
//     },
//     {
//         name: 'customer_address'
//     },
//     {
//         name: 'customer_contact_number',
//         validator: /^[0-9]+$/,
//         warning: 'Username must be only letters, spaces, or dashes'
//     },
//     {
//         name: 'userId',
//         validator: /^[a-zA-Z\s\-]+$/,
//         warning: 'Username must be only letters, spaces, or dashes'
//     },
//     {
//         name: 'secure_pin',
//         hidden: true,
//         validator: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{8,}$/,
//         warning: 'Pin must have at least one uppercase, one lowercase, one number, and one special character and minimum 8 characters'
//     },
//     {
//         name: 'verify_pin',
//         hidden: true
//     }
// ];

// prompt.start();

// prompt.get(properties, function (err, customer) {
    
//     if (err) { return onErr(err); }
//     console.log('Command-line input received:');
//     console.log('  Customer Name: ' + customer.customer_name);
//     console.log('  Customer Address: ' + customer.customer_address);
//     console.log('  Customer Address: ' + customer.customer_contact_number);
//     console.log('  User Id: ' + customer.userId);
//     console.log('  Secure Pin: ' + customer.secure_pin);
//     console.log('  Verify Pin: ' + customer.verify_pin);

//     // var customer = new Object();

// });

// function onErr(err) {
//     console.log(err);
//     return 1;
// }
