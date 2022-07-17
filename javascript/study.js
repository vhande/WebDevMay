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