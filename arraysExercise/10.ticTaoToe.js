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

        // [isWinGame, isWinPlayer] = isWinEvaluation(dashBoardArray);
        // if (isWinGame) {
        //
        // }

        const [row, col] = newArrayInt.shift();
        if (!(row <= dashBoardArray[0].length && col <= dashBoardArray[0].length)) {
            i++;
            continue
        }
        if (dashBoardArray[row][col]) {
            console.log("This place is already taken. Please choose another!");

        } else {
            dashBoardArray[row][col] = (i % 2 === 0) ? "X" : "O";
        }
        i++;

    }

    console.log(dashBoardArray.join('\n'));

}


function isWinEvaluation(inputArray) {

}


solve(["0 1", "0 0", "0 2", "2 0", "1 0", "1 1", "1 2", "2 2", "2 1", "0 0"])