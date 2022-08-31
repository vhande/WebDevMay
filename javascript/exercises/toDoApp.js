function toDoApp (username) {
    this.username = username;
    this.list = [];
}

toDoApp.prototype.addTask = function(task) {
    this.list.push(task)
}

// toDoApp.prototype.deleteTask = function() {
//     this.list.pop()
// }

toDoApp.prototype.deleteTask = function(value) {
    let temp = [];
    this.list.forEach (item => temp.push(item.toLowerCase()));    
    
    let index = temp.indexOf(value.toLowerCase())
    console.log(index)
    if (index > -1) {
        console.log("To do found:", index, temp[index])
        temp.splice(index,1)  // index number and delete one elemenet
    }

    this.list = [...temp]
}

toDoApp.prototype.showList = function () { console.log(`${this.username} has to do:\n${this.list}`) }

let user1 = new toDoApp("Hande") 
user1.addTask("Learn JS")
user1.addTask("Watch TV")
user1.addTask("Clean the kitchen")
user1.deleteTask("watch TV")
user1.showList();

