

const taskOne = () =>{
    console.log("Task1");
};

const dataloading = () =>{
    console.log("Task2.Data loading");
};
const taskTwo = () =>{
    setTimeout(dataloading,3000)
};
const taskThree = () =>{
    console.log("Task3");
};

const taskFour = () =>{
    console.log("Task4");
};

const taskFive = () =>{
    console.log("Task5");
};

taskOne();
taskTwo();
taskThree();
taskFour();
taskFive();