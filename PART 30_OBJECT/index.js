

function Student(name,age,cgpa,lang){
  this.name = name;
  this.age = age;
  this.cgpa = cgpa;
  this.lang = lang;

  this.display = function(){
    console.log(this.name);
    console.log(this.age);
    console.log(this.cgpa);
    console.log(this.lang);
  }
}

var student1= new Student("Shofiul", 27, 3.24,["Bengali", "English"]);
var student2= new Student("alam", 25, 3.30,["Bengali", "English"]);
var student3= new Student("tanvir", 23, 3.35,["Bengali", "English"]);

student1.display();
student2.display();
student3.display();

/*console.log(student1.name);
console.log(student1.age);
console.log(student1.cgpa);
console.log(student1.lang);*/




/*var student1 ={
  
  name:"Shofiul Alam",
  age:25,
  cgpa:3.24,
  lang:["Bangla","English","Hindi"],
}
var student2 ={
  
  name:" Alam",
  age:27,
  cgpa:3.00,
  lang:["Bangla","English","Hindi"],
}
var student3 ={
  
  name:"Tanvir",
  age:50,
  cgpa:3.50,
  lang:["Bangla","English","Hindi"],
}
console.log( student2.age);*/