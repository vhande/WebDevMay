const posts = [ {
    id:1, 
    title: 'Call of Duty',
    body: "First post body"
},
 {
    id:2, 
    title: 'Velorant',
    body: "Second post body"
 }
]

// get posts 

function getLastGames () {
    console.log(posts)
}

function createPost (post,callback) {
    setTimeout(() => {posts.push(post) 
        callback()}, 3000)

} 

createPost({id:3, title: "Counter Strike", body: "Third post body"}, getLastGames)

async function Keeper1 (string) {
    return await string
}

function Keeper2(string) {
let newString = string.toUpperCase();
return newString }

function Keeper3(string) {
    let arr = string. split("");
    return arr
}

function Keeper4 (arr, index) {
    let getLetter = arr[index]
    return getLetter
    
}

function PrintIt(letter) {
    console.log(letter)
}


Keeper1('Hello friend')
.then(Keeper2)
.then(Keeper3)
.then(response => Keeper4(response,2))
.then(PrintIt)
.catch(err=> console.log(err))

console.log(Keeper1("Hello friend"))


//resolve method returning the data, when the data is ready I'll return t to you.


let promiseMe = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello World, I promise you that I will be back in 3 seconds") 
    },3000);
}) 

let promiseMe2 = new Promise((resolve, reject)=>{resolve('Hello, this is the second promise')})

let getPromiseResult = Promise.all([promiseMe,promiseMe2])

getPromiseResult
.then(response=> {console.log(response)})
console.log(promiseMe);
promiseMe.then(answer=> {console.log(answer)})