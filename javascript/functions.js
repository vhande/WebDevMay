console.log("Test");

/*
regular function
arrow function 
*/

// function getSum () {
//     // function scope
//     // return 0; basa yazarsan kalan functin will be ignored
//     var getResult = 1 + 1;
//     console.log("getSumFunc", getResult);
//     return 5;
// }

// getSum(); // called function
// console.log(getSum());

// function getSum (n1, n2) {
//     //console.log(n1,n2);
//     return n1 + n2; 

// }

// // getSum("Hello world", [1,2,3,4]);
// // getSum({id:1},null)

// console.log(getSum(3,5));

// var student = {
//     name:"John", age:25
// };

// function getStudentName(studentObj) {
//     console.log(StudentObj.name);
// }

// getStudentName(student);

var student = {
    name:"John", age:25, isStudent:true, isTeacher:false, scores:[44,55,66,77]
}
function verifyStudent (studentParam){
    //console.log(studentParam) // function scope
    let isStudent = studentParam.isStudent;
    console.log(isStudent);
    return isStudent ? ` NAME: ${studentParam.name} SCORES:${studentParam.scores.toString()}`: "He is not a student";
}


//arrow function
const verifyStudent2 = studentParam => {

    let isStudent = studentParam.isStudent;
    console.log(isStudent);
    return isStudent ? ` NAME: ${studentParam.name} SCORES:${studentParam.scores.toString()}`: "He is not a student";
}

const getSumofNumbers = (n1, n2) => n1 + n2;
const testArrowFunc = () => console.log("Hello Arrow Func");

console.log(getSumofNumbers(4,5));
testArrowFunc();

// BMI calculator 

function getBMI(height,weight) {
    var result = weight / (height * height);
    console.log(result);
    return 0;
}

getBMI(1.85,65);

function netto(salary,taxt) {
    
}

// console.log(getBMI(1.85,65));

// netto calculator

// function netto(salary,tax) {
//     return salary - (salary / 100 * tax);
// }

// console.log(netto(1000,20));


// const BMI =  (weight,height) => height / (weight * weight);
// console.log(BMI(1.85,65));

// const netto1 = (salary,tax) => salary - (salary / 100 * tax);
// console.log(netto1(2000,30));