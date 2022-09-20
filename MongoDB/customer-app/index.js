const mongoose = require('mongoose');

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

// 3. customer-1 object
const customerObj = {
  fullName:"Hande Jackson",
  email:"john@gmail.com",
  phone:'1234567890',
  address:'1234 Main St',
  website:"www.john.com"
}

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

function isCustomerExist(fullname){
  return Customer.exists({
      fullName:fullname
  })
  .then(res=>res)
}



const customer1 = new Customer(customerObj)

// add data
isCustomerExist(customer1.fullName)
.then(res=>{
    if(res!==null){
        console.log('customer already exist')
    }else{
        if (EmailValidation(customer1.email)) {
            //  save to db
            console.log('true')
            customer1.save()
            .then(data=>{
                console.log(data, "SAVED")
            })
        } else {
            console.log("Please enter a valid email")
        }
    }
})

//update data
Customer.findByIdAndUpdate('632985127f39ac1591e07ed7',{
  email:'michael@gmail.com',
  website:'www.hande.com',
  phone: "4404406007060505"
})
.then(data=>console.log("updated"))

// find data
Customer.find({
  _id:'632985127f39ac1591e07ed7'
}) .then(data=> console.log(data))

//delete data
Customer.findByIdAndDelete('632985127f39ac1591e07ed7')
.then(data=>console.log(data), "deleted")