var x = 5;
var y = 7;
var result;          //undefined 변수가 선언만 되고, 초기화 되지 않은 상태

result = (x < 10 && y > 10); //논리곱(그리고)
console.log("(x<10 && y>10 : " , result);

result = (x < 10 || y > 10); //논리합(또는)
console.log("(x<10 || y>10 : " , result);

result = !(x < 10 && y > 10); //논리곱
console.log("!(x<10 && y>10 : " , result);

console.log(typeof result);