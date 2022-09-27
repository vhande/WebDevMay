//import express module
const express = require('express');
const server = express();
const bodyParser = require('body-parser')

// use bodyParser middleware
server.use(bodyParser({
    extended:true
}))

// what is your endpoint , second parameter res and req
server.get('/',(req,res)=>{
    //display html, what user will see
    //res.send('Hello World')
    /*res.json({
        id:1,
        username:'admin'
    })*/
   
    res.json([{id:1},{id:2}])
    console.log(req.query)
    console.log(req.body)
})
//params
server.get('/:id',(req,res)=>{
    console.log(req.params)
    res.json({
        id:1,
        paramResult: req.params
    })
    console.log(req.ip)
})

//post http request
server.post('/',(req,res)=>{
    console.log(req.body)
    res.json({
        username:req.body.username,
        password:req.body.password
    })
})


server.listen(8080, ()=>{ //set port number
    console.log("Server is running on 8080")
})