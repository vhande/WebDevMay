
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

console.log(whoPassedExam(_students))




