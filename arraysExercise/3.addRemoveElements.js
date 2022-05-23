function solve(inputArray) {
    let outputArray = []

    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] === 'add') {
            if (outputArray.length === 0){
                outputArray.push(1)
            }else{
            outputArray.push(outputArray[outputArray.length - 1] + 1)
            }
        } else if(inputArray[i] === 'remove') {
            outputArray.pop()
        }
    }

    if (outputArray.length !== 0) {
        console.log(outputArray.join('\n'))
    } else {
        console.log("Empty")
    }


}

// solve(['add', 'add', 'add', 'add'])
solve(['add', 'add', 'remove', 'add', 'add'] )
// solve(['remove', 'remove', 'remove'])