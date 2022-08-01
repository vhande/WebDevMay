// DOM METHODS

var result;
result = document.getElementById('navbarSupportedContent')
result = document.getElementsByClassName('col')

result = document.getElementsByTagName('p')
Array.from(result).forEach(text =>  {
    text.innerText = "Blalalala"
})


result = document.getElementsByTagName('label')
Array.from(result)

result[0].innerText = "This is a form element"


result = document.querySelector('.col') // returns the first element

result = document.querySelectorAll('.col') // returns an array of elements
result.forEach(col=>{
    console.log(col)
})


console.log(result)

console.log("Hello")