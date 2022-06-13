const {assert, expect} = require('chai');
const {createCalculator} = require('./addSubtract');


describe('createCalculator', function () {
    it('should add 6 result OK', function () {
        let result = createCalculator();
        result.add(6)
        assert.equal(result.get(), 6);
    });

    it('should add 6 and subtract 3 result OK', function () {
        let result = createCalculator();
        result.add(6)
        result.subtract(3)
        assert.equal(result.get(), 3);
    });

    it('should add 6 and subtract 3 as strings result OK', function () {
        let result = createCalculator();
        result.add("6")
        result.subtract("3")
        assert.equal(result.get(), 3);
    });

    it('should add 6 and subtract 3 as negative values result OK', function () {
        let result = createCalculator();
        result.add("-6")
        result.subtract("-3")
        assert.equal(result.get(), -3);
    });

    it('should check the initial value of 0 and result OK', function () {
        let result = createCalculator();
        assert.equal(result.get(), 0);
    });

    it('should check the initial value of 0 and result OK', function () {
        let result = createCalculator();
        assert.equal(result.get(), 0);
    });

    it('should check the incorrect Array input in add func and result NaN', function () {
        let result = createCalculator();
        result.add([0, 1])
        assert.isNaN(result.get());
    });

    it('should check the incorrect Array input in subtract func and result NaN', function () {
        let result = createCalculator();
        result.subtract([0, 1])
        assert.isNaN(result.get());
    });
    it('should check the add(),get() and subtract() are functions object OK', function () {
        let resultSubtract = typeof createCalculator().subtract;
        let resultAdd = typeof createCalculator().add;
        let resultGet = typeof createCalculator().get;
        assert.equal(resultSubtract, 'function');
        assert.equal(resultAdd, 'function');
        assert.equal(resultGet, 'function');
    });

    it('should check for not existing function object result Undefined', function () {
        let resultSubtract = typeof createCalculator().sum;
        assert.equal(resultSubtract, 'undefined');

    });

    it('should check for createCalculator is a func result OK', function () {
        let resultSubtract = typeof createCalculator;
        assert.equal(resultSubtract, 'function');

    });




});