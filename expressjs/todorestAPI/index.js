const mongoose = require('mongoose');
const express = require('express');
require('dotenv').config();
const app = express()
const cors = require('cors')
mongoose.connect(process.env.URL, (err) => {
    console.log('connected to db')
})

const ToDo = require('./model')

const { home, todos, savetodo, updatetodo, deletetodo } = require('./controller')


app.use(express.json())
app.use(cors())

app.get('/', home)

app.get('/todos', todos)

app.post('/todo', savetodo)

app.put('/todos/:id', updatetodo)

app.delete('/todo/delete', deletetodo)


//set listen port
app.listen(process.env.PORT, () => console.log(`Server is running on ${process.env.PORT}`))