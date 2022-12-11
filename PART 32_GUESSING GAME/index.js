  
var numberofWon= 0;
var numberofLost= 0;

for (var i=1; i<=5 ; i++){
  var guessNumber = parseInt(prompt("Enter a number between 1 to 5"));

  var randomNumber = Math.floor(Math.random()*5)+1;

  if(guessNumber==randomNumber){
      console.log("You Have won");
      numberofWon++;
  }else{
      console.log( "You lost. Random number was: " + randomNumber);
      numberofLost++;
  }
}
document.write("Total Number of won = " + numberofWon +"<br>");
document.write("Total Number of Lost = " + numberofLost +"<br>");

