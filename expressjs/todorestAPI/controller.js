const ToDo = require('./model')

module.exports= {
    home:function (req,res) {
        res.send("ToDo restfulAPIv1.0")
    },
    todos: function (req,res) {
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
    },
    savetodo: function (req,res) {
        const {username,title,completed} = req.body
        const todo = new ToDo({username,title,completed})
        todo.save()
        .then(answer=> {
            res.json({
                message:'saved',
                data:answer
            })
        })
    },
    updatetodo: function (req,res) {
        const{id} = req.params
        ToDo.findByIdAndUpdate(id,req.body)
        .then(result =>{
            res.json({
                message:'updated',
                data:result
            })
        })
    },

    deletetodo: function  (req,res) {
        const {title} = req.body
        ToDo.findOneAndDelete(title)
        .then(result=> {
            res.json({
                message:'deleted',
                data:result
            })
        })
    }

}