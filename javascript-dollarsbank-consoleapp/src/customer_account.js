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
    this.balance += amount;
    this.addTransaction(amount);
    console.log(`Success! Your current balance is: ${this.balance}`);
    return amount;
};

BankAccount.prototype.withdraw = function(amount) {
    amount = parseInt(prompt("Enter amount: "));
    if(amount <= this.balance) {
        this.balance -= amount;
        this.addTransaction(amount);
        console.log(`Success! Your current balance is: ${this.balance}`);
        return amount;
    } else {
    console.log("Unsuccessful! Your current balance is insufficient.");
    return this.balance;
    }
};

BankAccount.prototype.printTransactions = function () {
    this.record
      .slice()
      .reverse()
      .forEach(function (value, index) {
        if (index === 0) {
          console.log("transactions history\n ");
        }
        console.log(value);
      });
  };

  BankAccount.prototype.addTransaction = function (amount) {
    let str = "transaction amount " + amount + " current balance: " + this.balance;
    this.record.push(str);
  };

export function updatePin() {
    const newPin = prompt("Update Pin: ");
    return Customer.securePin = newPin;
}



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
