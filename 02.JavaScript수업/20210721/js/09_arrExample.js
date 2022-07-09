


var arr=[10, 20, 30, 40, '50'];  //다른 데이터 타입요소

function printArr() {
    var i, sum = 0;

    // for(i = 0; i < arr.length; i++){
    //     sum+=arr[i];

    // }//for

    for(var element of arr){
        sum += element;
    }

    return sum;
}//printArr

var result = printArr();
console.log("배열 원소 합:" , result);