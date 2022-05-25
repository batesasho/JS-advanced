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
    let [isWinGame, winnerPlayer] = [false, ""];
    let i = 0;


    while (newArrayInt.length > 0) {

        [isWinGame, winnerPlayer] = isWinEvaluation(dashBoardArray);
        if (isWinGame) {
            console.log(`Player ${winnerPlayer} wins!`)
            console.log(dashBoardArray.map(rowArray => rowArray.join("\t")).join('\n'))
            break;
        }

        const [row, col] = newArrayInt.shift();
        if (!(row <= dashBoardArray[0].length && col <= dashBoardArray[0].length)) {
            i++;
            continue
        }

        let dashBoardFreeSpaceCount = 0;
        dashBoardArray.forEach(rowArray => rowArray.forEach(element => {
            if (element) {
                dashBoardFreeSpaceCount += 1;
            }
        }))
        if (dashBoardFreeSpaceCount === 9) {
            break;
        }

        if (dashBoardArray[row][col]) {
            console.log("This place is already taken. Please choose another!");
            // let nextMove = newArrayInt.splice(i, 1)[0];
            // newArrayInt.unshift(nextMove);
            continue;
        } else {
            dashBoardArray[row][col] = (i % 2 === 0) ? "X" : "O";
        }


        i++;
    }
    if (!isWinGame) {
        console.log("The game ended! Nobody wins :(")
        console.log(dashBoardArray.map(rowArray => rowArray.join("\t")).join('\n'))
    }


    function isWinEvaluation(inputArray2) {
        let isWinner = false;
        let winnerPlayer = "";
        let leftDiagonal = [];
        let rightDiagonal = [];
        let isWinLeftDiagonal = false;
        let isWinRightDiagonal = false;

        for (let row = 0; row < inputArray2.length; row++) {
            if (inputArray2[row][0]) {


                let isWinRow = inputArray2[row].every(element => element === inputArray2[row][0])
                if (isWinRow) {
                    isWinner = true;
                    winnerPlayer = inputArray2[row][0];
                    break;
                }
            }
        }

        for (let row = 0; row < inputArray2.length; row++) {

            leftDiagonal.push(inputArray2[row][row]);
            rightDiagonal.push(inputArray2[row][(inputArray2[0].length - 1) - row]);
        }


        if (leftDiagonal[0]) {
            isWinLeftDiagonal = leftDiagonal.every(element => element === leftDiagonal[0]);
        }

        if (rightDiagonal[0]) {
            isWinRightDiagonal = rightDiagonal.every(element => element === rightDiagonal[0]);
        }

        if (isWinLeftDiagonal) {
            isWinner = true;
            winnerPlayer = leftDiagonal[0];
        }

        if (isWinRightDiagonal) {
            isWinner = true;
            winnerPlayer = rightDiagonal[0];
        }

        let row = 0;
        while (row < inputArray2.length) {
            let isWinVerticalArray = [];
            for (let col = 0; col < inputArray2.length; col++) {
                isWinVerticalArray.push(inputArray2[col][row])
            }
            if (isWinVerticalArray.every(element => element === isWinRightDiagonal[0])) {
                isWinner = true;
                winnerPlayer = isWinVerticalArray[0];
                break;
            }

            row++;
        }

        return [isWinner, winnerPlayer]
    }

}



// solve(["0 1", "0 0", "0 2", "2 0", "1 0", "1 1", "1 2", "2 2", "2 1", "0 0"])
// solve(["0 0", "0 0", "1 1", "0 1", "1 2", "0 2", "2 2", "1 2", "2 2", "2 1"])
solve(["0 1", "0 0", "0 2", "2 0", "1 0", "1 2", "1 1", "2 1", "2 2", "0 0"])