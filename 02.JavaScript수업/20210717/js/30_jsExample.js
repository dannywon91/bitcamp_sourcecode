

var i;
var j;

outloop:             // label name
for(i = 0; i < 3; i++){
    inloop:          // label name
    for(j = 0; j < 3; j++){
        if(i === 1 && j === 0){
            continue outloop;
        }
        console.log("i = " + i + ", j = " + j);
    }
}