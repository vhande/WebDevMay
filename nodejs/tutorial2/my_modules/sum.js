const fetch = require('node-fetch')


//module.exports = [1,2,3,4,5,6]

// module.exports = function (a,b) {
//     return a + b
// }

module.exports = {
    getName:function(name) {
        return name
    },
    getAge: function(age) {
        return age
    },
    getTodos:async function() {
        let res = await fetch('https://jsonplaceholder.typicode.com/todos')
        let data = await res.json()
        return data
    }
}

