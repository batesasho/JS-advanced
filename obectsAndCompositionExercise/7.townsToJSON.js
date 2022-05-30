function solve(inputArray) {


    let modifiedArray = [];
    for (let row = 1; row < inputArray.length; row++) {
        const myArrayObject = {};
        let splittedArray= inputArray[row].split("|");
        [myArrayObject["Town"], myArrayObject["Latitude"], myArrayObject["Longitude"]] = [splittedArray[1].trim(), +Number(splittedArray[2]).toFixed(2).trim(), +Number(splittedArray[3]).toFixed(2).trim()];
        modifiedArray.push(myArrayObject);

    }


    console.log(JSON.stringify(modifiedArray));

}


solve(
    [
        '| Town | Latitude | Longitude |',
        '| Sofia | 42.696552 | 23.32601 |',
        '| Beijing | 39.913818 | 116.363625 |'
    ]
)