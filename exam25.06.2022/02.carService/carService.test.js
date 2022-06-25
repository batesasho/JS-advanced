const {assert, expect} = require('chai');
const {carService} = require('./03.carService');

describe('carService unitTest evaluation', function () {
    describe('isItExpensive function unitTesting', function () {
        it('should validate whether isItExpensive is a function, result OK', function () {
            assert.equal(typeof carService.isItExpensive, 'function');
        });
        it('should validate when the input is Transmission and Engine, result in returning expected message', function () {
            assert.equal(carService.isItExpensive('Transmission'), `The issue with the car is more severe and it will cost more money`);
            assert.equal(carService.isItExpensive('Engine'), `The issue with the car is more severe and it will cost more money`);
        });

        it('should validate when the input is not either Transmission or Engine, result in returning expected message', function () {
            assert.equal(carService.isItExpensive('Trabant'), `The overall price will be a bit cheaper`);
            assert.equal(carService.isItExpensive('Greda'), `The overall price will be a bit cheaper`);
        });
    });


    describe('discount function unitTesting', function () {
        it('should validate whether discount is a function, result OK', function () {
            assert.equal(typeof carService.discount, 'function');
        });

        it('should validate when the input is incorrect values, result throw Error', function () {
            assert.throw(() => carService.discount('5', 6), "Invalid input");
            assert.throw(() => carService.discount(5, '6'), "Invalid input");
            assert.throw(() => carService.discount("5", '6'), "Invalid input");
        });

        it('should validate when number of Parts is equal or less than 2, result return expected message', function () {
            assert.equal(carService.discount(2, 1), "You cannot apply a discount");
            assert.equal(carService.discount(1, 1), "You cannot apply a discount");
            assert.equal(carService.discount(0, 1), "You cannot apply a discount");
            assert.equal(carService.discount(-1, 1), "You cannot apply a discount");
        });

        it('should validate when number of Parts is greater than 2 and less than or equal to 7, result return expected message', function () {
            let totalPrice = 3
            let result = (15 / 100) * totalPrice;
            assert.equal(carService.discount(3, totalPrice), `Discount applied! You saved ${result}$`);
            assert.equal(carService.discount(5, totalPrice), `Discount applied! You saved ${result}$`);
            assert.equal(carService.discount(7, totalPrice), `Discount applied! You saved ${result}$`);

        });

        it('should validate when number of Parts is greater than  7, result return expected message', function () {
            let totalPrice =5
            let result = (30 / 100) * totalPrice;
            assert.equal(carService.discount(8, totalPrice), `Discount applied! You saved ${result}$`);
            assert.equal(carService.discount(10, totalPrice), `Discount applied! You saved ${result}$`);
            assert.equal(carService.discount(700, totalPrice), `Discount applied! You saved ${result}$`);

        });


    });


    describe('isItExpensive function unitTesting', function () {
        it('should validate whether partsToBuy is a function, result OK', function () {
            assert.equal(typeof carService.partsToBuy, 'function');
        });

        it('should validate when the input is incorrect values, result throw Error', function () {
            assert.throw(() => carService.partsToBuy('5', ['neshto']), "Invalid input");
            assert.throw(() => carService.partsToBuy([{part: "blowoff valve", price: 90}], '6'), "Invalid input");
            assert.throw(() => carService.partsToBuy("5", '6'), "Invalid input");
        });
        it('should validate when the input is correct values and partsCatalog is empty array, result return expected message', function () {
            assert.equal(carService.partsToBuy([], ["name"]), 0);

        });

        it('should validate when the inputs are correct , result calc the final price and return expected message', function () {
            assert.equal(carService.partsToBuy([{part: "blowoff valve", price: 90}, {
                part: "coil springs",
                price: 100 }], ["blowoff valve", "coil springs"]), 190);
        });
        it('should validate when the inputs are correct , result calc the final price and return expected message', function () {
            assert.equal(carService.partsToBuy([{part: "blowoff valve", price: 1}, {
                part: "coil springs",
                price: 1000 }], ["blowoff valve", "coil springs"]), 1001);
        });
        it('should validate when the inputs are correct , result calc the final price and return expected message', function () {
            assert.equal(carService.partsToBuy([{part: "blowoff valve", price: 1}, {
                part: "coil springs",
                price: 1000 }], ["blowoff valve"]), 1);
        });


    });

});