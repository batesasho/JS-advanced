function result(str1, str2, str3){
    let stringLength1 = str1.length;
    let stringLength2 = str2.length;
    let stringLength3 = str3.length;
    let totalLength = (stringLength1 + stringLength2 + stringLength3)
    let stringAverage = Math.floor(totalLength/3)

    console.log(totalLength);
    console.log(stringAverage);



}




result('chocolate', 'ice cream', 'cake' )
