var userInput = prompt("Enter a number");
const result = document.getElementById("result");

result.innerText = userInput;

console.log(typeof userInput);

// if ( isNaN(userInput)) {
//     result.innerText = "It's NaN"
// } else {
//     result.innerText = "Congrats"
// }


var random = isNaN(userInput) ? result.innerText = "It's NaN" : result.innerText = "Congrats";