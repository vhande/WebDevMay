const userInput = document.querySelector('.userinput')
const btn = document.querySelector('.btn')
const getBtn = document.querySelector('.getbtn')

//let user = prompt("Enter your username")

// let user;
// window.setTimeout(() => {
//     user = prompt("Enter your username")
// }, 3000);


// setInterval( () => {
//     user = prompt("Enter username")
//     if(JSON.parse(localStorage.getItem('students')) !==null){
//         let getStorageData = JSON.parse(localStorage.getItem('students')) // temp localstorage data
//         getStorageData.push(user.value) // add new data to temp array
//         localStorage.setItem('students',JSON.stringify(getStorageData)) // re-write array data into localstorage
//     }else{
//         let students = [] // create new array
//         students.push(user.value) // add new data to array
//         localStorage.setItem('students',JSON.stringify(students)) // re-write array data into localstorage
//     }

// }, 3000)



// Once students key i ve bos bir array olusturduk application kisminda. 

btn.addEventListener('click', () =>
{
    // localStorage.setItem("username",userInput.value)

    

    // let getStorageData = JSON.parse(localStorage.getItem('students'))
    // getStorageData.push(userInput.value) // add new data to temp array
    // localStorage.setItem('students',JSON.stringify(getStorageData)) // rewrite array
    
})

getBtn.addEventListener('click', () => {

    // let username = localStorage.getItem("username")
    // console.log(`Username is ${username}`)

    // let studentNames = JSON.parse(localStorage.getItem('students'))
    // console.log(studentNames)
    // console.log(user)
    window.open("https://google.com",'_blank', 'width=500,height=500')
})


