

console.clear();
   /* const input = document.querySelector("input[name=name]");

    input.addEventListener("change", changehandler);
    function changehandler(e){
        //console.log(e);
        //console.log(e.type);

        //console.log(e.target);
        //console.log(e.target.classname);
        //console.log(e.target.id);
        console.log(e.target.value);*/


      /*  const programs = document.querySelector("input[name=program]");
        console.log(programs);

Array.from(programs).map((program) => {
    program. addEventlistener("change" , programhandler);
})

function programhandler(e){
    console.log("checked");
}
*/

const department = document.querySelector("#department");
console.log(department);

department.addEventListener("change", handledepartment);

function handledepartment(e){
    console.log(e.target.value);
}




