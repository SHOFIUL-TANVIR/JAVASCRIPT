
for(var i=0;i<3; i++){


document.querySelectorAll(".mybutton")[i].addEventListener("click", function(){
    var text = this.innerHTML;
    console.log(text);

    audioplay(text);
    

});
}


function audioplay(text){
    switch(text){
        case "A":
            var audio = new Audio ("music/1.mp3");
            audio.play();
            break;

        case "B":
            var audio = new Audio ("music/2.mp3");
            audio.play();
            break;

        case "C":
            var audio = new Audio ("music/3.mp3");
            audio.play();
            break;
    }
}