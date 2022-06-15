const {isOddOrEven} = require('./evenOdd');
const {except, assert} = require('chai');


describe('evenOdd', function () {
    it('should check if string length is Even result message "even" ', function () {
        assert.equal(isOddOrEven('self'), 'even');
    });

    it('should check if string length is Odd result message "odd" ', function () {
        assert.equal(isOddOrEven('sel'), 'odd');
    });

    it('should check if string length is empty result message "even" ', function () {
        assert.equal(isOddOrEven(''), 'even');
    });

    it('should check incorrect input number result undefined ', function () {
        assert.isUndefined(isOddOrEven(111));
    });
    it('should check incorrect input array of numbers result undefined ', function () {
        assert.isUndefined(isOddOrEven([111]));
    });
    it('should check incorrect input object  result undefined ', function () {
        assert.isUndefined(isOddOrEven({a: 1, b: 2}));
    });

});