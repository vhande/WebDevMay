const mongoose = require('mongoose');
var prompt = require('prompt');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/expense', (err) => console.log('connected'))
}

// 1. create schema
const userSchmema = new mongoose.Schema({
    name: {
        type:String,
    },
    income: {
        type:Number,
        },
    expense: {
        type:Array
    }
})

// 2. compile schema to model
const User = mongoose.model('User', userSchmema)


function addIncome() {
prompt.get(['name','income'], (err,user) => {
    const newUser = new User(user)
    let total = 0;
    User.exists({name:user.name}) 
    .then(res => res === null ? newUser.save() 
    .then(data=>console.log("Income is saved"))
    
    : 
    User.findOne({name:user.name})
    .then(data =>  {
        total = Number(user.income) + Number(data.income)
        console.log(total,"this is total")
        User.findOneAndUpdate({name:user.name}, {income:total})
        .then(data=>data)
    }
    )
)})
}

function addExpense () {
    prompt.get(['name','expense','amount'], (err,user) => {
    User.findOneAndUpdate({name:user.name}, {$push:{expense:user.amount}})
    .then(data=>console.log('Expense added'))
    .finally(() => setTimeout(() => {
        console.clear()
        Menu()
    }, 2000))
    })
  
}


function calculate () {
    prompt.get(['name'], (err, user) => {
      let total = 0;
      let expenses = 0;
      User.findOne({name:user.name})
      .then(data => {total= data.income
       data.expense.map(item=> expenses += item)
      console.log(Number(total) - Number(expenses))
    }) 
    })
}

prompt.start();
function Menu() {4
    console.log(`\x1b[36m
        █▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
        █░░╦─╦╔╗╦─╔╗╔╗╔╦╗╔╗░░█
        █░░║║║╠─║─║─║║║║║╠─░░█
        █░░╚╩╝╚╝╚╝╚╝╚╝╩─╩╚╝░░█
        █▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█
        \n1. Add an income\n2. Add an expense\n3. See all expenses\n4. How much do I have? \n5. Exit`)
prompt.get(['option'], (err, opt) => {
    switch (opt.option) {
        case '1':
            addIncome()
            break;
        case '2':
            addExpense()
            break;
        case '4':
            calculate()
            break;
        default:
            console.log('Invalid Option')
            Menu()
    }
})
}
Menu()