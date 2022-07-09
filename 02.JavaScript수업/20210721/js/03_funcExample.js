

//기본 함수 선언
function printMsg(msg){
    console.log("기본함수: " , msg)
    
}//printMsg()

printMsg("호출되었습니다.")


//변수에 함수표현식으로 익명함수 대입
var printMsg=function ttt(msg){
    console.log("익명함수: " , msg);

}//printMsg()



//과연 누가 호출될까?
printMsg("호출되었습니다.");

//이름이 있는 기본함수일지라도 한번 함수표현식으로 변수에 대입되면
//원래의 함수명은 할 수 없다.    --> 즉, 변수명으로만 사용해야 한다.
// ttt("호출되었습니다.")


console.log("- printMsg: " , printMsg)