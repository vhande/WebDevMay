// Print all even numbers from 0 – 10

for (i=0; i <= 10; i++) {
    if(i%2==0) {
    console.log(i);}
}

// Return a Boolean if a number is divisible by 10

function divisible (number) {
    if (number % 10 == 0) {
        return true;
    } else {
        return false; }
} 

console.log(divisible(3));