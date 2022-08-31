let string = 'avc545fefdg343'
let arr = [...string]
console.log(arr)
let newArr = []
 arr.filter(item =>  {
    if (Number(item)){
       newArr.push(item)    
    }
})



console.log(newArr)


let numbers = [5,6,7]
let sum = new Number
for(let i = 0; i < numbers.length; i++) {

    sum += numbers[i]
    sum += ""
}

console.log(sum)


let myNum1 = new Number

myNum1 += numbers[0]
console.log(myNum1)

