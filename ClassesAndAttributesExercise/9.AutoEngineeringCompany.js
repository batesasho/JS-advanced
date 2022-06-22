function solve(inputArray) {
    let result = '';
    let inputArrayObject = new Map();


    inputArray.forEach(element => {

        let [brand, model, quantity] = element.split(" | ");
        quantity = Number(quantity);
        if (!inputArrayObject.get(model)) {
            inputArrayObject.set(brand, [{model, quantity}])
            console.log(inputArrayObject.get(brand)[0].model)
        } else if (inputArrayObject.get(brand)[0].model) {
            let calculatedQuantity = inputArrayObject.get(brand)[0].quantity;

            inputArrayObject.get(brand)[0].quantity += quantity;
        }



    })


    for (let [juice, quantity] of inputArrayObject.entries()) {
        if (quantity >= 1000) {
            result += `${juice} => ${Math.floor(inputArrayObject.get(juice) / 1000)}\n`
        }
    }
    return result.trim()
}


console.log(solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X5 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
))