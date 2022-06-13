function solve(inputArray, startIndex, endIndex) {
    if (!Array.isArray(inputArray)) {
        return NaN;
    }
    if (startIndex < 0) {
        startIndex = 0;
    }

    if (endIndex > inputArray.length - 1) {
        endIndex = inputArray.length - 1;
    }

    let sumElements = 0;
    for (let i = startIndex; i < endIndex+1; i++) {
        sumElements += Number(inputArray[i]);
    }

    return sumElements;
}


console.log(solve([10, 20, 30, 40, 50, 60], 3, 300));
console.log(solve([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
console.log(solve([10, 'twenty', 30, 40], 0, 2));
console.log(solve([], 1, 2));
console.log(solve('text', 0, 2));