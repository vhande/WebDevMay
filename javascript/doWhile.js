// do while 

var i = 0;
do {
// do something here
console.log("Hello")
i++;  // execute once and increase variable 
} while (i<=10); // pass your condition here

do {
    console.log("Hello hello")
} while(false); // even if the condition is false, it executes the code ONCE

var n = 0;
do {
 var getRandomNumber = Math.floor(Math.random() *100)
 console.log(getRandomNumber)
 n ++
} while (n<=10)


// Eger verdigin numara range de degilse tekrardan sor.
// var number;
// do { 
//     number = parseInt(prompt("Enter a number betweeen 1 and 10"))
//     console.log(number)
// } while (number < 1 || number > 10) 


//When user enters the password incorrect, decrease the rateLimit. when it is zero, you have to wait 1h.
// var number;
// const RateLimitResult = document.getElementById("rateLimit")
// const password = "12345"
// let rateLimit = 3; // 2 attempts left // 1 attempt left // 0 attempts left
// do {
//     number= prompt("Enter your password")
//     if(number !=password){
//         console.log("Wrong password")
//         rateLimit--
//         RateLimitResult.innerText = `${rateLimit} attempts left`
//     }else{
//         console.log("Correct password")
//     }
// } while(rateLimit!=0)

// while (rateLimit >0) {

// var userInput = prompt("Enter your password")
// if (rateLimit == 0) {
//     console.log("You are blocked")
//     break;
// } if (userInput != password) {
//     console.log("Wrong password")
//     rateLimit --;
//     RateLimitResult.innerText = `${rateLimit} attempts left`
// }else {
//     console.log("Coorect passwrod")
//     break;
// }
// }

var x = 0;
var total = 0

var x = 0;
var total = 0;
while(x<10){
    x++;
    total+=x;
    console.log(`${x} + ${total} = ${total}`)
}

// while(x<100) {
//     x++
//     if(x%3 == 0) {
//         console.log(x);
//         if (x>50) {
//             break;
//         }
//     }
// }


i = 100;
while (i< 200)

{   i++
    console.log(i)
    
}