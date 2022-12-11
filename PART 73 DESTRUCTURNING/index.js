

//let numbers = [10,20,30,40,50]
//let [num1,num2,...z] = numbers
//console.log(num1)
//console.log(z)


/*let a=10, b=20;
[a,b] = [b,a]

console.log(a)
console.log(b)*/
/*
const studentInfo = {
    id:101,
    fullName: 'shofiul tanvir',
    gpa:3.25,
    languages: {
        native:'bangla',
        beginner: 'english'
    }
}
const {fullName, languages} = studentInfo

console.log(languages.native)
console.log(fullName)*/


const studentInfo = ({id, fullName}) =>{
    console.log(`${student.id}, ${student.fullName}`)
}

const student = {
    id:101,
    fullName:'shofiul alam tanvir'
}

studentInfo(student)