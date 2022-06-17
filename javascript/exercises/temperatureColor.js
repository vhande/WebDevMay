function myFunc() {
    console.log("Hello World");
    var temp = document.getElementById("temp").value;

    if (temp <= 20) {
        // var red = document.getElementById("cold");
        // console.log(red);
        // red.style.color = "red";
        document.getElementById("cold").style.color = "green";
    
    
    } else {
        var green = document.getElementById("hot");
        green.style.color = "green";
        // document.getElementById("hot").style.color="red";
    }
}

var tempBtn= document.getElementById("btn");
tempBtn.onclick = myFunc;