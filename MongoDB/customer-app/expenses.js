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
    },
    expensename: {
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
    .finally(() => setTimeout(() => {
        console.clear()
        Menu()
    }, 2000))
    
    : 
    User.findOne({name:user.name})
    .then(data =>  {
        total = Number(user.income) + Number(data.income)
        console.log(total,"this is total")
        User.findOneAndUpdate({name:user.name}, {income:total})
        .then(data=>data)
        .finally(() => setTimeout(() => {
            console.clear()
            Menu()
        }, 2000))
    }
    )
)})
}

function addExpense () {
    prompt.get(['name','expense','amount'], (err,user) => {
    User.findOneAndUpdate({name:user.name}, {$push:{expense:user.amount}})
    .then(data=>data)
    User.findOneAndUpdate({name:user.name}, {$push:{expensename:user.expense}})
    .then(data=>console.log('Expense added'))
    .finally(() => setTimeout(() => {
        console.clear()
        Menu()
    }, 2000))
    })
  
}

function showAll () {
    prompt.get(['name'], (err,user) => { 
        User.findOne({name:user.name})
        .then(data=> console.table([data.expensename,data.expense])) 
        .finally(() => {
            console.log('To return menu press 0')
            prompt.get(['return'], (err, answer) => {
                if (answer.return === '0') {
                    console.clear()
                    Menu()
                }
            })
        })
    })
}

function deleteExpense () {
    prompt.get(['name','expense'], (err,user) => {
        User.exists({name:user.name})
        .then(res=> res === null ?
            console.log(`User doesn't exist`)
            : 
            User.findOneAndDelete({
                email:user.email   })
            .then(() => console.log('Deleted'))
            )
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
       data.expense.map(item=> expenses += Number(item))
      console.log(Number(total) - Number(expenses)) 
    }) 
    .finally(() => {
        console.log('To return menu press 0')
        prompt.get(['return'], (err, answer) => {
            if (answer.return === '0') {
                console.clear()
                Menu()
            }
        })
    })
    })
}

prompt.start();
function Menu() {
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
        case '3':
            showAll()
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