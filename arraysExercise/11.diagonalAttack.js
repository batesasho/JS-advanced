function diagonalsEqualSumEvaluation(inputArray) {
    inputArray = inputArray.map(rowElement => rowElement.split(' ').map(row => Number(row)));
    let leftDiagonal = 0;
    let rightDiagonal = 0;

    inputArray.forEach((rowArray, index) => {
        leftDiagonal += rowArray[index];
        rightDiagonal += rowArray[rowArray.length - index - 1];
    });


    if (leftDiagonal === rightDiagonal) {

        for (let row = 0; row < inputArray.length; row++) {
            for (let col = 0; col < inputArray[row].length; col++) {
                if (col !== row && col !== inputArray[0].length - 1 - row) {
                    inputArray[row][col] = leftDiagonal;
                }
            }
        }

    }
    inputArray.forEach(rowArray => console.log(rowArray.join(" ")))
}


diagonalsEqualSumEvaluation([
    '5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1'
])