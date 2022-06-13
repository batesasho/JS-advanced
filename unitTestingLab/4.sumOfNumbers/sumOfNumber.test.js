const {assert} = require('chai')
let {sum} = require('./sumOfNumbers');


describe('sumOfNumbers', () => {
    it('sum all positive numbers in array OK', () => {
        assert.equal(sum([1, 2, 3]), 6);
    })
    it('sum all positive and negative numbers in array OK ', () => {
        assert.equal(sum([-1, 2, 3]), 4);
    });
    it('sum all negative numbers in array OK ', () => {
        assert.equal(sum([-1, -2, -3]), -6);
    });
    it('array contains string element OK', () => {
        assert.equal(sum(['-1', -2, -3]), -6);
    });

});