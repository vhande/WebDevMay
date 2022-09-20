const fs = require('fs') // import fs module

// //rename file
// fs.rename('notes.txt','notes.js',(err) => {
//     if(err) throw err;
//     console.log('file renamed')
// })

// //find files and rename them
// fs.readdir('./',(err,files) => {
//     let fileNames = files.filter(file=>file.includes('12sd'))
//     fileNames.forEach((file,index) => {
//         console.log(file)
//         let newName = `tutorial-${index+1}.txt`
//         console.log(newName)
//         fs.rename(file,newName,(err)=> {
//             console.log('renamed')
//         })
//     })
// })

// delete file
// fs.rm('company.txt', (err)=> {
//     console.log("File is deleted")
// })

//unlink method 
// fs.unlink('tutorial-1.txt', (err)=> {
//     console.log("Deleted")
// })

// //delete a folder
// fs.rmdir('./test',(err) => {
//     console.log('folder deleted')
// })

// fs.rmdir('./test1', {recursive:true, force: true}, (err)=> {
//     console.log('deleted')
// })

//exists method
// fs.exists('movies.txt',(result)=> {
//     console.log(result ? 'file exist' : 'file doesnt exist')
// })