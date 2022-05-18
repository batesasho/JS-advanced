function solve(n, k) {
    let outputArray = [1]
    let newSliceArray
    for (let i = 0; i < n - 1; i++) {
        if (i < k  ) {
             newSliceArray = outputArray.slice()
        } else {
             newSliceArray = outputArray.slice(i - k + 1, i+1)
        }
        let sumSlicedArray = newSliceArray.reduce((total, arg) => total + arg, 0);
        outputArray.push(sumSlicedArray)
    }

    return outputArray
}

solve(6, 3)