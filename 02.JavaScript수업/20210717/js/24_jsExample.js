

var x;
var y;

for(x = 2; x <= 5; x++){
    console.log("---[", x, "단]---");
    for(y = 1; y <= 9; y++){
        console.log(x + "*" + y + "=" + (x*y));
    }// inner nested for

}//for