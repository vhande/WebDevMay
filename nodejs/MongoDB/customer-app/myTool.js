const mongoose = require('mongoose');
var prompt = require('prompt');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/test', (err) => console.log('connected'))
}

// 1. create schema
const userSchmema = new mongoose.Schema({
        fullname: {
            type:String,
            lowercase: true},
        email: { type:String,
            lowercase:true},
        phone: {type:String}
})

// 2. compile schema to model
const User = mongoose.model('User', userSchmema)

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

function AddCustomer() {
    prompt.get(['email','fullname','phone'], (err, user) => {
        console.log(user)
        const newUser = new User(user)
        User.exists({email:user.email})
        .then(res=> res === null ?
            EmailValidation(user.email) ? 
            newUser.save()
            .then(data=>console.log("Customer is saved"))
            : console.log("Invalid email")
            :console.log("Customer exists") 
        )
        .finally(() => setTimeout(() => {
            console.clear()
            Menu()
        }, 2000))
    }) 
}

function deleteCustomer () {
    prompt.get(['email'], (err,user) => {
        User.exists({email:user.email})
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

function updateCustomer () {
    prompt.get(['email'], (err,user) => {
        User.exists({email:user.email})
        .then(res=> res === null ?
            (console.log("User doesn't exist"), 
            setTimeout(() => {
                console.clear();
                Menu();
              }, 2000) )
            :  prompt.get(['email','fullname','phone'], (err,userdata) => {
            User.findOneAndUpdate({email:user.email}, userdata.email === ""  ? 0 : EmailValidation(userdata.email) ? {email:userdata.email} : console.log("Invalid email"))
            .then(data=>data)
            User.findOneAndUpdate({email:user.email}, userdata.fullname !== "" ?{fullname:userdata.fullname} : 0)
            .then(data=>data)
            User.findOneAndUpdate({email:user.email}, userdata.phone !== "" ?{phone:userdata.phone} : 0)
            .then(data=>console.log("Saved"))
            .finally(() => setTimeout(() => {
                console.clear()
                Menu()
            }, 2000))
            }
            ))     
})
}

    function GetAllCustomers() {
        User.find({})
        .then(data=> {
           console.table(data.map(item=>[item.fullname,item.email]))
        })
        .finally(() => setTimeout(() => {
            console.clear()
            Menu()
        }, 100000))
        .finally(() => {
            console.log('To return menu press 0')
            prompt.get(['return'], (err, answer) => {
                if (answer.return === '0') {
                    console.clear()
                    Menu()
                }
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
    \n1. Add customer\n2. Update customer\n3. Delete customer\n4. Get all customers\n5. Exit`)

    prompt.get(['option'], (err, opt) => {
        switch (opt.option) {
            case '1':
                AddCustomer();
                break;
            case '2':
                updateCustomer();
                break;
            case '3':
                deleteCustomer();
                break;
            case '4':
                GetAllCustomers();
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