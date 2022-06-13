const {expect, assert} = require('chai');
let {isSymmetric} = require('./checkForSymmetry')


describe('check for Symmetry', () => {
    it('should check for symmetric array elements OK', () => {
        assert.isTrue(isSymmetric([1, 2, 2, 1]))
    });

    it('should check for non-symmetric array elements notOK', () => {
        assert.isFalse(isSymmetric([1, 2, 2]))
    });

    it('should check for non array elements number notOK', () => {
        assert.isFalse(isSymmetric(1))
    });

    it('should check for non array elements string notOK', () => {
        assert.isFalse(isSymmetric('1'))
    });
    it('should check for non array elements string notOK', () => {
        assert.isFalse(isSymmetric('1', '2'))
    });

    it('should check for array elements strings OK', () => {
        assert.isOk(isSymmetric(['1', '2', '1']))
    });
    it('should check for array elements strings OK', () => {
        expect(isSymmetric(['1', '2', '2', '1'])).to.be.true;

    });

    it('should check for array elements mixed notOK', () => {
        expect(isSymmetric(['1', '2', 2, 1])).to.be.false;
    });


})