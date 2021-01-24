import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const prompt = require('prompt');

export function createAccount() {
const properties = [
    {
        name: 'customer_name',
        validator: /^[a-zA-Z\s\-]+$/,
        warning: 'Name must be only letters, spaces, or dashes'
    },
    {
        name: 'customer_address'
    },
    {
        name: 'customer_contact_number',
        validator: /^[0-9]+$/,
        warning: 'Username must be only letters, spaces, or dashes'
    },
    {
        name: 'userId',
        validator: /^[a-zA-Z\s\-]+$/,
        warning: 'Username must be only letters, spaces, or dashes'
    },
    {
        name: 'secure_pin',
        hidden: true,
        validator: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{8,}$/,
        warning: 'Pin must have at least one uppercase, one lowercase, one number, and one special character and minimum 8 characters'
    },
    {
        name: 'verify_pin',
        hidden: true
    }
];


prompt.start();

prompt.get(properties, function (err, result) {
    if (err) { return onErr(err); }
    console.log('Command-line input received:');
    console.log('  Customer Name: ' + result.customer_name);
    console.log('  Customer Address: ' + result.customer_address);
    console.log('  Customer Address: ' + result.customer_contact_number);
    console.log('  User Id: ' + result.userId);
    console.log('  Secure Pin: ' + result.secure_pin);
    console.log('  Verify Pin: ' + result.verify_pin);
});

function onErr(err) {
    console.log(err);
    return 1;
}
}