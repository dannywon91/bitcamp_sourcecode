

var city = [1,2,3, ,5, ,7];    //배열변수 선언

//인덱싱 기법으로, 새로운 원소의 추가 가능
// city[0] = "Seoul";
// city[1] = "Busan";
// city[2] = [1,2,3];
// city[3] = true;
// city[4] = 3.14;
// city[5] = undefined;


for(var element of city){
    if(element !== undefined){
        console.log("- element: ", element);

    }//if

}//for


var temp = 5;
console.log(temp == "5");
console.log(temp === "5");