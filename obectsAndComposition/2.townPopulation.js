function solve(inputArray) {
    let townPopulation = {};
    for (let element of inputArray) {
        let splitElement = element.split(' <-> ');
        let townName = splitElement[0];
        let townPopulationNumber = Number(splitElement[1]);
        if (!townPopulation.hasOwnProperty(townName)) {
            townPopulation[townName] = 0;
        }
        townPopulation[townName] += townPopulationNumber;


    }
    for (let [townName, townPopulationNumber] of Object.entries(townPopulation)) {
        console.log(`${townName} : ${townPopulationNumber}`)
    }
}


solve(['Istanbul <-> 100000',

    'Honk Kong <-> 2100004',

    'Jerusalem <-> 2352344',

    'Mexico City <-> 23401925',

    'Istanbul <-> 1000']
)