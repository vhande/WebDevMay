var myArr = [];
var myNumArr = [5,6,3,8,666,9,2,11];
var myCharArr= ["c", "f", "a", "b", "g"];
//push method arrayin sonuna data ekliyo

myArr.push(1);
myArr.push("a");
myArr.push(true);
myArr.push(null);
myArr.push({name: "John"});

// pop method

myArr.pop()   // it deletes the last item

// shift method

myArr.shift() // it removes the first item from the beginning


// join method

result = myArr.join("-") // It makes array items a long string // and parantezin icine koydugun seyi aralara ekliyor

// sort method 

result = myCharArr.sort(); //letters are correctly sorted

result = myNumArr.sort(function(a,b) {
    return a-b
})    //rakamlari bastan sonra sort ediyo, sondan basa icin b-a


// concat method

result = myNumArr.concat(myCharArr);

// iteration methods {for, forEach, map, filter}

for(var i=0; i<result.length; i++) {
    console.log(result[i]);
}


// for each is basically for loop, it takes three variables, last 2 is not required. It prints all value, their index, and the array itself  



result.forEach(function(value,index,arrayitself) {   //index and arrayitself not required
    console.log(value,index,arrayitself)
})

// function newFlorLoop (value, index, arrayitsef) {
//     console.log(value, index, array itself)
// }
// result.forEach(newForLoop);

// map method IT CREATES A NEW ARRAY BACKGROUND
//result.map(newForLoop);

numbers = [4,5,6,7,4,3,13,5666,7];

var total = 0;
for ( var i = 0; i < numbers.length; i++) {
   // console.log(myNumArr[i])
    total += numbers[i]
    console.log(total)
}

numbers.forEach(function(n){
    total += n
})



//console.log(result.length);