

console.clear();
const Div = document.querySelector("Div");

Div.addEventListener("click", function(e){
  //console.log("click is occured");
  //console.log(e.target);
  //console.log(e.target.id);
  //console.log(e.target.className);
  //console.log(e.target.innerHTML);
  //console.log(e.target.textContent);
  //console.log(e.target.innerText);

});
/*
Div.addEventListener("dblclick", function(){
  console.log("dblclick is occured");
});
Div.addEventListener("mousedown", function(){
  console.log("mousedown is occured");
});
Div.addEventListener("mouseup", function(){
  console.log("mouseup is occured");
});
Div.addEventListener("mouseenter", function(){
  console.log("mouseenter is occured");
});
Div.addEventListener("mouseleave", function(){
  console.log("mouseleave is occured");
});
Div.addEventListener("mouseover", function(){
  console.log("mouseover is occured");
});
Div.addEventListener("mousemove", function(e){
  //console.log("mousemove is occured");
  //console.log("clientX = " + e.clientX + ",clientY = " + e.clientY);
  console.log("offsetX = " + e.offsetX + ",offsetY = " + e.offsetY);

}); */

const buttons = document.querySelectorAll(".btn");
console.log(buttons);

Array.from(buttons).map((button) => {
  button.addEventListener("click", function (e){
    console.log(e.target.innerText);
  });
});

