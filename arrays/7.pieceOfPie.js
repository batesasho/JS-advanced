function solve(inputArray, flavorOne, flavorTwo) {
    let firstIndex = inputArray.indexOf(flavorOne)
    let secondIndex = inputArray.indexOf(flavorTwo)
    let slicedArray = inputArray.slice(firstIndex, secondIndex + 1)
    return slicedArray

}

console.log(solve(
    ['Pumpkin Pie','Key Lime Pie','Cherry Pie','Lemon Meringue Pie','Sugar Cream Pie'],
    'Key Lime Pie','Lemon Meringue Pie'
))