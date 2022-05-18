function solve(inputArray){
    let newArray = []
    for (let el of inputArray){
        if (el < 0){
            newArray.unshift(el)
        } else {
            newArray.push(el)
        }
    }
    return(newArray.join('\n'))
}

console.log(solve([3, -2, 0, -1]))