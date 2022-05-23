function solve (fruit, weightGrams, priceKg){
let totalMoneyNeeded = priceKg * (weightGrams/1000)  
console.log(`I need $${totalMoneyNeeded.toFixed(2)} to buy ${(weightGrams/1000).toFixed(2)} kilograms ${fruit}.` );
}


solve('apple', 1563, 2.35)