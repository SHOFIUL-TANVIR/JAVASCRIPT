

console.clear();


/*
console.log(location.href);
console.log(location.protocol);
console.log(location.hostname);
console.log(location.port);
console.log(location.pathname);*/

var locationDiv =  document.querySelector(".location-div");


var p1 = locationDiv.children[0];
p1.textContent = location.href;

var p2 = locationDiv.children[1];
p2.textContent = location.hostname;

var p3 = locationDiv.children[2];
p3.textContent = location.protocol;


var p4 = locationDiv.children[3];
p4.textContent = location.port;


var p5 = locationDiv.children[4];
p5.textContent = location.pathname;

const visitbutton = document.getElementById("visit-button");
visitbutton.addEventListener("click",function(){
  location.assign("https://twitter.com/ShofiulTanvir")
});