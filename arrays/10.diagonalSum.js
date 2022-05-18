function solve(inputArray) {
    let sumLeftDiagonal = 0;
    let sumRightDiagonal = 0;

    for (let row = 0; row < inputArray.length; row++) {
            sumLeftDiagonal += inputArray[row][row];
            sumRightDiagonal += inputArray[row][(inputArray[0].length -1) - row]
    }
    console.log([sumLeftDiagonal, sumRightDiagonal].join(' '))
}

(solve(
    [
        [3, 5, 17],
        [-1, 7, 14],
        [1, -8, 89]
    ]
))