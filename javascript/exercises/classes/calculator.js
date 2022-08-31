// class calculator {
//     constructor (number1,number2) {
//         this.result = null
//         this.number1 = number1
//         this.number2 = number2
//     }

//     //add 

//     add () {
//         this.result = this.number1 + this.number2
//         console.log(this.result)
//     }

//     subtract () {
//         return this.result = this.number1 - this.number2
//     }

//     multiply () {
//         return this.result =  this.number1 * this.number2
//     }

//     divide () {
//         return this.result = this.number1 / this.number2
//     }

//     toString() {
//         console.log(`Result is ${this.result}`)
//     }
// }


// let calculate = new calculator(1,2)
// calculate.add();
// calculate.divide();
// calculate.toString();


// to pass operator in the calculator 

class calc {
    constructor (number1, number2, operator) {
        this.result = 0
        this.number1 = number1
        this.number2 = number2
        this.operator = operator
        
    }

    getResult(operator) {
        this.operator = operator
        switch (operator) {
            case "+":
            this.result = this.number1 + this.number2
            break;
            case "-":
            this.result = this.number1 - this.number2
            break;
            case "*":
            this.result = this.number1 * this.number2
            break;
            case "/":
            this.result = this.number1 / this.number2
            break;
            default:
            console.log("Invalid operator")
            break;
        }
        }

        toString () {
            console.log(`${this.number1} ${this.operator} ${this.number2} = ${this.result}`)
        }


}

let math = new calc(20,30,"*")
math.getResult("+");
math.toString();