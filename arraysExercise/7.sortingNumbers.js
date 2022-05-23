function solve(inputArray) {
    inputArray.sort((a, b) => a - b);
    let modArray = [];
    let i = 0;
    while (inputArray.length > 0) {
        if (i % 2 === 0) {
            modArray.push(inputArray.shift())
        } else {
            modArray.push(inputArray.pop())
        }
        i++;
    }
    return modArray;


}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])