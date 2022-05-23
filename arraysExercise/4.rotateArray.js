function solve(inputArray, numRotations) {
    let modifiedArray = inputArray.slice()
    for (let i = 0; i < numRotations; i++){
        modifiedArray.unshift(modifiedArray.pop())
    }

    console.log(modifiedArray.join(' '))
}


solve(['Banana', 'Orange', 'Coconut', 'Apple'], 15)