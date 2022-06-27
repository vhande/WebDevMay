class drone  {
    constructor (type='drone', speed=0, battery=100) {
        this.type = type;
        this.speed = speed;
        this.battery = battery;
    }

    registerOwner (deviceId, fullname, address){
        this.owners.push({
        type: this.type,
        speed: this.speed,
        battery: this.battery,  // we take the info from parent
        deviceId, 
        fullname, 
        address
        })
    }

    getOwners () {
        return this.owners;
    }
}

class civilDrone extends drone {
    constructor (type='some drone', speed=50, battery=100) {
        super(type,speed,battery)
        this.owners = [];
    }
}

class militaryDrone extends drone {
    constructor (type='drone', speed=150, battery=100) {
        super(type,speed,battery)
        this.owners = [];
    }
}

let drone1 = new civilDrone ()
drone1.registerOwner("3436IFKG","John Doe", "1340 Street");
drone1.registerOwner("34ERLGG","Ersin Doe", "4053 Street");
drone1.registerOwner("12ERLGG","Hande Doe", "1503 Street");
console.log(drone1.getOwners())
let drone2 = new militaryDrone ()
drone2.registerOwner("4343542KLD", "Steven Steve", "3425 Street");
drone2.registerOwner("056057JGJ", "Doe Doe", "4320 Street")
console.log(drone2.getOwners())
drone1.getOwners().forEach(item => {
    console.log(`Speed is ${item.speed}`)
})
  
