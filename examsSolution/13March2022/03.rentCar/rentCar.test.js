const {assert} = require('chai');
const {rentCar} = require('./rentCar');


describe('rentCar unitTest evaluation', function () {
    describe('searchCar function testing', function () {
        it('should check whether that is a function', function () {
            assert.equal(typeof rentCar.searchCar, 'function');
        });

        it('input array is  a number result throw Error', function () {
            assert.throw(() => rentCar.searchCar(5, '5'), "Invalid input");
        });
        it('input number is a string instead of number, result throw Error', function () {
            assert.throw(() => rentCar.searchCar([1, 2, 3], 3), "Invalid input");
        });

        it('input not match any models, result throw Error', function () {
            assert.throw(() => rentCar.searchCar(['bmw', 'audi'], 'honda'), 'There are no such models in the catalog!');
        });

        it('input is correct result return expected message', function () {
            assert.equal(rentCar.searchCar(['bmw', 'audi'], 'audi'), 'There is 1 car of model audi in the catalog!');
        });

        it('input is correct result return expected message', function () {
            assert.equal(rentCar.searchCar(['bmw', 'audi', 'audi'], 'audi'), 'There is 2 car of model audi in the catalog!');
        });
    });

    describe('calculatePriceOfCar function testing', function () {
        it('should check whether that is a function', function () {
            assert.equal(typeof rentCar.calculatePriceOfCar, 'function');
        });
        it('input model is  a number result throw Error', function () {
            assert.throw(() => rentCar.calculatePriceOfCar(5, '5'), "Invalid input");
        });
        it('input day is a string instead of number, result throw Error', function () {
            assert.throw(() => rentCar.calculatePriceOfCar('audi', "days"), "Invalid input");
        });

        it('input not such model, result throw Error', function () {
            assert.throw(() => rentCar.calculatePriceOfCar('moskvich', 3), 'No such model in the catalog!');
        });


        it('input is correct, result expected message', function () {

            assert.equal(rentCar.calculatePriceOfCar('Audi', 2), `You choose Audi and it will cost $72!`);
        });

        it('input is correct, result expected message', function () {

            assert.equal(rentCar.calculatePriceOfCar('Volkswagen', 2), `You choose Volkswagen and it will cost $40!`);
        });
        it('input is correct, result expected message', function () {

            assert.equal(rentCar.calculatePriceOfCar('Toyota', 2), `You choose Toyota and it will cost $80!`);
        });

        it('input is correct, result expected message', function () {

            assert.equal(rentCar.calculatePriceOfCar('BMW', 2), `You choose BMW and it will cost $90!`);
        });

        it('input is correct, result expected message', function () {

            assert.equal(rentCar.calculatePriceOfCar('Mercedes', 2), `You choose Mercedes and it will cost $100!`);
        });

    });
    describe('checkBudget function testing', function () {
        it('should check whether that is a function', function () {
            assert.equal(typeof rentCar.checkBudget, 'function');
        });

        it('incorrect input costPerDay is not a number, throw Error ', function () {
            assert.throw(() => rentCar.checkBudget('1',2,3), "Invalid input!");
        });

        it('incorrect input days is not a number, throw Error ', function () {
            assert.throw(() => rentCar.checkBudget(1,'2',3), "Invalid input!");
        });

        it('incorrect input budget is not a number, throw Error ', function () {
            assert.throw(() => rentCar.checkBudget(1,2,'3'), "Invalid input!");
        });

        it('budget is less than the cost, result expected message nOK ', function () {
            assert.equal( rentCar.checkBudget(5,2,1), 'You need a bigger budget!');
        });
        it('budget is less than the cost, result expected message nOK ', function () {
            assert.equal( rentCar.checkBudget(5,2,9), 'You need a bigger budget!');
        });

        it('budget is bigger than the cost, result expected message  OK', function () {
            assert.equal( rentCar.checkBudget(5,2,20), 'You rent a car!');
        });
        it('budget is equal to cost, result expected message  OK', function () {
            assert.equal( rentCar.checkBudget(5,1,5), 'You rent a car!');
        });
    });

});