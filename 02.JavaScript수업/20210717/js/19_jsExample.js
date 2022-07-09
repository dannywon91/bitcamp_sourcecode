//--1. 변수 선언부
var gender = "M"; //남자(M), 여자(F)
var age = 21;

//--2. 제어문을 이용한 새ㅣㄹ행문장들 선언부

if(gender == "M"){                 //비교연산자는 "값만" 비교(타입은 제외)
    if(age >= 19){
        result="남자 성인입니다."
    }else{
        result="남자 미성년자입니다."
    }//inner if-else

}else{
    if(age >= 19){
        result = "여자 성인입니다."
    }else{
        result = "여자 미성년자입니다."
    }//inner if-else

}//if-else
