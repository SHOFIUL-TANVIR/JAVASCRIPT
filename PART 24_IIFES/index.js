/*(function display(messege){
    console.log(messege);
})("hello there");

var a= parseFloat(prompt("Enter valur of a:"));
var b= parseFloat(prompt("Enter valur of b:"));

(function sum(){

    var sum= a+b;
    document.write("Sum of your value="+ sum);
})();*/

var display2= function display(msg){
    console.log(msg);
}
display2("i am messege");