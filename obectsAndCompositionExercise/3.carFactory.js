function solve(inputObject) {
    let engine = {
        smallEngine: {power: 90, volume: 1800},

        normalEngine: {power: 120, volume: 2400},

        monsterEngine: {power: 200, volume: 3500}
    }

    let carriage = {
        hatchback: {type: 'hatchback', color: inputObject.color},
        coupe: {type: 'coupe', color: inputObject.color}
    }

    const wheel = (inputObject.wheelsize % 2 !== 0) ? inputObject.wheelsize : (inputObject.wheelsize - 1);


    let modifiedCarObject = {
        model: inputObject.model,
        engine: {power: inputObject.power, volume: ''},
        carriage: carriage[inputObject.carriage],
        wheels: Array(4).fill(wheel)
    }

    if (inputObject.power <= 90) {
        modifiedCarObject.engine = engine.smallEngine;
    } else if (inputObject.power > 90 && inputObject.power <= 120) {
        modifiedCarObject.engine = engine.normalEngine;
    } else
        modifiedCarObject.engine = engine.monsterEngine;



    return modifiedCarObject;
}


console.log(solve(
    {
        model: 'Opel Vectra',
        power: 110,
        color: 'grey',
        carriage: 'coupe',
        wheelsize: 17
    }
))

console.log(solve({ model: 'VW Golf II',

    power: 90,

    color: 'blue',

    carriage: 'hatchback',

    wheelsize: 14 }))


