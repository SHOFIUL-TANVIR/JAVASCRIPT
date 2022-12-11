
//alert("Error Here");
//confirm("Are you sure?");

/*function deletesomething() {
    let value = confirm ("do you want to delete?");
    if(value) {
        console.log("deleted");
    }else{
        console.log("not deleted");
    }
}
deletesomething();*/

function welcomeMessege() {
    var h1 = document.createElement("h1");
    let text;

    var name = prompt ("Enter your name: ");
    if(name == null || name == ""){
        text = "No name found";
    }else{
        text = "Welcome " + name;
    }
     var textNode = document.createTextNode(text)
     h1.appendChild(textNode);
     document.body.appendChild(h1);

}
welcomeMessege();

