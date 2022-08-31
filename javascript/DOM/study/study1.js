const addBook = document.querySelector('.addbookbtn')
const deleteAll =document.querySelector('.deleteall')
const bookName =document.getElementById('book_name')
const bookAuthor =document.getElementById('book_author')
const bookDate= document.getElementById('book_date')
const bookPrice =document.getElementById('price')
const bookCategory = document.getElementById('book_category')
const tbody = document.querySelector('tbody')

// putting data in the database
document.querySelector('.addbookbtn').addEventListener('click',(e)=>{
    fetch('http://localhost:3000/library',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        // must be string data type !JSON.stringify!
        body:JSON.stringify({
            "Name":bookName.value,
            "Author":bookAuthor.value,
            "Category":bookCategory.value,
            "Date":bookDate.value,
            "Price":bookPrice.value
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
    let res = await fetch('http://localhost:3000/library')
    let data = await res.json()
    return data
}

//put the items on the list on the webpage
document.addEventListener('DOMContentLoaded', (e)=> {
    getData() 
    .then(data => data.forEach(el => domAppend(el)))
})

//delete all items 
deleteAll.addEventListener('click', (e)=>
{e.preventDefault()
    tbody.innerHTML = " "
    getData() 
    .then(data => {data.forEach(el => {
            fetch(`http://localhost:3000/library/${el.id}`, {method:'DELETE'})
            .then(res=>res.json())
            .then(data=>console.log('DELETE request: ',data)) 
        })
    })
})

// // Deleting items by one by when clicking on the trash icon
//    tbody.addEventListener('click', (e) => {
//     fetch(`http://localhost:3000/library/${e.target.getAttribute("id")}`, {method:'DELETE'})
//     .then(res=>res.json()) 
//     e.preventDefault() })

//     //console.log(e.target)
//     //console.log(e.target.getAttribute("id")) 


// Template of the <tr>
 // <tr>
    //                         <th scope="row">1</th>
    //                         <td>Thus spoke zarathustra</td>
    //                         <td>Friedrich Nietzsche</td>
    //                         <td>Philosophy</td>
    //                         <td>1883</td>
    //                         <td>10 <i class="fa fa-eur" aria-hidden="true"></i></td>
    //                         <td><a href="#"><i class="fa fa-trash lead" aria-hidden="true"></i></a></td>
    //                     </tr>

//function to create DOM elements
const g = t => document.createElement(t)

// function to create a line on the table
function domAppend(obj) {
    const tr = g('tr')
    const th = g('th')
    const td1 = g('td')
    const id = document.createTextNode(obj.id)
    th.append(id)
    const name = document.createTextNode(obj.Name)
    td1.append(name)
    const td2 = g('td')
    const author = document.createTextNode(obj.Author)
    td2.append(author)
    const td3 = g('td')
    const cathegory = document.createTextNode(obj.Category)
    td3.append(cathegory)
    const td4 = g('td')
    const date = document.createTextNode(obj.Date)
    td4.append(date)
    const td5 = g('td')
    const price = document.createTextNode(obj.Price)
    td5.append(price)
    const td6 = g('td')
    tr.append(th)
    tr.append(td1,td2,td3,td4,td5,td6)
    const euro = g('i')
    euro.className = "fa fa-eur"
    euro.setAttribute("aria-hidden","true")
    td5.append(euro)
    trash = g('i')
    const link = g('a')
    link.href="#"
    trash.setAttribute("id", obj.id)
    trash.className = "fa fa-trash lead"
    trash.setAttribute("aria-hidden","true")
    link.append(trash)
    td6.append(link)
    tbody.append(tr) 

    trash.addEventListener('click', e => { fetch(`http://localhost:3000/library/${e.target.getAttribute("id")}`, {method:'DELETE'})
    .then(res=>res.json()) 
    e.preventDefault() })}
