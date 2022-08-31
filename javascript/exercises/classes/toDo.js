class toDoApp {
    constructor() {
        this.list = [];
    }

    addList (task) {
        return this.list.push(task);
    }

    deleteList () {
        return this.list.pop()
    }

    getList () {
        return this.list
    }

    getById (i) {
        return this.list[i]
    }

    deleteById (i) {
        return this.list.splice(i,1)
    }

     toString () {
        this.list.forEach((item,index) => {console.log(`${index}. ${item}`)})
     }

    getListByValue(value) {
        let singleToDo = this.list.filter(val => val.toLowerCase().trim() == value.toLowerCase().trim())
        console.log(singleToDo)
    }

    deleteListByValue(value) {
        let index = this.list.indexOf(value);
        console.log(this.list[index])
        this.list.splice(index,1)
    }

}

let user = new toDoApp() ;
user.addList("Do dishes")
user.addList("Learn JS")
user.addList("Watch TV")
user.toString()
user.getListByValue("       learn js")
console.log(user.getById(1))
user.deleteListByValue("Do dishes")
console.log(user.getList())

