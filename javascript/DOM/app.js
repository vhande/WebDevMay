var result;

result = document.all
result = document.URL
result = document.links // all links in a document on an array
result = document.images
result = document.scripts
result = document.forms
result = document.firstChild
result = document.body.firstElementChild.innerHTML="<h4 style='color:red'>helo</h4>"
document.Calculator = function(){
    console.log("Calculator");
}
document.NumberConvert = (number)=>{
    return parseInt(number);
}

const parser = new DOMParser();

document.ersin="hello world"
let htmlString = "<h1>Hello World</h1>";
// parse html string to real DOM object
let getRealElement = parser.parseFromString(htmlString,'text/html')
document.body.append(getRealElement.body.firstChild)
// appendChild
const range = document.createRange();
// const realDomObject = range.createContextualFragment("<h1 style='color:orange'>Hello friend</h1>");
//document.body.append(realDomObject)
// document.body.appendChild(realDomObject)
const WelcomeMessage = document.createElement("h1")
WelcomeMessage.setAttribute("style","color:orange")
WelcomeMessage.setAttribute("class","welcome-message")
WelcomeMessage.innerText="Hello Friend!"
console.log(typeof WelcomeMessage)
document.body.appendChild(WelcomeMessage)

result = document.onclick=function(){
    console.log("hello world!!!!!")
}



result = document.title
result = document.contains(welcomeMessage) // if it exists, it returns true

console.log(result)


// window objet , it's all browser, not document only
result = window;
//result = window.alert("Hello")

result = window.location
// window.location.reload()

console.log(result)

