function solve(inputArray) {
    let heroArray = [];

    inputArray.forEach(element => {
        let heroObject = {};
        [heroObject['name'], heroObject['level'], heroObject['items']] = element.split(" / ");
        heroObject['level'] = Number(heroObject['level']);
        heroObject['items'] = (heroObject['items']) ? heroObject['items'].split(', ') : [];
        heroArray.push(heroObject);
    })

    console.log(JSON.stringify(heroArray));

}


solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
])