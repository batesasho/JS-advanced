function orbit(inputCoordinatesArray) {
    let [width, height, x, y] = inputCoordinatesArray;
    let arrayOrbit = []

    for (let row = 0; row < height; row++) {
        arrayOrbit.push([]);
        for (let i = 0; i < width; i++) {
            arrayOrbit[row].push(-1);
        }

    }
    arrayOrbit[x][y] = 1;



    for (let row = 0; row < arrayOrbit.length; row++) {
        for (let col = 0; col < arrayOrbit[0].length; col++) {
            if (arrayOrbit[row][col] !== 1) {
                arrayOrbit[row][col] = Math.min(row - x, col - y)
            }
        }
    }


    console.log(arrayOrbit);
}


orbit([4, 4, 0, 0])