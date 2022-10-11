// // const mongoose = require('mongoose');
// // var prompt = require('prompt');

// // main().catch(err => console.log(err));

// // async function main() {
// //   await mongoose.connect('mongodb://localhost:27017/customers',(err) => console.log('connected'))
// // }

// // 1. create schema
// const customerSchmema = new mongoose.Schema({
//     fullName: {
//         type:String,
//         lowercase: true},
//     email: String,
//     phone: String,
//     address: String,
//     website: String
//   })

// // 2. compile schema to model
// const Customer = mongoose.model('Customer', customerSchmema)

// // email validation
// function EmailValidation(email) {
//     let domains = ['gmail.com', 'hotmail.com']
//     let foundEmail = domains.filter(domain => domain === email.split('@')[1])
//     // console.log(foundEmail)
//     if (foundEmail.length > 0) {
//         return true
//     } else {
//         return false
//     }
//   }
  
//   // user validation
//   function isCustomerExist(fullname){
//     return Customer.exists({
//         fullName:fullname
//     })
//     .then(res=>res)
//   }
  
// prompt.start();
// function Menu() {
//     console.log(`\x1b[36m
//         ──────▄▀▄─────▄▀▄
//         ─────▄█░░▀▀▀▀▀░░█▄
//         ─▄▄──█░░░░░░░░░░░█──▄▄
//         █▄▄█─█░░▀░░┬░░▀░░█─█▄▄█\n1. Add customer\n2. Update customer\n3. Delete customer\n4. Get all customers\n5. Exit`)

// function AddCustomer() {
//     prompt.get(['fullName','email','phone','address','website'], (err, customer) => {
//         console.log(customer)
//         // create an object from model
//         const customerObj = new Customer(customer)
//         if (isCustomerExist(customer.fullName))
//         isCustomerExist(customer.fullName)
//         .then(fullName => {
//             fullName == null ? 
//             EmailValidation(customer.email) ?
//             customerObj.save()
//             .then(data=>console.log("Customer is saved"))
//             :
//             console.log("Invalid email")
//             : console.log('Customer exists')
//         }) 
//         .finally(() => setTimeout(() => {
//             console.clear()
//             Menu()
//         }, 2000))
//     }) 
// }

// function GetAllCustomers() {
//     Customer.find({})
//     .then(data=> {
//         data.map(item=>{
//             console.table([item.fullName,item.address,item.phone,item.address,item.website])
//         })
//     })
//     .finally(() => setTimeout(() => {
//         console.clear()
//         Menu()
//     }, 100000))
//     .finally(() => {
//         console.log('To return menu press 0')
//         prompt.get(['return'], (err, answer) => {
//             if (answer.return === '0') {
//                 console.clear()
//                 Menu()
//             }
//         })
//     })
// }


// function DeleteCustomer() {
//     prompt.get(['fullname'], (err, customer) => {
//         isCustomerExist(customer.fullName)
//             .then(fullName => {
//                 fullName !== null ?
//                     Customer.findOneAndDelete({
//                         fullName:customer.fullName
//                     })
//                         .then(() => console.log(`${customer.fullName} is deleted.`))
//                     :
//                     console.log('Customer not found')
//             })
//             .finally(() => {
//                 setTimeout(() => {
//                     console.clear()
//                     Menu()
//                 }, 3000)
//             })
//     })
// }

// function UpdateCustomer() {
//     prompt.get(['fullName','email','phone','address','website'],(err, customer)=> {
//         console.log(customer)
//     })
    
// }


// prompt.get(['option'], (err,opt) => {
//     switch(opt.option) {
//         case '1': 
//         console.log("Add customer")
//         AddCustomer()
//         break;
//         case '2':
//         prompt.get(['fullname'], (err,customer)=> {
//           if(isCustomerExist(customer.fullName))
//           isCustomerExist(customer.fullName)
//             .then(fullName => {
//             fullName == null ? 
//             console.log("Customer doesn't exist") : 
//             ""
//             }) })
//         break;
//         case '3':
//         console.log("Delete customer")
//         DeleteCustomer()
//         break;
//         case '4':
//         console.log("Get All Customers")
//         GetAllCustomers()
//         break;
//         case '5':
//         console.log("Exit")
//         process.exit()
//         break;
//         default:
//         console.log('Invalid Option')
//         Menu()
//     }
// })
// }

// Menu()