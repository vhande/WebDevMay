const mongoose = require('mongoose');
var prompt = require('prompt');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/customers',(err) => console.log('connected'))
}

// 1. create schema
const customerSchmema = new mongoose.Schema({
    fullName: String,
    email: String,
    phone: String,
    address: String,
    website: String
  })

// 2. compile schema to model
const Customer = mongoose.model('Customer', customerSchmema)

// email validation
function EmailValidation(email) {
    let domains = ['gmail.com', 'hotmail.com']
    let foundEmail = domains.filter(domain => domain === email.split('@')[1])
    // console.log(foundEmail)
    if (foundEmail.length > 0) {
        return true
    } else {
        return false
    }
  }
  
  // user validation
  function isCustomerExist(fullname){
    return Customer.exists({
        fullName:fullname
    })
    .then(res=>res)
  }
  
prompt.start();
function Menu() {
console.log(`1. Add customer\n2. Update customer\n3. Delete customer\n4. Get all customers\n5. Exit`)

function AddCustomer() {
    prompt.get(['fullName','email'], (err, customer) => {
        console.log(customer)
        Menu()
    })
   
}

prompt.get(['option'], (err,opt) => {
    switch(opt.option) {
        case '1': 
        console.log("Add customer")
        AddCustomer()
       
        break;
        case '2':
        console.log("Update customer")
        Menu()
        break;
        case '3':
        console.log("Delete customer")
        Menu()
        break;
        case '4':
        console.log("Get All Customers")
        Menu()
        break;
        case '5':
        console.log("Exit")
        process.exit()
        break;
        default:
        console.log('Invalid Option')
        Menu()
    }
})
}

Menu()