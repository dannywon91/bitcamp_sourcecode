var x = 5;
var y = 7;
var result;          //undefined 변수가 선언만 되고, 초기화 되지 않은 상태

result = (x > y) ? x : y;            //삼항 연산자
console.log("큰 값 : ", result);

result = (x > y) ? x-y : y-x;        //삼항 연산자
console.log("큰 값 - 작은 값 : ", result);

result = (x == y) ? console.log('true') : console.log('false');
console.log(result);