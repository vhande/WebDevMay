// Math Object - index.js

var result;
// PI number
result = Math.PI;

// round method
result = Math.round(2000.2);

// power method
result = Math.pow(2,3); // iki ussu uc

// square root method
result = Math.sqrt(64); // karekok

// find max number
result = Math.max(44,55,66,77,88,22,99); // it returns to the highest value

let numbers = [44,55,66,77,88,22,99];
result = Math.min(...numbers)  // it removes the array and it works.
// find min number
result= Math.min(44,55,66,77,88,22,99);

// absoulute value method
result = Math.abs(-44); // it returns a positive number 


// random number
result = Math.random() // it returns 0 to 0.999999999999 

result = Math.round(Math.random()*10)

function getRandomNumberRange(min,max) {
    return Math.round(Math.random()*(max-min) + min)
}

result = getRandomNumberRange(1,10);

console.log(result);