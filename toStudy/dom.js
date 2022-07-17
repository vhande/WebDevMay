var p = document.createElement('p')
var txt = document.createTextNode("This is the second paragraph")
p.appendChild(txt)


var btn = document.getElementById('btn')
btn.addEventListener('click', () => {
    var div = document.getElementsByClassName('container-fluid')
    div[0].appendChild(p);
})

var first = document.getElementById('first')

var anotherP = document.createElement('p')
var anothertxt = document.createTextNode('This is the third paragraph')
anotherP.appendChild(anothertxt)

var div = document.getElementById('div')
div.appendChild(anotherP)

// div.removeChild(anotherP);

// anotherP.parentNode.removeChild(anotherP)

div.replaceChild(anotherP, first)

var input = document.getElementById("input")

input.addEventListener('change', () => {
    input.value = input.value.toUpperCase()
})
