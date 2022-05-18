function solve(inputArray) {
    inputArray.sort((a, b) => a - b);

    if (inputArray.length % 2 === 0) {
        return (inputArray.slice(inputArray.length / 2));
    } else {
        return inputArray.slice(Math.floor(inputArray.length / 2));
    }

}

solve([4, 7, 2, 5]);


