
function getGrade(){    //함수 정의
    var kor = 95;       //지역변수
    
}// getGrade()

var kor = 100;          // 전역변수 (재선언)


getGrade();             //함수 호출



console.log("지역변수 값은 함수 외부에서 사용할 수 없습니다.");
console.log("국어점수 : " , kor);
