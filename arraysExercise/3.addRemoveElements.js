function solve(inputArray) {
    let currentAction = "";
    let initialValue = 1;
    let modifiedArray = [];
    while (inputArray.length > 0) {
        currentAction = inputArray.pop();

        if (currentAction === "add") {
            modifiedArray.push(initialValue);
        } else if (currentAction === 'remove') {
            modifiedArray.pop();
        }
        initialValue++;
    }
    if (modifiedArray.length > 0) {
        console.log(modifiedArray.join('\n'));
    } else {
        console.log('Empty');
    }

}

solve(['add', 'add', 'add', 'add'])
solve(['add', 'add', 'remove', 'add', 'add'])
solve(['remove', 'remove', 'remove'])