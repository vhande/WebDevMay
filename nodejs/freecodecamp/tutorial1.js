// // __dirname, __filename
// console.log(__dirname)
// console.log(__filename)

// // setInterval(()=> {
// //     console.log("Hello world")
// // }, 1000)



// const names = require('./secret')
// console.log(names)

// const os = require('os')
// //info about current user
// const user = os.userInfo()
// console.log(user)
// console.log(os.uptime())
// const currentOS = {
//     name:os.type(),
//     release: os.release(),
//     totalMem:os.totalmem(),
//     freeMem: os.freemem()
// }
// console.log(currentOS)

// const path = require('path')
// console.log(path.sep)
// const filePath = path.join('/folder/','subfolder', 'text.txt')
// console.log(filePath)
// /***/
// const base = path.basename(filePath)
// console.log(base)
// const absolute = path.resolve(__dirname,'folder','subfolder','text.txt')
// console.log(absolute)

const fs = require('fs')
// const first = fs.readFileSync('./folder/subfolder/text.txt','utf8')
// console.log(first)

// fs.writeFileSync('./folder/hello-world',`Here is the result ${first}`, {flag:'a'})

fs.readFile('./folder/hello-world', 'utf8', (err,result)=> {
    if(err) {
        console.log(err)
    }
    const first = result;
    console.log(result)
    fs.writeFile('./folder/newfolder',`${result}`,(err,result)=>{
        console.log(result)
    })
})

