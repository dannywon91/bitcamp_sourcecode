

//배열을 만드는 기호는 자바({}) 와 다르게 대괄호([]) 사용
var city = [ "Seoul", "Busan", "Incheon", 1, true, 1.2];

delete city[4];

console.log("-city : ", city)
console.log("-city[4] : ", city[4])


function printArr() {
    console.debug('>>> printArr() invoked.');

    

    for(var i = 0; i < city.length; i++){
        console.log("배열 데이터[" + i + "] = ", city[i]);
    }//for

    //for-in은 배열의 인덱스번호를 차례대로 준다(단, undefined 요소는 빼고)
    for(var index in city){
        console.log("\t+ index: ", index)
    }//for-in
    
    for(var cityName of city){
        console.log("\t+ cityName: ", cityName)
        
    }//enhanced for (for - of)


}//printArr()

printArr(); //함수호출