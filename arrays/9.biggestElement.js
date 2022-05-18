function solve(inputArray) {
    let maxNumber = -Number.MAX_VALUE;
    for (let row = 0; row < inputArray.length; row++) {
        for (let col = 0; col < inputArray[0].length; col++) {
            if (inputArray[row][col] > maxNumber) {
                maxNumber = inputArray[row][col];
            }
        }
    }
    return maxNumber
}

console.log(solve([
        [20, 50, 10],
        [8, 33, 145]
    ]
))