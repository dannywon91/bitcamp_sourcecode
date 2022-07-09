

//2개의 변수 정의
var text1 = "함수 선언 전 호출";
var text2 = "함수 선언 후 호출";

printMsg(text1);


//1급객체:
// (1) 자바스크립트 엔진이, JS코드를 실행할 때 , 가장먼저 함수선언부를 찾아서
//     함수를 만들어 놓음(메모리)
// (2) 함수는 변수의 값으로도 대입이 가능하다
function printMsg(msg){
    console.debug("printMsg(msg) invoked");
    
    console.log("함수 호출 메세지 : " , msg);

}// printMsg()

//함수호출연산자()를 이용한 함수호출 #2
printMsg(text2)


//-- 1급객체로서의 함수의 성질을 한번테스트 해보자

var func = printMsg;




function ttt(job) {
    console.debug("ttt(myFunc) invoked");

    job("TTT");
}//ttt()

ttt(printMsg);