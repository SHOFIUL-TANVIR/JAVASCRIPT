var score = [
    ["Ayoun", 38],
    ["Jimin", 83],
    ["Breant", 24],
    ["V", 5],
    ["Neel", 98],
    ["Mosh", 340]
];

function highestRunScorer(score) {
 var hightestScore = score[0][1];
 var hightestScorer = score[0][0];

 for(var s=0; s<6; s++){
   if (hightestScore < score[s][1]) {
         hightestScore = score[s][1];
         hightestScorer = score[s][0];
      }
 }
return hightestScorer;
}
console.log(highestRunScorer(score));