class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired) {
        if (this.spaceAvailable < spaceRequired) {
            throw  new Error("Not enough space in the garden.")
        }
        this.plants.push({
            plantName,
            spaceRequired,
            ripe: false,
            quantity: 0
        })
        this.spaceAvailable -= spaceRequired;
        return `The ${plantName} has been successfully planted in the garden.`
    }

    ripenPlant(plantName, quantity) {
        let plantNameCheck = this.getPlanetObjectByName(plantName);
        if (!plantNameCheck) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }
        if (quantity <= 0) {
            throw new Error("The quantity cannot be zero or negative.");
        }

        if (plantNameCheck.ripe) {
            throw new Error(`The ${plantName} is already ripe.`);
        }

        plantNameCheck.ripe = true;
        plantNameCheck.quantity = quantity;
        if (quantity === 1) {
            return `${quantity} ${plantName} has successfully ripened.`
        } else {
            return `${quantity} ${plantName}s have successfully ripened.`
        }


    }

    harvestPlant(plantName) {
        let plantNameCheck = this.getPlanetObjectByName(plantName);
        if (!plantNameCheck) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }
        if (!plantNameCheck.ripe) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
        }
        this.storage.push({plantName: plantNameCheck.plantName, quantity: plantNameCheck.quantity});
        let getPlantIndex = this.plants.findIndex(element => element.plantName === plantName);
        this.spaceAvailable += this.plants[getPlantIndex].spaceRequired;
        this.plants.splice(getPlantIndex, 1);
        return `The ${plantName} has been successfully harvested.`
    }

    generateReport() {
        let result = '';
        this.plants.sort();
        result += `The garden has ${this.spaceAvailable} free space left.\n`;
        result += `Plants in the garden: ${(this.plants.map(el => el.plantName)).join(", ")}\n`;
        if (!this.storage) {
            result += "Plants in storage: The storage is empty."
        } else {
            result += `Plants in storage: ${(this.storage.map(el => el.plantName + ' (1)')).join(", ")} `;

        }

        return result;
    }

    getPlanetObjectByName(plantName) {
        return this.plants.filter(element => element.plantName === plantName)[0];
    }


}


// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 200));
// console.log(myGarden.addPlant('olive', 50));
//

const myGarden = new Garden(250)
console.log(myGarden.addPlant('raspberry', 20));
console.log(myGarden.addPlant('limone', 200));
console.log(myGarden.addPlant('que', 10));
console.log(myGarden.ripenPlant('que', 10));
console.log(myGarden.ripenPlant('limone', 1));
console.log(myGarden.ripenPlant('raspberry', 1));
console.log(myGarden.harvestPlant('que'));
console.log(myGarden.harvestPlant('raspberry'));
console.log(myGarden.generateReport());
