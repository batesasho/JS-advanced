function solve(inputArray) {
    inputArray.sort((a, b) => {
        return a.length - b.length || a.localeCompare(b)
    })

    console.log(inputArray.join('\n'))

}


solve(['test', 'Deny', 'omen', 'Default'])