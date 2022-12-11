

/*

function addNumbers(x,y,z){
    return x+y+z;
}
//console.log(addNumbers(...numbers));


//let numbers1 = [5,6,  ...numbers,7]
//console.log(numbers1)



let numbers1 = [1,2,3]
let numbers2 = [4,5,6]
let numbers = [...numbers1, ...numbers2];
console.log(numbers)*/



let p1 = {
    name:"Tanvir",
    age:"27",
}

let p2 = {
    Nationality:"Bangladeshi",
}
let p = { ...p1, ...p2}
console.log(p);