function solve(inputArray) {
    let calcArrayRows = [];
    let calcArrayCols = [];

    for (let row = 0; row < inputArray.length; row++) {
        calcArrayRows.push(inputArray[row].reduce((acc, curr) => acc + curr, 0))
    }

    inputArray.forEach(rowArray => {
            rowArray.forEach((element, index) => {
                    if (calcArrayCols[index]) {
                        calcArrayCols[index] += element;
                    } else {
                        calcArrayCols[index] = element;
                    }
                }
            )
        }
    )

    if (JSON.stringify(calcArrayCols) === JSON.stringify(calcArrayRows)) {
        console.log('true')
    } else {
        console.log('false')
    }
}

solve([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]
])