
function getGrade(){    //함수 정의
    kor = 95;       //자동 전역변수(var키워드를 생략했기 때문)
    
}// getGrade()

var kor = 100;          // 전역변수 (재선언)


getGrade();             //함수 호출



console.log("국어점수 : " , kor);
