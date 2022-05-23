function solve(inputArray) {
    let modArray = [inputArray[0]]
    for (let i = 1; i < inputArray.length; i++)
        if (inputArray[i] >= inputArray[i-1]){
            modArray.push(inputArray[i])
        }

        return (modArray)

}

solve([1, 3, 8, 4, 10, 12, 3, 2, 24])