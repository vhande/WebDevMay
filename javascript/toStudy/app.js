document.getElementById("h1").innerHTML = "Hello Hello";


//var username = document.getElementById("input").value;

var submit = document.getElementById("submit");

function printMessage () {
   var username = document.getElementById("input").value;
   if (username == "Ersin")
   {
    document.getElementById("message").innerHTML = "Ooo Ersin Hosgeldin karsim bi cay ic"
   } else
   document.getElementById("message").innerHTML = `Hello ${username}`;
   
}

submit.addEventListener("click", printMessage);

var agree =document.getElementById("agree");

function change () {
    var str = document.getElementById("statement").innerHTML;
    document.getElementById("statement").innerHTML = str.replace("coffee", "tea").replace("cake","fruit");
}

agree.addEventListener("click", change);