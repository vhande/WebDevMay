const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/myDB', (err)=> {
    if (err) {
        console.log('error in connection to db')
    } else {
        console.log('connected to db')
    }
  })
}

// create a schema, users sd give this info
const users = new mongoose.Schema({
    username: {
        type:String,
        required:true
    },
    password: String,
    age: Number,
    isAdmin: Boolean
})

// compile it to model
const Users = mongoose.model('Users',users) //firt one is the collection name, second one is the schema name

// create a record 
const user1 = {
    username:'root',
    password:12345,
    age:18,
    isAdmin:true
}

const _user1 = new Users(user1)

//save it to database

// _user1.save()
// .then(res=> {
//     console.log(res)
// })

// Users.find({})
// .then(res=> {
//     console.log(res) // all records
// })

// Users.find({
//     _id:'63285b91f7bb3e1f2c79cb40'
// })
// .then(res=>console.log(res))

// Users.find({
//     username:'joe'
// })
// .then(res=> console.log(res))

// Users.findByIdAndDelete('63285b9ff651711b4a52d9bc')
// .then(res=> console.log(res,'record is deleted'))

// Users.deleteMany({}, (err)=> {
//     console.log('Delete all')
// })

Users.findOne({
    username:'hande'
})
.then(user => {
if(user !== null) {
        console.log("username exists")
    } else {
        console.log("username doesnt exist")
        // save
        new Users({
            username:'hande',
            password:'1212',
            age:30,
            isAdmin: true
        }).save().then(newUser => console.log(newUser))
    }
})