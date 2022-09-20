const fs= require('fs') //fs is a core module


// read file
// fs.readFile('./text.txt','utf-8', (err,data) => {
//     console.log(data) // convert buffer to string
//     data.split(", ").forEach(name=>console.log(name))
// })

// read a directory
fs.readdir('./',(err,data) => {
    let jpeg= data.filter(filename=>filename.includes('.jpeg'))
    console.log(jpeg)
})

// read two files
// fs.readdir('./',(err,data) => {
// //   let text = data.filter(filename=>filename.includes('.txt'))
// //   console.log(text)
// //   text.forEach(txt=> {
// //     fs.readFile(txt, 'utf-8', (err,data) => {
// //         console.log(data.txt)
// //     }) 
// // })

function readFiles(ext) {
    fs.readdir('./'), (err,data) => {
        let txtFiles=data.filter(file=>file.includes(ext))
        txtFiles.forEach(txt=>
            fs.readFile(txt,'utf-8',(err,data)=> {
                console.log(data.txt)
            }))
    }
}

fs.writeFile('readme.txt',"Hello Nodejs",(err)=>{
    console.log("File is created")
})


fs.writeFile('readme.txt',"Changing the content",(err)=>{
    console.log("File is created")
})

fs.writeFile('./public/readme.txt','read me file', (err) => {
    console.log("File is created") 
    if (err) {
        console.log(err)
    }
})

// append file
fs.appendFile('readme.txt','Extra string appended',(err) => {
    console.log("File is appended")
})

fs.appendFile('users.json',"", (err) => {
    console.log('appended')
} )

fs.readFile('users.json','utf-8',(err,data)=>{
    console.log(data)
    let users = JSON.parse(data)
    // users.push(5)
    // fs.writeFile('users.json',JSON.stringify(users),(err)=>{
        
    // })
})

function AppendDataIntoFile(fileName,newValue) {
    fs.readFile(fileName,'utf-8', (err,data) => {
     if (err) {
     fs.writeFile(fileName,`[${newValue}]`, (err) => {
        console.log("Written")
     })
     } else {
     let arr = JSON.parse(data)
     arr.push(newValue)
     fs.writeFile(fileName,JSON.stringify(arr), (err) => {
        console.log("appended")
     }) }
    }) 
}

AppendDataIntoFile('new1.txt',4)
