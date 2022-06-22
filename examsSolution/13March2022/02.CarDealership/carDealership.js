class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
        this.carModelNames = [];

    }

    addCar(model, horsepower, price, mileage) {

        if (!(Number.isInteger(horsepower) || horsepower >= 0)) {
            throw new Error('Invalid input!');
        }
        if (!model) {
            throw new Error('Invalid input!');
        }
        if (!(typeof price === 'number' || price > 0)) {
            throw new Error('Invalid input!');
        }
        if (!(typeof mileage === 'number' || mileage > 0)) {
            throw new Error('Invalid input!');
        }

        this.availableCars.push({model, horsepower, price, mileage});
        this.carModelNames.push(model);
        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`
    }

    sellCar(model, desiredMileage) {
        if (!this.carModelNames.includes(model)) {
            throw new Error(`${model} was not found!`)
        }

        let getCarModel = this.getCarModeObjectByModel(model);
        if (getCarModel.mileage > desiredMileage) {

            if (getCarModel.mileage - desiredMileage <= 40000) {
                getCarModel.price *= 0.95;
            } else if (getCarModel.mileage - desiredMileage > 40000) {
                getCarModel.price *= 0.90;
            }
        }

        this.soldCars.push({
            model: getCarModel.model,
            horsepower: getCarModel.horsepower,
            soldPrice: getCarModel.price
        });
        let getCarIndex = this.availableCars.findIndex(element => element.model === model);
        this.availableCars.splice(getCarIndex, 1);

        this.carModelNames = this.carModelNames.filter(el => el !== model);
        this.totalIncome += getCarModel.price;
        return `${model} was sold for ${getCarModel.price.toFixed(2)}$`
    }

    currentCar() {
        if (!this.availableCars) {
            return `There are no available cars`;
        }
        let result = '-Available cars:\n';
        this.availableCars.forEach(element => {
            result += `---${element.model} - ${element.horsepower} HP - ${element.mileage.toFixed(2)} km - ${element.price.toFixed(2)}$\n`
        })
        return result.trim();
    }


    salesReport(criteria) {

        let criteriaOption = ["horsepower", "model"];
        if (!criteriaOption.includes(criteria)) {
            throw  new Error('Invalid criteria!');
        }

        if (typeof criteria === 'number') {
            this.soldCars.sort((a, b) => a.horsepower - b.horsepower);
        } else {
            this.soldCars.sort((a, b) => a.model.localeCompare(b.model))
        }


        let result = `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$\n`;
        result += `-${this.soldCars.length} cars sold:\n`;
        this.soldCars.forEach(element => {
            result += `---${element.model} - ${element.horsepower} HP - ${element.soldPrice.toFixed(2)}$\n`;
        })
        return result.trim();
    }

    getCarModeObjectByModel(model) {
        return this.availableCars.filter(element => element.model === model)[0];
    }


}



let dealership = new CarDealership('SoftAuto');

dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
console.log(dealership.currentCar());