const addBook = document.querySelectorAll('button')[0]
const deleteBook =  document.querySelectorAll('button')[1]
const name = document.getElementById("book_name")
const author = document.getElementById("book_author")
const category = document.getElementById("book_category")
const date = document.getElementById("book_date")
const price = document.getElementById("price")
const tbody = document.querySelector('tbody')


// to add books to the database
addBook.addEventListener('click', (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/library',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        // must be string data type !JSON.stringify!
        body:JSON.stringify({
            "name":name.value,
            "author":author.value,
            "category":category.value,
            "date":date.value,
            "price":price.value})
    })
    .then(res=>res.json())
    .finally(window.location.reload())
})

//to delete data 
deleteBook.addEventListener('click', e => {
    e.preventDefault()
    getData()
    .then(data=>data.forEach( el => {
        fetch(`http://localhost:3000/library/${el.id}`, {
        method: 'DELETE',
      })
      .then(res => res.json()) })
    )
    })

// // to delete one by one 
tbody.addEventListener('click', (e) => {
    e.preventDefault()
    console.log(e.target)
    console.log(e.target.getAttribute("id"))
    fetch(`http://localhost:3000/library/${e.target.getAttribute("id")}`, {
        method: 'DELETE',
      })
      .then(res => res.json())
})



//to fetch data from the database
async function getData () {
    const res = await fetch('http://localhost:3000/library')
    const data = await res.json()
    return data 
}

// to put data on the table
document.addEventListener("DOMContentLoaded", (e) => {
    getData()
    .then(data => data.forEach(el => tbody.innerHTML += domGenerator(el)))})

// shape of the data
function domGenerator (obj) {
return `<tr>
<th scope="row">${obj.id}</th>
<td>${obj.name}</td>
<td>${obj.author}</td>
<td>${obj.category}</td>
<td>${obj.date}</td>
<td>${obj.price}<i class="fa fa-eur" aria-hidden="true"></i></td>
<td><a href="#"><i id= ${obj.id} class="fa fa-trash lead" aria-hidden="true"></i></a></td>
</tr>`
}