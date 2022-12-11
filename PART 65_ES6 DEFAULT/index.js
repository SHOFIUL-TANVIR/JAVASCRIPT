

/*
"use strict"

function messege(text = "Hello this is default parameter"){
    console.log(`${text}`);
}
messege("I love js");
messege();*/

"use strict"

function sum(x,y, ...z){
    console.log(`x = ${x},y= ${y}, z= ${z}`)
}
sum (10,20,30,40,50);