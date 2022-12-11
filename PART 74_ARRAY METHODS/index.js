

/*let numbers = [5,55,14,5,78];

const evenNumber = (value,index,array) =>{
    if(value%2===0)
    return value;
}
let firstEvenNumber = numbers.find(evenNumber);
let firstEvenNumberIndex = numbers.findIndex(evenNumber);


console.log(firstEvenNumber)
console.log(firstEvenNumberIndex)*/

const students = [
    {
        id: 101,
        gpa:3.20
    },
    {
        id: 102,
        gpa:3.25
    },
    {
        id: 103,
        gpa:2.20
    },
    {
        id: 104,
        gpa:4.25
    },
    {
        id: 105,
        gpa:5.00
    },
]

console.log(students.find (x=> x.gpa>4))