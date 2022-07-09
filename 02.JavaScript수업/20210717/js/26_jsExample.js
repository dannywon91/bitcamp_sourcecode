
var x = 1;
var sum = 0;

while(1){          //무한반복 ( 1 == true )
//while(10000000)  //무한반복 (0 == false이기 때문에, 0이아닌 다른 모든 값은 true)
//while(true)      //무한반복 (자바와 동일)
//for( ; ; )       //무한반복 (자바와 동일)

    sum += x;
    x++;

    if(x==10001){ //탈출조건
        break;
    }//if
}//while

console.log("1~10000까지 합 :", sum)