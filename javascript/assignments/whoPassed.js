
// var _students = [
//     {
//         id:1,
//         name:'avarel',
//         course:'javascript',
//         score:45
//     },
//     {
//         id:1,
//         name:'mike',
//         course:'java',
//         score:55
//     },
//     {
//         id:1,
//         name:'george',
//         course:'javascript',
//         score:66
//     },
//     {
//         id:1,
//         name:'joe',
//         course:'python',
//         score:70
//     }
// ]

// // whoPassedExam?
// function whoPassedExam(param){
//     // code here
   
   
//     return param.score > 60;
// }


// console.log((_students.filter(whoPassedExam)))



var _students = [
    {
        id:1,
        name:'avarel',
        course:'javascript',
        score:45
    },
    {
        id:1,
        name:'mike',
        course:'java',
        score:55
    },
    {
        id:1,
        name:'george',
        course:'javascript',
        score:66
    },
    {
        id:1,
        name:'joe',
        course:'python',
        score:70
    }
]

// whoPassedExam?
function whoPassedExam(param){
    return param.filter(x => x.score > 60)
}

var passed = whoPassedExam(_students);


var input = document.getElementById("input");
var button = document.getElementById("search");
var result = document.getElementById("result");


let whoPassedArray = []

function whopassed(){

    let inputValue = input.value;

   //console.log(inputValue);

    let getStudent = _students.filter(student=>student.name == inputValue);

    console.log(getStudent.length);

   

    // if(getStudent.length > 0){

    //     let isStudentPassedExam = getStudent[0].score >=50? 'Student passed the exam':'Student failed the exam';

    //     console.log(isStudentPassedExam)

    // }else{

    //     console.log('Student not found')

    // }



    let result = getStudent.length > 0 ? (getStudent[0].score >=50? 'Student passed the exam':'Student failed the exam') : 'Student not found';

    //console.log(getStudent);

   console.log(result)    

    // _students.forEach(student=>{

    //    student.score >=50? whoPassedArray.push(student):console.log(`${student.name} failed the exam`);

    // })



    // //console.log(whoPassedArray);

    // whoPassedArray.forEach(student=>{

    //     console.log(`${student.name} passed the exam with a score of ${student.score}`)

    // })

}

var btn = document.getElementById("btn");

btn.addEventListener("click", whopassed);
// for (var i=0; i <passed.length; i++) {
//     console.log(passed[i]['name'] + " passed with the score " + passed[i]['score']);
// }

// function whoFailedExam(param) {
//     return param.filter(x => x.score < 60)
// }

// var failed = whoFailedExam(_students);
// for (var i=0; i<failed.length; i++) {
//     console.log(failed[i]['name'] + " failed with the score " + failed[i]['score']);
// }

// // console.log(whoPassedExam(_students))