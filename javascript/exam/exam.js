// putting data in the database
const addBtn = document.getElementById('button-addon2')
const deleteBtn = document.querySelectorAll(".btn")[1]
const input = document.getElementById("input")
const ul = document.querySelector("ul")

// add items to the database
addBtn.addEventListener('click',(e)=>{
    fetch('http://localhost:5000/list',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        // must be string data type !JSON.stringify!
        body:JSON.stringify({
            "Item":input.value
        })
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(`PUT request: ${data}`)
    .finally(window.location.reload())
    })
})

//fetch from the database
async function getData () {
    let res = await fetch('http://localhost:5000/list')
    let data = await res.json()
    return data
}

//put the items on the list on the webpage
document.addEventListener('DOMContentLoaded', (e)=> {
    getData() 
    .then(data => data.forEach(el => domGenerator(el)))
})

//delete all items 
deleteBtn.addEventListener('click', (e)=>
{e.preventDefault()
    getData() 
    .then(data => {data.forEach(el => {
            fetch(`http://localhost:5000/list/${el.id}`, {method:'DELETE'})
            .then(res=>res.json())
            .then(data=>console.log('DELETE request: ',data)) 
        })
    })
})



const g = t => document.createElement(t)

// to create a list item and delete them by one by
function domGenerator(obj) {
    const li = g('li')
    const text = document.createTextNode(obj.Item)
    li.className = "list-group-item p-3"
    const link = g('a')
    link.href="#"
    const trash = g('i')
    trash.setAttribute("id", obj.id)
    trash.className = "fa fa-trash lead p-3"
    trash.setAttribute("aria-hidden","true")
    trash.setAttribute("style", "color:#1C3879")
    
    link.append(trash)
    li.append(link)
    li.append(text)
    ul.append(li)

    trash.addEventListener('click', e => { fetch(`http://localhost:5000/list/${e.target.getAttribute("id")}`, {method:'DELETE'})
    .then(res=>res.json()) 
    e.preventDefault() })}


/* <li class="list-group-item p-3"><a href="#"><i class="fa fa-trash lead p-3" aria-hidden="true"></i></a>First item</li> */

