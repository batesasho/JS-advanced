function solve(numberOne, numberTwo){
let smallerNum = numberOne;
let greatNum = numberTwo
if (numberTwo < numberOne){
    smallerNum = numberTwo;
    greatNum = numberOne;
}

let commonDivisor = []
for (let i=1; i <= smallerNum; i++){
    if (greatNum % i == 0 && smallerNum % i == 0){
        commonDivisor.push(i)
    }
}
console.log(commonDivisor[commonDivisor.length - 1]);
}

solve(2154, 458)