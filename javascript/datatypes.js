/*
string
number all number data types
boolean
undefined
object/array
null
*/

let result;
let typeOfVar;
result = "Hello friend";
result="Hello Friend";

console.log(result);

result= "1";
result = 1.5;

//boolean

result = true;
result = false;

// undefined 
result = undefined;

// declared variable but not assigned to a value
var x;

//objects data type - must use {}
var student = {
    name: "John", //key: value property contains a string value 
    age: 30,
    email: "john@john.com",
    isStudent: true,
    address: {
        country: "Belgium",
        city: "Brussel",
        street: "Stalingrad",
        zipcode: 1000,
        test: {
            title:"Title",
            test1: {
                anothertest: "Testtest"
            }
        }
    }
}

result = `His name is ${student.name} and he is ${student.age} years old `;
result = student.isStudent ? `His name is ${student.name} and he is ${student.age} years old. ${student.address.city} `: "He is not a student";

result = student.address.test.test1.anothertest;

// Array data type ,any data type

var numbers = [1, "string", true, null, undefined, {name: "John"}];
result = numbers;
// index numbers start from 0

result = numbers.length // how many items your array has

result = numbers[0];
result = numbers[5].name; //to access the name property of the object in the array
numbers[1] = "New string"; //to change the value of the string in the array
result = numbers;

var students = [
    {name: "Ersin", age:24, scores:[44,55,66]},
    {name: "Name", age:23},
    {name: "John", age:22}
]

result = students;
result = students[0].name;
result = students[0].scores[2];

var nestedArray = [1,2,3, [4,5,6, [7,8,9]]];
// result = nestedArray[3]; // [4,5,6, [7,8,9]]]
// result = nestedArray[3][0]; // 4
// result = nestedArray[3][3]; //  [7,8,9]
// result = nestedArray[3][3][1]; // 8

result = nestedArray[3][1];
result = nestedArray[3][3][2];





console.log(result, typeof result);

