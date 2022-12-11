

/*setTimeout(()=>{
    console.log("Hi");
},3000);//

setTimeout(display,2000);

function display() {
    console.log("display function");
}//


const saveButton = document.querySelector(".save-btn");
const messege = document.querySelector(".messege");

saveButton.addEventListener("click", saveUser);

function saveUser(){
    messege.textContent = "user registration successful";

    
setTimeout(() =>{
    messege.textContent = "";
}, 2000);
}*/
const saveButton = document.querySelector(".save-btn");
const messege = document.querySelector(".messege");


saveButton.addEventListener("click", displayCount);
function displayCount(){
    let  count = 0;
    messege.textContent = count;

    setInterval(() =>{
        count++;
        messege.textContent = count;
    }, 1000);
}
