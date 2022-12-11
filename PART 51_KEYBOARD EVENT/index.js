console.clear();

const textarea = document.querySelector("textarea");
textarea.addEventListener("keydown", function(e){
  if(e.repeat){
    alert("Do not repeat");
  }
});
/*
textarea.addEventListener("keypress", function(){
  console.log("keypress");
});*/
/*textarea.addEventListener("keyup", function(e){
  if (e.shiftKey) {
    console.log("shift+" + e.key);
  }
});*/