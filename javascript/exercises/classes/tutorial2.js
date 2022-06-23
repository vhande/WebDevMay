// parent class 

class person {
    constructor (name,age) {
        //
        this.name = name;
        this.age = age;
    }
}

// child class

class student extends person {  // to inherit data from person
    constructor(name,age,role) {
        super(name,age)
        this.role = role;
    }
}

class teacher extends person {
    constructor(name,age,role) {
        super(name,age)
        this.role = role;
    }

}

let user = new student ("Hande", 23, "student") 
let user2 = new teacher ("Atilla", 24, "teacher")
console.log(user)
console.log(user2)