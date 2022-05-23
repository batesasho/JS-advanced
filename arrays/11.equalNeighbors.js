function solve(inputArray) {
    let countEqualPairs = 0;
    for (let row = 0; row < inputArray.length; row++) {
        for (let col = 0; col < inputArray[0].length; col++) {
            if (row !== inputArray.length -1 ) {
                if (inputArray[row][col] === inputArray[row + 1][col]) {
                    countEqualPairs += 1;
                }
                if (inputArray[row][col] === inputArray[row][col + 1]) {
                    countEqualPairs += 1;
                }
            } else {
                if (inputArray[inputArray.length - 1][col] === inputArray[inputArray.length - 1][col + 1]) {
                    countEqualPairs += 1;
                }
            }
        }
        }

        return countEqualPairs;
    }

    console.log(solve(
        [
            [2, 2, 5, 7, 4],
            [4, 0, 5, 3, 4],
            [2, 5, 5, 4, 2]
        ]
    ));