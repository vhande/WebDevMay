const student = {
    name: "Joe",
    age: 25,
    education: "Software Developer",
    projects: ['a', 'b', 'c', 'd'],
    // print: function () {
    //     console.log("print function");c=
    //     console.log(this.name); 
    //     console.log(this);
    print: () => { // arrow function
    console.log(this.name);
    console.log("arrow function");
    }
}

// function thisExample () {
//     console.log(this, "function scope this")
// }

student.print();
// thisExample();

const name = "Joe"; // global scope

function localScopeFunc () {
    const name = "Dalton";
    console.log(name);
}

localScopeFunc();

const tools = {
    bmicalc : function (weight, height) {
        let bmi = weight / (height * height)
        console.log(`BMI result is ${bmi}`)
    },

    nettosalary : function (salary,tax) {
        let netSalary = salary - ((salary*tax) / 100)
        console.log(`Net salary is ${netSalary}`)
    }
}

tools.bmicalc(65,1.85);

const computer = {
    screen: "ASUS",
    keyboard: "Logitech",
    mouse: "Logitech",
    cpu: "Intel i7",
    gpu: "GTA 1060 6 GB",
    power: false,
    turnon: function () {
        this.power = true;
        console.log("Computer is turning on");       
        },

    turnoff: function () {
        this.power = false;
        console.log("Computer is off")
    },

    switcher: function () {
        this.power = !this.power; // if off turn on ; if on turn off
        console.log("It's off");
    },

    status: function () {
        const computerStatus = this.power ? "Info: Computer is on" : "Info: Computer is off";
        console.log(computerStatus);
    }

    }


  

    computer.turnon();
    computer.turnoff();
    computer.status();

function num1() {
    console.log(1);
    return 1;
}

function num2() {
    console.log(2);
    return 5;   // neye donuyosa onun degerini aliyo
}

console.log(num1() + num2());