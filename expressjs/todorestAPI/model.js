const mongoose= require('mongoose');
const toDoSchema = mongoose.Schema({
    username: String,
    title: String,
    completed: Boolean
});
const ToDo = mongoose.model('ToDos',toDoSchema)

module.exports= ToDo