import { createRequire } from 'module';
import { accountInfo } from './application_views.js';

const require = createRequire(import.meta.url);
const prompt = require('prompt-sync')({sigint: true});

export var Customer = function () {

let checkName = true;
while(checkName) {
    Customer.customerName = prompt("Customer name: ");
    if(Customer.customerName.match(/^[a-zA-Z\s\-]+$/)) {
    checkName = false;
    } else {
    console.log("\x1b[31m","Name must be only letters, spaces, or dashes")
    }
}

Customer.customerAddress = prompt("Customer Address: ")

let checkNumber = true;
while(checkNumber) {
    Customer.contactNumber = prompt("Customer contact number: ")
    if(Customer.contactNumber.match(/^[0-9]+$/)) {
    checkNumber=false;
    } else {
    console.log("\x1b[31m","You must enter numbers only."); 
    }
}

let checkDposit = true;
while(checkDposit){
    Customer.initialDeposit = parseFloat(prompt("Enter Initial Deposit in the format: 00.00: "));
    if(/^[+-]?(?:\d*\.)?\d+$/.test(Customer.initialDeposit)){
    checkDposit = false;
    } else {
    console.log('\x1b[31m','You must enter a number in the format: 00.00.')
    console.log("\x1b[37m","");
    }
}

Customer.userId = prompt("User Id: ");

let checkPin = true;
while(checkPin) {
    Customer.securePin = prompt("Secure Pin: ")
    if(Customer.securePin.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{8,}$/)) {
    Customer.verifyPin = prompt("Verify Pin: ")
        if(Customer.verifyPin == Customer.securePin) {
        checkPin = false;
        console.log("\x1b[32m","New account created successfully!")
        } else {console.log("\x1b[31m","Pin doesn't match.")}
    } else {
    console.log("\x1b[31m","Your pin must be at least 8 characters with at least one uppercase, one lowercase, and one number.")
    }
}
}

export var LogIn = function () {
    LogIn.userId = prompt("Enter your User Id: ");
    LogIn.securePin = prompt("Enter your securePin: ");

    if(LogIn.userId === Customer.userId && LogIn.securePin === Customer.securePin) {
        console.log("\x1b[32m",'You logged in successfully!');
        accountInfo();
    } else {console.log("\x1b[31m",'Your User Id or Pin is incorrect.')}
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
    console.log('\x1b[32m',`Success! Your current balance is: ${this.balance}`);
    return amount;
};

BankAccount.prototype.withdraw = function(amount) {
    amount = parseInt(prompt("Enter amount: "));
    if(amount <= this.balance) {
        this.balance -= amount;
        this.addTransaction(amount);
        console.log("\x1b[32m",`Success! Your current balance is: ${this.balance}`);
        return amount;
    } else {
    console.log("\x1b[31m","Unsuccessful! Your current balance is insufficient.");
    return this.balance;
    }
};

BankAccount.prototype.printTransactions = function () {
    this.record
      .slice()
      .reverse()
      .forEach(function (value, index) {
        if (index === 0) {
          console.log("\x1b[32m","Print transactions history\n ");
          console.log("\x1b[37m","");
        }
        console.log(value);
      });
  };

  BankAccount.prototype.addTransaction = function (amount) {
    let str = "The transaction amount is: " + amount + " and the current balance: " + this.balance;
    this.record.push(str);
  };

export function updatePin() {
    const newPin = prompt("Update Pin: ");
    if(newPin.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{8,}$/)) {
        Customer.securePin = newPin;
        console.log("\x1b[32m",`Success! Customer's new Pin is: ${Customer.securePin}`);
    } else {
        console.log('\x1b[31m','Your pin must be at least 8 characters with at least one uppercase, one lowercase, and one number.');
    }
}
