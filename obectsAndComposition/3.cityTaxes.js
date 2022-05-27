function cityTaxes(name, population, treasury) {
    let cityInfo = {};
    cityInfo['name'] = name;
    cityInfo['population'] = Number(population);
    cityInfo['treasury'] = Number(treasury);
    cityInfo['taxRate'] = 10;
    cityInfo['collectTaxes'] = function collectTaxes() {
        this.treasury += Math.floor(this.population * this.taxRate);
    };
    cityInfo['applyGrowth'] = function applyGrowth(percentage) {
        this.population += Math.floor(this.population * percentage / 100);
    }
    cityInfo['applyRecession'] = function applyRecession(percentage) {
        this.treasury -= Math.floor(this.treasury * percentage / 100);
    }


    return cityInfo
}


console.log(cityTaxes('Tortuga', 7000, 15000));

const city =

    cityTaxes('Tortuga',

        7000,

        15000);


console.log(city.population);

city.applyGrowth(5);
console.log(city.population);
city.applyRecession(5);

console.log(city.population);