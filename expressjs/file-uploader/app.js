const express = require('express')
const cors = require('cors')
const multer = require('multer')
const { application } = require('express')

// server 
const server = express()

//user middlewares
server.use(cors())
server.use(express.json())
server.use('/uploads', express.static('./uploads'))

server.get('/', (req, res) => {
    res.json({
        message: 'Welcome to restfulAPI'
    })
})

const storage = multer.diskStorage({
    destination: (req, file, callback) => callback(null, './uploads'),
    filename: (req, file, callback) => callback(null, file.originalname)
})

const filter = (req,file,callback) =>  {
    let image = ['image/jpeg','image/png']
    let valid = image.filter(item=> item === file.mimetype)
    if (valid.length > 0) {
        callback(null, true)
    } else {
        callback(new Error("Now allowed"))
    }
}

const uploader = multer({ 
    storage, 
    fileFilter: filter
 })

server.post('/', uploader.single('document'), (req, res) => {
    console.log(req.file.path) // display file location
    res.json({
        msg: 'ok'
    })
})


//port 
server.listen(4000, () => {
    console.log('Server is running on 4000')
})