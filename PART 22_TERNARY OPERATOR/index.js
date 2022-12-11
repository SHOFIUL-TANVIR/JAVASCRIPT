/*var number = Number(prompt("Enter a number:"));
var result=number > 0 ? "positive" : number < 0 ? "negative":"zero";

console.log(result);*/

var num1 = Number(prompt("Enter Your First Number"));
var num2 = Number(prompt("Enter Your Second Number"));
var num3 = Number(prompt("Enter Your Third Number"));

var result = (num1 > num2 && num1 > num3) ? num1 : (num2 > num1 && num2 > num3) ? num2 : num3;
document.write(result);



