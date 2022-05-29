function solve(inputArray) {
    let productArray = [];
    let productObject = {};
    inputArray.forEach(rowArray => {

        let splitRowArray = rowArray.split(' | ');
        productArray.push(splitRowArray)
        productArray.sort((a,b)=>a[2]-b[2])


        let [townName, productName, productPrice] = [splitRowArray[0], splitRowArray[1], Number(splitRowArray[2])];
        productObject[productName] = [townName, Number(productPrice)];
        // productArray.push(productObject);
    })
    console.log(productArray)
    console.log(result)


    // console.log(productObject);


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