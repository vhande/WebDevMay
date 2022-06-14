userInput1 = prompt ("Enter a number");
userInput2 = prompt ("Enter another number");

result = document.getElementById("result");

if (isNaN(userInput1) && isNaN(userInput2)) {

    result.innerText = "Enter a valid number";

} else {
    
    var sum = parseFloat(userInput1) + parseFloat(userInput2);
    result.innerText = sum;
}