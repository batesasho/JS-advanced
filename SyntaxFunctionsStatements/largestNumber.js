function solve(num1, num2, num3) {
    arrayNumbers = [num1,num2, num3]
    maxNumber = -Number.MAX_VALUE
    for (let i = 0 ; i < arrayNumbers.length; i++ ){
        if (arrayNumbers[i] > maxNumber) {
            maxNumber = arrayNumbers[i];
        }
    }
    console.log(`The largest number is ${maxNumber}.`)
}


solve(-5, -3, -16)