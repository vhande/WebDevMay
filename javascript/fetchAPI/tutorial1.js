// fetch APIn

//fetch ('http://localhost:5000/api')
//.then (response => response.json()) // if you are fetching text data then it's .text



fetch('http://localhost:5000/api')
.then(res=>res.json())
.then(data=>data)
.then(data=>{
    data.map(user=>{
        user.username = user.username.toUpperCase() // 'atilla' = 'atilla'.toUpperCase()
    })
    return data
})
.then(data=>console.log(data))

// async function getUsers() {
//     let response = await fetch('http://localhost:5000/api')
//     return response.json()
// }

// getUsers()
// .then(data => console.log(data))


// select tbody element
const tbodyResult= document.getElementById("result")

//fetch data
let getUsers = new Promise((resolve,reject) => {
    fetch('http://localhost:5000/api')
    .then(res=>res.json())
    .then(data=> {
        resolve(data)
    })
    .catch(err=>reject(err))
})

// get JSON data
getUsers
.then(data => {
    //iterate through the data
    data.forEach(user=> {
        //print the data
        tbodyResult.innerHTML += `<tr>
        <td>${user.id}</td>
        <td>${user.username}</td>
        <td>${user.password}</td>
    </tr>`
} )

//if you do =,it will only store one data, so you append it
});