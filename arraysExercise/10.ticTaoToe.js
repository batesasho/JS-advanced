function solve(inputArray) {
    let dashBoardArray = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];
    let newArrayInt = []
    for (let i = 0; i < inputArray.length; i++) {
        newArrayInt.push(inputArray[i].split(' '));
    }
    newArrayInt.forEach(rowArray => rowArray.forEach(element => Number(element)));

    let i = 0;
    while (newArrayInt.length > 0) {

        [isWinGame, isWinPlayer] = isWinEvaluation(dashBoardArray);
        if (isWinGame) {

        }

        const [row, col] = newArrayInt.shift();
        if (!(row <= dashBoardArray[0].length && col <= dashBoardArray[0].length)) {
            i++;
            continue
        }
        if (dashBoardArray[row][col]) {
            console.log("This place is already taken. Please choose another!");
            i++;
            continue;
        } else {
            dashBoardArray[row][col] = (i % 2 === 0) ? "X" : "O";
        }
        i++;

    }

    console.log(dashBoardArray);

}


function isWinEvaluation(inputArray) {
    for (let row = 0; row < inputArray.length; row++) {
        if (!(row[0] === "X" || row[0] === "O")) {
            continue;
        }
        if (row.every(element => element === row[0])) {
            return [true, row[0]];
        }
    }


    let leftDiagonalArray = [];
    for (let row = 0; row < inputArray.length - 1; row++) {
        if (!inputArray[row][row]) {
            leftDiagonalArray.push(false);;
        }
        if (inputArray[row][row] === inputArray[row + 1][row + 1]) {
            leftDiagonalArray.push(true);
        } else {
            leftDiagonalArray.push(false);
        }
    }

    if (leftDiagonalArray.every(element => element === true)) {
        return [true, inputArray[0][0]];
    }


    let rightDiagonalArray = [];
    for (let row = 0; row < inputArray.length - 1; row++) {
        if (!inputArray[row][(inputArray[0].length - 1) - row]) {
            rightDiagonalArray.push(false);
        }
        if (inputArray[row][(inputArray[0].length - 1) - row] === inputArray[row + 1][(inputArray[0].length - 1) - row - 1]) {
            rightDiagonalArray.push(true);
        } else {
            rightDiagonalArray.push(false);
        }
    }
    if (rightDiagonalArray.every(element => element === true)) {
        return [true, inputArray[0][(inputArray[0].length - 1)]];
    }

    let verticalArray = [];
    for (let colArray = 0; colArray < inputArray[0].length ; colArray++) {
        inputArray.forEach((rowArray, index) => {
            if (rowArray[index][colArray] === inputArray[index + 1][colArray]) {
                verticalArray.push(true);
            } else {
                verticalArray.push(false);
            }
        })
    }
    console.log(verticalArray)


}


solve(["0 1", "0 0", "0 2", "2 0", "1 0", "1 1", "1 2", "2 2", "2 1", "0 0"])