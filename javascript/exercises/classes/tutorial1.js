// JS class
// default it has always constructor method

// first one function based, second one class based 

function app1 (username) {
    this.username = username
}

app1.prototype.getUsername = function () {
    return this.username
}

// class'i aliyosun sonra variable olarak tanimliyosun

class app {

    //define global variable always in constructor
    constructor (username) {
        this.username = username 
        this.users = [];
        this.test = function () {
            return "Function in constructor"
        } // in constructor you can define a function but it must be assigned to a variable 

    }

    getUsername() {
        return this.username
    }

    getUsers () {
        return this.users
    }

    addUser () {
        return this.users.push(this.username)
    }
    // methods can share data with each other, it will get data from getusername and use it
    toString() {
        return this.getUsername() + " " + app.getCity() //
    }

    // it returns a static data, to share data in class not allow user to call it, client side shouldnt see this. it's for sensitive data such as get token and response with request.
    static getCity() {
        return "Brussels"
    }  
}

// return always the data in an function or else they cannot share info with eachother

let variable = new app("John") // object
console.log(typeof variable)
console.log(variable.getUsername())
console.log(variable.toString())
variable.addUser()
console.log(variable.getUsers())
// variable.getCity() it's not accessible like this. you need to use the class name
console.log(app.getCity());
console.log(variable.test())