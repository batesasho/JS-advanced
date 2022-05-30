function solve(inputArray) {
    let productArray = [];

    inputArray.forEach(rowArray => {
        let productObject = {};
        let splitRowArray = rowArray.split(' | ');

        [productObject['townName'], productObject['productName'], productObject['productPrice']] = [splitRowArray[0], splitRowArray[1], Number(splitRowArray[2])];
        productArray.push(productObject);
    })
    productArray.sort((a, b) => a.productName.localeCompare(b.productName) || a.productPrice - b.productPrice)

    let filteredObjectArray = new Set();
    productArray.forEach(elementObject => filteredObjectArray.add(elementObject))


    console.log(filteredObjectArray);


    // console.log(productArray)

}


solve([
        'Sample Town | Sample Product | 1000',
        'Sample Town | Orange | 2',
        'Sample Town | Peach | 1',
        'Sofia | Orange | 3',
        'Sofia | Peach | 2',
        'New York | Sample Product | 1000.1',
        'New York | Burger | 10'
    ]
)