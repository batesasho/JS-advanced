function solve(inputArray) {
    let result = '';
    let inputArrayObject = new Map();


    inputArray.forEach(element => {
        let [name, quantity] = element.split(" => ");
        quantity = Number(quantity);
        let calculatedQuantity = inputArrayObject.get(name);
        if (inputArrayObject.has(name)) {
            calculatedQuantity += quantity;
            inputArrayObject.set(name, calculatedQuantity);
        } else {
            inputArrayObject.set(name, quantity);
        }
    })


    for (let [juice,quantity] of inputArrayObject.entries()) {
        if (quantity >= 1000) {
            result += `${juice} => ${Math.floor(inputArrayObject.get(juice) / 1000)}\n`
        }
    }
    return result.trim()
}


console.log(solve(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']
));
