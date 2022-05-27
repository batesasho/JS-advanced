function solve(name, population, treasury) {
    let cityInfo = {};
    cityInfo['name'] = name;
    cityInfo['population'] = Number(population);
    cityInfo['treasury'] = Number(treasury);

    return cityInfo
}


console.log(solve('Tortuga', 7000, 15000))