function solve(inputArray) {
    let inputObject = {};
    inputArray.forEach((elementArray, index) => {
        if (index % 2 === 0) {
            inputObject[elementArray] = Number(inputArray[index + 1]);
        }
    })

    console.log(inputObject);
}

solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])
solve(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42'])
