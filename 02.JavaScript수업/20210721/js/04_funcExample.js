
var result;                  //전역변수

function add(name, n) {
    console.log(name, "학생이 1부터 ", n, "까지 덧셈 수행");

    var sum=0;               //지역변수

    for(var i=1; i<=n; i++){
        sum += i;

    }//for

    return sum;         //호출자에게 값을 리턴
}//add()

console.log("1. 결과 : ", add('홍길동', 10));



result=add('영희', 100);
console.log("2. 결과 : ", result);