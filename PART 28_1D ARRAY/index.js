

function highestscore(scores){
var max=scores[0];
for(var x=1;x<scores.length;x++){
    if(max<scores[x]){
        max=scores[x];
    }
}
return max;
}

var scores=[21,23,9,27,85];
var  maxscores =highestscore(scores);
console.log(maxscores);
