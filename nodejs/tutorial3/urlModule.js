//verification, validation of url

var url = require('url');

let parsedUrl = url.parse('httplocalhost:3000/?name=Joe&age=20', true)
console.log(parsedUrl)
console.log(parsedUrl.query)
console.log(parsedUrl.query.name)
console.log(parsedUrl.query.age)
console.log(parsedUrl.hostname)

// _dirname
console.log(__dirname) // directory
console.log(__filename) // it returns full path,full directory including the file


//path module
var path = require('path')
const {writeFile} = require('fs');
console.log(path.basename(__filename)) // it only gives the file name, last part of the path
console.log(path.basename(__dirname)) // it gives the tutorial name
console.log(path.dirname(__dirname)) // it gives the directory path exc directory name
console.log(path.join('/company', 'tool.txt'))
writeFile(path.join(__dirname,'/tool.txt'),"hello",(err)=> {
    console.log("File is created")
})

