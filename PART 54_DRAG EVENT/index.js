

const input = document.querySelector("input");
const p = document.querySelector("p");

input.addEventListener("copy", function(){
  p.innerText = "You have copied";
});
input.addEventListener("cut", function(){
  p.innerText = "You have cut";

});
input.addEventListener("paste", function(){
  p.innerText = "You have pasted";
});