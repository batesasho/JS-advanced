function spiralMatrixSolve(rows, columns) {
    let arraySpiralMatrix = [];
    for (let row = 0; row < rows; row++) {
        arraySpiralMatrix.push([]);
    }

    let numbersInArrayStart = 1;
    let startColumn = 0;
    let endColumn = columns - 1;
    let startRow = 0;
    let endRow = rows - 1;
    while (startColumn <= endColumn && startRow <= endRow) {

        for (let i = startColumn; i <= endColumn; i++) {
            arraySpiralMatrix[startRow][i] = numbersInArrayStart;
            numbersInArrayStart++;
        }
        startRow++;

        for (let i = startRow; i <= endRow; i++) {
            arraySpiralMatrix[i][endColumn] = numbersInArrayStart;
            numbersInArrayStart++;
        }
        endColumn--;


        for (let i = endColumn; i >= startColumn; i--) {
            arraySpiralMatrix[endRow][i] = numbersInArrayStart;
            numbersInArrayStart++;
        }
        endRow--;

        for (let i = endRow; i >= startRow; i--) {
            arraySpiralMatrix[i][startColumn] = numbersInArrayStart;
            numbersInArrayStart++;
        }
        startColumn++;

       }
    arraySpiralMatrix = arraySpiralMatrix.map(rowArray => rowArray.join(' ')).join('\n');
    console.log(arraySpiralMatrix)


}

spiralMatrixSolve(3, 3);