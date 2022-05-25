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

    let distanceToCurrentPosition = 0; // distance between Initial and Current loop position  - takes max between row and column comparison

    for (let row = 0; row < arrayOrbit.length; row++) {
        for (let col = 0; col < arrayOrbit[0].length; col++) {

            if (arrayOrbit[row][col] !== 1) {
                let rowDistance = Math.abs(row - x);
                let colDistance = Math.abs(col - y);
                distanceToCurrentPosition = Math.max(rowDistance, colDistance);
                arrayOrbit[row][col] = arrayOrbit[x][y] + distanceToCurrentPosition;

            }
        }

    }


    console.log(arrayOrbit.map(rowArray => rowArray.join(' ')).join('\n'));
}


orbit([4, 4, 0, 0])
orbit([3, 3, 2, 2])
orbit([5, 5, 2, 2])