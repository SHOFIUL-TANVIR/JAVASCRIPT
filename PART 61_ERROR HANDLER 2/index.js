



document.querySelector("#checkButton").addEventListener("check", function(){
 var num = document.querySelector("#numTextfield").Value;

 try{
    if(num <5)
    {
        throw " input is too low"
    } else if (num >10)
    {
        throw " input is too high"
    }
 }catch(err){
    console.log(err);
 }
})