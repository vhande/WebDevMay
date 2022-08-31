// DOM METHODS

var result;
result = document.getElementById('navbarSupportedContent')
result = document.getElementsByClassName('col')

result = document.getElementsByTagName('p')
Array.from(result).forEach(text =>  {
    text.innerText = "Blalalala"
})
// HTML collection'a dondugu icin ve bu bir array olmadigi icin Array.from(result) yaparak array'e donusturuyoruz


result = document.getElementsByTagName('label')
Array.from(result)

result[0].innerText = "This is a form element"


result = document.querySelector('.col') // returns the first element

result = document.querySelectorAll('.col') // returns an array of elements
result.forEach(col=>{
    console.log(col)
})



console.log("Hello")


result = localStorage.getItem('blabla')
result = localStorage.length
result = localStorage.removeItem('blabla')
result = localStorage.setItem('data', 'secret')

console.log(result)
