


var x = 0;
var sum = 0;

while(1){          //무한반복 ( 1 == true )
    x += 3;         //3의배수

    if(x>100) {
        break;

    }//if
    sum += x;
    console.log(x + " ");



}//while

console.log("1~100까지 수 중, 3의 배수 합 :", sum);