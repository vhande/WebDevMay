console.log("Node.js")
var a = 5;
var b= 10;
console.log(`Sum of these numbers are ${a+b}`)
const myArr = ["a","b","c","d",1,2,3,4,5,6,7,8,9]
myArr.forEach(item => console.log(item))

//import a module
const fetch = require('node-fetch')

fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(res=>res.json())
.then(data=>console.log(data))


