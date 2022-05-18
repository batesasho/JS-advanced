function solve(inputArray) {
    let oddElementsArray = []
    inputArray.forEach((el, index) => {
        if (index % 2 !== 0) {
            oddElementsArray.push(el*2)
        }
    })
    return oddElementsArray.reverse().join(' ')
}


console.log(solve([3, 0, 10, 4, 7, 3] ))