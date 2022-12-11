/*
import { messege} from './myModule.js'


console.log(messege)

setText("goodbye from es6")
console.log(text)*/

class Student{

    constructor(id,name){
        this.id = id;
        this.name = name
    }

    set studentName(name){
        this.name = name;
    }
    get studentinfo(){
        return this.id+ " " + this.name;
    }
}

let s1 = new Student(101,"tanvir");

console.log(s1.studentinfo)
/*console.log(s1.id)
console.log(s1.name)

s1.studentName = "umm";
console.log(s1.name)*/