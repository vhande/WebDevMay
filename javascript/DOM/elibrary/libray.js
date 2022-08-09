const addBook = document.querySelector('.addbookbtn')
const deleteAll =document.querySelector('.deleteall')
const bookName =document.getElementById('book_name')
const bookAuthor =document.getElementById('book_author')
const bookDate= document.getElementById('book_date')
const bookPrice =document.getElementById('price')
const bookCategory = document.getElementById('book_category')
const tbody = document.querySelector('tbody')


document.querySelector('.addbookbtn').addEventListener('click',(e)=>{
    fetch('http://localhost:5000/books',{
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
    })
})

async function getData () {
    let res = await fetch('http://localhost:5000/books')
    let data = await res.json()
    return data
}

document.addEventListener('DOMContentLoaded', (e)=> {
    getData() 
    .then(data => data.forEach(el => domAppend(el)))
})

deleteAll.addEventListener('click', (e)=>
{e.preventDefault()
    tbody.innerHTML = " "
    getData() 
    .then(data => {data.forEach(el => {
            fetch(`http://localhost:5000/books/${el.id}`, {method:'DELETE'})
            .then(res=>res.json())
            .then(data=>console.log('DELETE request: ',data)) 
        })
    })
})

// for(let i = 0; i < data.length; i++) {
//     fetch(`http://localhost:5000/books/${[i]}`, {method:'DELETE'})
//     .then(res=>res.json())
//     .then(data=>console.log('DELETE request: ',data))
// }
 // <tr>
    //                         <th scope="row">1</th>
    //                         <td>Thus spoke zarathustra</td>
    //                         <td>Friedrich Nietzsche</td>
    //                         <td>Philosophy</td>
    //                         <td>1883</td>
    //                         <td>10 <i class="fa fa-eur" aria-hidden="true"></i></td>
    //                         <td><a href="#"><i class="fa fa-trash lead" aria-hidden="true"></i></a></td>
    //                     </tr>

const g = t => document.createElement(t)
function domAppend(obj) {

    const tr = g('tr')
    const th = g('th')
    const td1 = g('td')
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
    tr.append(th)
    tr.append(td1,td2,td3,td4,td5)
    return tbody.append(tr) }





