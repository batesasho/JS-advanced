const {assert, expect} = require('chai');

const {rgbToHexColor} = require('./rgbToHex');

describe('rgbToHexColor', () => {
    it('should convert to white', function () {
        assert.equal(rgbToHexColor(0, 0, 0), '#000000');

    });
    it('should convert to black', function () {
        assert.equal(rgbToHexColor(255, 255, 255), '#FFFFFF');

    });

    it('should convert to red', function () {
        assert.equal(rgbToHexColor(205, 38, 38), '#CD2626');

    });


    it('should return undefined for incorrect input parameters', function () {
        assert.isUndefined(rgbToHexColor(0, 0));
        assert.isUndefined(rgbToHexColor(0));
        assert.isUndefined(rgbToHexColor());

    });

    it('should return undefined for incorrect input parameters negatively', function () {
        assert.isUndefined(rgbToHexColor(0, 0, -1));
        assert.isUndefined(rgbToHexColor(0, -1, 0));
        assert.isUndefined(rgbToHexColor(-1, 0, 0));

    });

    it('should return undefined for incorrect input parameters bigger than max possible color hex value', function () {
        assert.isUndefined(rgbToHexColor(0, 0, 256));
        assert.isUndefined(rgbToHexColor(0, 256, 0));
        assert.isUndefined(rgbToHexColor(257, 0, 0));

    });

    it('should return undefined for incorrect input parameters float color hex value', function () {
        assert.isUndefined(rgbToHexColor(0, 0, 1.1));
        assert.isUndefined(rgbToHexColor(0, 1.1, 0));
        assert.isUndefined(rgbToHexColor(1.1, 0, 0));

    });



});