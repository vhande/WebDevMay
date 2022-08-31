var myArr = [];
var myNumArr = [5,6,3,8,666,9,2,11];
var myCharArr= ["c", "f", "a", "b", "g"];
//push method arrayin sonuna data ekliyo

myArr.push(1);
myArr.push("a");
myArr.push(true);
myArr.push(null);
myArr.push({name: "John"});

// pop method

myArr.pop()   // it deletes the last item

// shift method

myArr.shift() // it removes the first item from the beginning


// join method

result = myArr.join("-") // It makes array items a long string // and parantezin icine koydugun seyi aralara ekliyor

// sort method 

result = myCharArr.sort(); //letters are correctly sorted

result = myNumArr.sort(function(a,b) {
    return a-b
})    //rakamlari bastan sonra sort ediyo, sondan basa icin b-a


// concat method

result = myNumArr.concat(myCharArr);

// iteration methods {for, forEach, map, filter}

for(var i=0; i<result.length; i++) {
    console.log(result[i]);
}


// for each is basically for loop, it takes three variables, last 2 is not required. It prints all value, their index, and the array itself  



result.forEach(function(value,index,arrayitself) {   //index and arrayitself not required
    console.log(value,index,arrayitself)
})

// function newFlorLoop (value, index, arrayitsef) {
//     console.log(value, index, array itself)
// }
// result.forEach(newForLoop);

// map method IT CREATES A NEW ARRAY BACKGROUND
//result.map(newForLoop);

numbers = [4,5,6,7,4,3,13,5666,7];

// var total = 0;
// for ( var i = 0; i < numbers.length; i++) {
//    // console.log(myNumArr[i])
//     total += numbers[i]
//     console.log(total)
// }


// var total = 0;
// numbers.forEach(function(n){
//     total += n
// })

// numbers.forEach((n)=>total+=n)
// result = `Total result is ${total}`



// for (i=0; i<numbers.length; i++) {
//     total += numbers[i];
// }

//filter method
function filter (value) {
    return value >10;
}

result = numbers.filter(filter);

// result = numbers.filter(function(value) {
//     return value >= 10;
// })

let posts =[
    {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      "userId": 1,
      "id": 2,
      "title": "qui est esse",
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
      "userId": 1,
      "id": 3,
      "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
      "userId": 1,
      "id": 4,
      "title": "eum et est occaecati",
      "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    },
    {
      "userId": 1,
      "id": 5,
      "title": "nesciunt quas odio",
      "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
    }]

    result = posts.filter(value => {
        return value.id === 3
    })


    function findById(id) {
        return posts.filter(value => value.id === id);
    }

    result = findById(5);

console.log(result);