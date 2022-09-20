// process object
// to make command line application
// to pass tokens for example 
let commands = process.argv
// console.log(typeof parseInt(commands[2]),parseInt(commands[3]))
// function getSumOfTwoNumbers(a,b) {
//     return a+b
// }
// console.log(getSumOfTwoNumbers(parseInt(commands[2]),parseInt(commands[3])))

// let users = ['jane','joe','jim', 'john']

// function getUser(name) {
//     return users.filter(user => user === name)
// }

// let result = getUser(commands[2])
// console.log(result)

// require('dotenv').config()
// console.log(process.env.TOKEN)

const link  = commands[3]
// const fileFormat = commands[5]
const fileName = commands[5]

// console.log(`--link ${link} --convert ${fileFormat}`)

const fs = require('fs');
const ytdl = require('ytdl-core');
ytdl(link)
  .pipe(fs.createWriteStream(fileName));node-ytdl-core-v2
