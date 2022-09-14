// Custom modules
// const SumModule = require('./my_modules/sum')
const {getName,getAge,getTodos} = require('./my_modules/sum')

// console.log(getName('hande'))
// console.log(getAge(29))
// getTodos()
// .then(data=> console.log(data))


const {add,sub,divide,multiply} = require('./my_modules/calculator')
console.log(add(1,2))
console.log(sub(1,2))
console.log(divide(1,2))
console.log(multiply(1,2))

