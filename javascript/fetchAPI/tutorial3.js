const getBtn= document.getElementById("get")
const postBtn= document.getElementById("post")
const putBtn= document.getElementById("updateput")
const patchBtn= document.getElementById("updatepatch")
const deleteBtn= document.getElementById("del")


// get request

getBtn.addEventListener('click', (e)=>{
    console.log("hello click") 
    fetch('http://localhost:5000/api')
    .then(res=>res.json())
    .then(data=> {console.log(data)})
    e.preventDefault()
})

// put request

putBtn.addEventListener('click', e => {
    fetch('http://localhost:5000/api/3', {
        method:'PUT',
        headers: {'Content-Type':'application/json'},
        // data mustbe !JSON.stringfy()
        body:JSON.stringify({'username':'Joe Dalton'})
    })
    .then(res=>res.json())
    .then(data=>console.log(`Put request: ${data}`))
    e.preventDefault()
})

patchBtn.addEventListener('click', e=> {
    fetch('http://localhost:5000/api/2', {
            method:'PATCH',
            headers: {'Content-Type':'application/json'},
            // data mustbe !JSON.stringfy()
            body:JSON.stringify({'password':'code123'})
        })
    .then(res=>res.json())
    .then(data=>console.log(`PATCH request: ${data}`))
    e.preventDefault()
})

// postBtn.addEventListener('click', e=>{
//     e.preventDefault
//     fetch('http://localhost:5000/api'), {
//         method:'POST',
//         headers: {'Content-Type':'application/json'},
//         body:JSON.stringify({'username':'student1', 'password':'password1'})
//     .then(res=>res.json())
//     .then(data=>console.log('POST request: ',data))
// })


deleteBtn.addEventListener('click', e=> {
    e.preventDefault()
    fetch('http://localhost:5000/api/3', {method:'DELETE'})
    .then(res=>res.json())
    .then(data=>console.log('DELETE request: ',data))
})