// async function users(){
//     let response = await fetch('https://jsonplaceholder.typicode.com/users')
//     return response.json()}


let users = new Promise((resolve, reject) => {
fetch ('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data =>{resolve(data)})
.catch(err=>reject(err))
})

// users
// .then(data=>data)
// .then(data => {
//     const arr= []
//     data.map(item => {
//     const obj = {
//         id: item.id,
//         fullname:item.name,
//         email:item.email
//     }
//     arr.push(obj)})
// return arr
// })


users
.then(data=>{
    return data.map(({id,name,username,email})=>({id,name,username,email}))
})
.then(data=>{
    console.log(data)
})

fetch ('dontreadme.txt') 
.then(res=>res.text())
.then(data=>{console.log(data)})

