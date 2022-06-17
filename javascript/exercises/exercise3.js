//Display numbers which are divisible by 5 and if you find number greater than 150 stop the loop iteration
const numbers = [12, 15, 32, 42, 55, 75, 122, 132, 150, 180, 200]

numbers.forEach(item => {
    if(item % 5 == 0 && item <150)
    console.log(item)
});


//Write a function to find the factorial of any number

function Factorial(n){
    var result = n;
    if(n ===0 || n === 1){
      return 1;
    }
    total = 1
    for (var i = n; i > 0; i-=1) {
        result = total *= i
    }
    return result
}
console.log(Factorial(3));

