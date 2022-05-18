function solve (inputArray) {
    inputArray.sort(function (a,b) {
        return a-b;
    })

    console.log(inputArray.slice(0,2).join(' '))
}

solve([30, 15, 50, 5] )