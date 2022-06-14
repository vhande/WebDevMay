
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

for (var i=0; i <passed.length; i++) {
    console.log(passed[i]['name'] + " passed with the score " + passed[i]['score']);
}

function whoFailedExam(param) {
    return param.filter(x => x.score < 60)
}

var failed = whoFailedExam(_students);
for (var i=0; i<failed.length; i++) {
    console.log(failed[i]['name'] + " failed with the score " + failed[i]['score']);
}

// console.log(whoPassedExam(_students))




