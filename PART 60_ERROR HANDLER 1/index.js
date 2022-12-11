

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
}//
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
*/
const saveButton = document.querySelector(".save-btn");
const messege = document.querySelector(".messege");



saveButton.addEventListener("click", startclock);


function startclock(){

    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let time = hours +":"+ minutes +":"+ seconds;

    minutes = formatTime(minutes);
    seconds = formatTime(seconds);




    messege.textContent = time;

    setInterval(startclock,1000);
}

function formatTime(value){
    if(value<10){
        value = "0"+ value;
    }
    return value;
}

