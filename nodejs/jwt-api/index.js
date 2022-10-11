const express = require('express');
const app = express();
const cors = require('cors');
const jwt = require('jsonwebtoken');
require('dotenv').config()
const mongoose = require('mongoose');
// use middlewares
app.use(express.json()) // to read head or body
app.use(cors()) // require from any other source
const bcrypt = require('bcryptjs')

mongoose.connect('mongodb://localhost:27017/users',(err) => console.log('connected'))

// 1. create schema
const userSchmema = new mongoose.Schema({
    username:{
        type:String,
        unique: true
    },
    password:String
  })
  
  // 2. compile schema to model
  const User = mongoose.model('Users', userSchmema)


app.post('/signup', (req,res) => {
    const {username} = req.body;
    const {password} = req.body;
    User.find({username})
    .then (data => {
        if (data.length === 0) {
            const securepassword = bcrypt.hashSync(password,10)
            const newUser = new User ({username, password:securepassword})
            newUser.save()
            .then(answer=> {
                res.json({
                    message:'saved',
                    data:answer
                })
            })
    } else {
       res.send("User exists")
    }
    })
})


app.post('/signin', (req,res) => {
    const {username} = req.body;
    const {password} = req.body;
    User.find({username})
    .then(data => { console.log(data)
        if (data.length > 0) {
            let isPassCorrect = bcrypt.compareSync(password,data[0].password)
            if(isPassCorrect) {
            jwt.sign({username},process.env.JWT_KEY,{
                algorithm:"HS256", expiresIn:"600s"
            }, (err, token) => {
                res.json({
                    payload: req.body,
                    token:token
                })
            })
        } else {
            res.status(403).send("Username or password incorrect")
        }}
    })
})

app.post('/login', (req,res)=> {
    const {username} = req.body
    const {password} = req.body
    jwt.sign({username}, {password}, {
        algorithm:"HS256", expiresIn:"600s"
    }, (err, token) => {
        res.json({
            payload: req.body,
            token:token
        })
    })
})


app.get('/', (req,res)=> res.send("Welcome to proteted api"))

// app.post('/login', (req,res)=> {
//     const {username} = req.body
//     jwt.sign({username},process.env.PASSWORD, {
//         algorithm:"HS256", expiresIn:"600s"
//     }, (err, token) => {
//         res.json({
//             payload: req.body,
//             token:token
//         })
//     })
// })

// token from url query
const isTokenExists = (req,res,next) => {
    console.log(req.query)
    const token = req.query.apiKey
    jwt.verify(token, process.env.JWT_KEY, (err,decoded)=> {
        if(decoded !== undefined) {
            req.user = decoded
            next()
        } else {
            //forbidden
            res.status(403).send("Forbidden")
        }
    })
}

// //create middleware to validation of token 
// const isTokenValid = (req,res,next)  => {
//     console.log(req.headers['authorization'])
//     const token = req.headers['authorization']
//     jwt.verify(token, 'verysecret', (err,decoded)=> {
//         if(!err) {
//             req.user = decoded
//             next()
//         } else {
//             res.status(403).send('Forbidden')
//         }
//     })
// }

// //retrieve token as bearer
// const isTokenExists = (req,res,next) => {
//     const token = req.headers['authorization'].split(' ')[1]
//     jwt.verify(token, 'verysecret', (err,decoded)=> {
//         if (decoded !== undefined) {
//             // http 200 success response
//             req.user = decoded
//             next()
//         } else {
//             res.status(403).send('Forbidden')
//         }
//     })
// }


app.get('/profile', isTokenExists, (req,res)=> {
    res.json({
        id:1,
        username:'admin',
        followers: 100
    })
})



// set listener port number 
app.listen(3000, console.log('Server is running'))