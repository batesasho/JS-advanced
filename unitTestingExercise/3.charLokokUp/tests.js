const {assert, except} = require('chai');
const {lookupChar} = require('./charLookUp');


describe('lookupChar validation', function () {
    it('should has valid input string "alexander" and index = 3 result return char "x" ', function () {
        assert.equal(lookupChar('alexander', 3), 'x');
    });

    it('should has invalid input string is number index is correct 3 result return undefined ', function () {
        assert.isUndefined(lookupChar(123456, 3));
    });

    it('should has invalid input index not a number and correct string result return undefined ', function () {
        assert.isUndefined(lookupChar('string', '2'));
    });

    it('should has valid string and our of range index result return incorrect index ', function () {
        assert.equal(lookupChar('string', 12), 'Incorrect index');
    });

    it('should has invalid input index negative number and correct string result return undefined ', function () {
        assert.equal(lookupChar('string', -1), 'Incorrect index');
    });

    it('should has invalid input index floating number and correct string result return incorrect index ', function () {
        assert.isUndefined(lookupChar('string', 1.5));
    });

});