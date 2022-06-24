const {assert, expect} = require('chai');
const {flowerShop} = require('./flowerShop');


describe('flowerShop unitTest evaluation', function () {
    describe('calcPriceOfFlowers testing', function () {
        it('should validate whether it is a function', function () {
            assert.equal(typeof flowerShop.calcPriceOfFlowers, 'function');
        });

        it('should validate when inputs are incorrect, result throw Error', function () {
            assert.throw(() => flowerShop.calcPriceOfFlowers(5, 4, 6), "Invalid input!");
            assert.throw(() => flowerShop.calcPriceOfFlowers('rose', '4', 6), "Invalid input!");
            assert.throw(() => flowerShop.calcPriceOfFlowers('rose', '4', '6'), "Invalid input!");
            assert.throw(() => flowerShop.calcPriceOfFlowers('rose', 4.1, 6), "Invalid input!");
            assert.throw(() => flowerShop.calcPriceOfFlowers('rose', 4, 6.1), "Invalid input!");
        });

        it('should validate when inputs are correct, result expected message', function () {
            assert.equal(flowerShop.calcPriceOfFlowers('rose', 2, 5), `You need $10.00 to buy rose!`);
        });
    });

    describe('checkFlowersAvailable testing', function () {
        it('should validate whether it is a function', function () {
            assert.equal(typeof flowerShop.checkFlowersAvailable, 'function');
        });

        it('should validate when input is correct, return expected result when the flower is in the Array', function () {
            assert.equal(flowerShop.checkFlowersAvailable('Rose', ["Rose", "Lily", "Orchid"]), `The Rose are available!`);
        });
        it('should validate when input is correct, return expected result when the flower is not in the Array', function () {
            assert.equal(flowerShop.checkFlowersAvailable('Tree', ["Rose", "Lily", "Orchid"]), `The Tree are sold! You need to purchase more!`);
        });
    });

    describe('sellFlowers testing', function () {
        it('should validate whether it is a function', function () {
            assert.equal(typeof flowerShop.sellFlowers, 'function');
        });

        it('should validate when the input are incorrect Array and Space, result throw Error', function () {
            assert.throw(() => flowerShop.sellFlowers(5,5), 'Invalid input!');
            assert.throw(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"],'5'), 'Invalid input!');
            assert.throw(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"],-1), 'Invalid input!');
            assert.throw(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"],10), 'Invalid input!');
            assert.throw(() => flowerShop.sellFlowers(undefined,10), 'Invalid input!');
            assert.throw(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"],), 'Invalid input!');
        });

        it('should validate when the input is correct, result expected message returned', function () {
            assert.equal(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"],1),"Rose / Orchid" );
            assert.equal(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"],0),"Lily / Orchid" );
        });
    });
});