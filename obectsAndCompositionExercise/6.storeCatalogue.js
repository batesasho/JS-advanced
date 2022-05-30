function solve(inputArray) {
    for (let i = 0; i < inputArray.length; i++) {
        inputArray[i] = inputArray[i].split(" : ");
        inputArray[i][1] = Number(inputArray[i][1]);
    }

    inputArray.sort((a, b) => a[0].localeCompare(b[0]));
    let firstLetter = new Set();
    for (let row = 0; row < inputArray.length; row++) {
        firstLetter.add(inputArray[row][0].charAt(0));
       ;

    }
    for (let letter of firstLetter){
        console.log(letter);
        for (let element of inputArray){
            if (element[0][0] === letter){
                console.log(`${' '.repeat(2)}`+ element.join(": "))
            }
        }
    }


}


solve([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
])