const student = {
    name: "John",
    age: 30,
    isAdmin: false,
    courses: ["html", "css", "js"],
    address: {city: "Kiev", postcode:5000}
}

 // obj [key] == newValue
 function updateData (obj, key, newValue) {
    return obj[key] = newValue; }

// how to update nested one
updateData(student, 'address',{city: "Brussel", street: "Stalingrad"})

// update a nested array
updateData(student, 'courses', ['phyton', 'django'])
// for in 
console.log("Result", student['age'])

// for (var key in student) {
//     //console.log(key)
//     console.log(student[key])}

for(var key in student) {
        if(key === 'address') {
            for(var key2 in student[key]) {
                console.log(student[key][key2])
            }
        }
    }


function updateObjectData(obj,key,newValue) {

}

//for of values and proprerty names in a seperated array 


// sadece keyleri aliyor, entries olsa ikisini beraber alcakti
for (var key of Object.keys(student)) {
    //console.log(key);
    console.log(student[key]); // valuelari gosteriyor
}

//console.log(Object.entries(student)[0][0]);  // gives propery name
//console.log(Object.entries(student)[0][1]); // value of proprety