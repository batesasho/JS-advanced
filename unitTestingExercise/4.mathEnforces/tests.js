const {expect, assert} = require('chai');
const {mathEnforcer} = require('./mathEnforces');

describe('mathEnforces unitTest evaluation', function () {
    describe('addFive function evaluation', function () {

        it('should check addFive is a function', function () {
            let result = (typeof mathEnforcer.addFive);
            assert.equal(result, 'function')
        });

        it('should correct positive integer number input result return value plus 5', function () {
            let result = mathEnforcer.addFive(0);
            assert.equal(result, 5)
        });

        it('should correct negative integer number input result return value 0', function () {
            let result = mathEnforcer.addFive(-5);
            assert.equal(result, 0)
        });

        it('should correct floating point number input result return  5.5', function () {
            let result = mathEnforcer.addFive(0.5);
            assert.closeTo(result, 5.5, 0.01);
        });

        it('should correct negative floating point number input result return  4.5', function () {
            let result = mathEnforcer.addFive(-0.5);
            assert.closeTo(result, 4.5, 0.01);
        });

        it('should has a invalid input string result return undefined', function () {
            let result = mathEnforcer.addFive('A');
            assert.isUndefined(result)
        });

        it('should has a invalid input Array result return undefined', function () {
            let result = mathEnforcer.addFive([1, 2, 3]);
            assert.isUndefined(result)
        });

        it('should has a invalid input Object result return undefined', function () {
            let result = mathEnforcer.addFive({a: 1});
            assert.isUndefined(result)
        });

        it('should has a invalid input missing a number result return undefined', function () {
            let result = mathEnforcer.sum('');
            assert.isUndefined(result)
        });

    });

    describe('subtractTen function evaluation', function () {
        it('should check subtractTen is a function', function () {
            let result = (typeof mathEnforcer.subtractTen);
            assert.equal(result, 'function')
        });

        it('should correct positive integer number input result return value minus 10', function () {
            let result = mathEnforcer.subtractTen(0);
            assert.equal(result, -10)
        });

        it('should correct positive integer number input result return value  10', function () {
            let result = mathEnforcer.subtractTen(20);
            assert.equal(result, 10)
        });

        it('should correct negative integer number input result return value -15', function () {
            let result = mathEnforcer.subtractTen(-5);
            assert.equal(result, -15)
        });

        it('should correct floating point number input result return  -9.5', function () {
            let result = mathEnforcer.subtractTen(0.5);
            assert.closeTo(result, -9.5, 0.01);
        });

        it('should correct negative floating point number input result return  -10.5', function () {
            let result = mathEnforcer.subtractTen(-0.5);
            assert.closeTo(result, -10.5, 0.01);
        });

        it('should has a invalid input string result return undefined', function () {
            let result = mathEnforcer.subtractTen('A');
            assert.isUndefined(result)
        });

        it('should has a invalid input Array result return undefined', function () {
            let result = mathEnforcer.subtractTen([1, 2, 3]);
            assert.isUndefined(result)
        });

        it('should has a invalid input Object result return undefined', function () {
            let result = mathEnforcer.subtractTen({a: 1});
            assert.isUndefined(result)
        });

        it('should has a invalid input missing a number result return undefined', function () {
            let result = mathEnforcer.sum('');
            assert.isUndefined(result)
        });
    });

    describe('sum function evaluation', function () {
        it('should check subtractTen is a function', function () {
            let result = (typeof mathEnforcer.sum);
            assert.equal(result, 'function')
        });

        it('should correct positive integer number input result return value minus 0', function () {
            let result = mathEnforcer.sum(0, 0);
            assert.equal(result, 0)
        });

        it('should correct positive integer number input result return value  130', function () {
            let result = mathEnforcer.sum(20, 10);
            assert.equal(result, 30)
        });

        it('should correct negative integer number input result return value -15', function () {
            let result = mathEnforcer.sum(-5, -10);
            assert.equal(result, -15)
        });

        it('should correct floating point number input result return  -9.5', function () {
            let result = mathEnforcer.sum(0.5, -10.0);
            assert.closeTo(result, -9.5, 0.01);
        });

        it('should correct negative floating point number input result return  -10.5', function () {
            let result = mathEnforcer.sum(-0.5, -10.0);
            assert.closeTo(result, -10.5, 0.01);
        });

        it('should has a invalid input string result return undefined', function () {
            let result = mathEnforcer.sum('A', 4);
            assert.isUndefined(result)
        });

        it('should has a invalid input string result return undefined', function () {
            let result = mathEnforcer.sum(3, 'A');
            assert.isUndefined(result)
        });

        it('should has a invalid input Array result return undefined', function () {
            let result = mathEnforcer.sum(3, [1, 2, 3]);
            assert.isUndefined(result)
        });

        it('should has a invalid input Object result return undefined', function () {
            let result = mathEnforcer.sum(1, {a: 1});
            assert.isUndefined(result)
        });

        it('should has a invalid input missing one number result return undefined', function () {
            let result = mathEnforcer.sum('', {a: 1});
            assert.isUndefined(result)
        });
    });


});