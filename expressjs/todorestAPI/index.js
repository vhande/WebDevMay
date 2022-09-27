const { query } = require('express');
const express = require('express');
const mongoose= require('mongoose');
const app = express()
mongoose.connect('mongodb://localhost:27017/todo',(err)=> {
    console.log('connected to db')
})

const toDoSchema = mongoose.Schema({
    username: String,
    title: String,
    completed: Boolean
})

const ToDo = mongoose.model('ToDos',toDoSchema)

app.use(express.json())

app.get('/',(req,res)=>{
    res.send("ToDo restfulAPIv1.0")
})

app.get('/todos',(req,res)=> {
    console.log(req.query)
    if(req.query.title !== undefined && req.query.username !== undefined) {
        ToDo.find({ title: {"$regex": req.query.title}, username:req.query.username})
        .then(list=>{
            console.log(list)
            res.json({
                message:'ok',
                data:list
            })
        })
    } else if(req.query.title !== undefined) {
        ToDo.find({ title: {"$regex": req.query.title}})
        .then(list=>{
            console.log(list)
            res.json({
                message:'ok',
                data:list
            })
        })
    } else {
        ToDo.find({})
        .then(todos=> res.json({
            message:"ok",
            todos: todos
        }))
    }
  
})

app.post('/todo',(req,res)=> {
    const {username,title,completed} = req.body
    const todo = new ToDo({username,title,completed})
    todo.save()
    .then(answer=> {
        res.json({
            message:'saved',
            data:answer
        })
    })
})

app.put('/todos/:id',(req,res)=> {
    const{id} = req.params
    ToDo.findByIdAndUpdate(id,req.body)
    .then(result =>{
        res.json({
            message:'updated',
            data:result
        })
    })
})

app.delete('/todo/delete', (req,res)=>{
    const {title} = req.body
    ToDo.findOneAndDelete(title)
    .then(result=> {
        res.json({
            message:'deleted',
            data:result
        })
    })
})


//set listen port
app.listen(8080,()=> console.log("Server is running on 8080"))