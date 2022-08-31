var d = new Date()
var year = d.getFullYear()
console.log(year)

var arr = new Array("a", "b", "c"); 
console.log(arr[1]);

const obj1 = {
    a: 0,
    b: 2,
    c: 4
  };
  const obj2 = Object.assign({c: 5, d: 6}, obj1);
  console.log(obj2.c, obj2.d);



  let arr1 = ['Hande', 29, 'hande@hande.com']
  let [name,age,email] = arr1


console.log(name)


var newObj = {
    name:"Hande",
    age:42,
    city: "Ankara"
}

var {name: firsName, age:years, city:whereToLive } = newObj
console.log(whereToLive)


let numbers = [1,2,3,4,5]

function containsAll (arr,...nums) {
    
    for (let num of nums) {
        if (arr.indexOf(num) === -1) {
        return false
        }
    }

    return true

}

console.log(containsAll(numbers,3,4))

//complete the function
function Add(...numbers){
    var sum = 0
    for (let num of numbers) {
        sum += num
    }
    return sum
    
}

console.log(Add(1,2,3));
console.log(Add(4,14,5,9,14));
console.log(Add(2,36));

const obj3 = { foo: 'bar', x: 42 };
const obj4 = { foo: 'baz', y: 5 };
const merge = (...objects) => ({ ...objects });

let mergedObj = merge (obj1, obj2);
// { 0: { foo: 'bar', x: 42 }, 1: { foo: 'baz', y: 5 } }

let mergedObj2 = merge ({}, obj1, obj2);
// { 0: {}, 1: { foo: 'bar', x: 42 }, 2: { foo: 'baz', y: 5 } }

console.log(mergedObj)
const mergedTry = {...obj3, ...obj4}
console.log(mergedTry)

function myFunction(a,n) {
    console.log(a[n-1])
}

myFunction('abcd',1)
myFunction('zyxbwpl',5)
myFunction('gfedcba',3)


function myFun (a, b)
{
for ( let v in a) {
if (b === v) {
return true
}
return false 
}
}

console.log(myFun({ a: 0, b: 2, c: 4 }, 'b'))

let saying = "Hello"
let bye = 345
console.log('Hande said', saying, 'then she said', bye)

console.log(typeof NaN)

const numberss = [1,25,3,4,5]

numberss.sort((a, b) => a - b)
 
for (let i = 0; i < numberss.length; i++) {
    if (numberss[i] == 5) {
       console.log(numberss[i])
}
}


const products = [
    {name:"klavye", price:1115},
    {name:"mouse", price:815},
    {name:"bilgisayar", price:8815},
    {name:"kulaklik", price:1815},
    {name:"ses sistemi", price:11815},
    {name:"klphone", price:9815},
]

for (let i = 0; i < products.length; i++) {
    if (products[i].price < 2000) {
     console.log(products[i].name)  
    }

}


var compare = "2" / 3
console.log(compare)

var q = y = 3;
numnum = [1,2,3].fill(0,q,y)
console.log(numnum[0] *2)

function hello () {
    return "Hello World!"
}

console.log(typeof undefined)