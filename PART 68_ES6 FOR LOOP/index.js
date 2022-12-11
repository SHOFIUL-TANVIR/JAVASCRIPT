

/*
const names = ["s1", "s2", "s3"]
for(let name of names){
    console.log(name);
}*/


let students = {
    ID: 18,
    Name:'Tanvir',
    cgpa:3.25
}

for (let x in students){
    console.log(`${x} : ${students[x]}`);
}