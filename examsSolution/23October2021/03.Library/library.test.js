const {assert, expect} = require('chai');
const {library} = require('./library');


describe('library unitTest evaluation', function () {
    describe('validate calcPriceOfBook testing  ', function () {
        it('should check whether it is a function', function () {
            assert.equal(typeof library.calcPriceOfBook, 'function');
        });

        it('should validate with incorrect input data, result throw an Error', function () {
            assert.throw(() => library.calcPriceOfBook(5, "1986"), 'Invalid input')
            assert.throw(() => library.calcPriceOfBook(5, 1986), 'Invalid input')
            assert.throw(() => library.calcPriceOfBook('name', []), 'Invalid input')
        });
        it('should validate with correct input data when the year is older than 1980, result expected successful message', function () {
            assert.equal(library.calcPriceOfBook('name', 1976), `Price of name is 10.00`);
            assert.equal(library.calcPriceOfBook('name', 1980), `Price of name is 10.00`);
        });
        it('should validate with correct input data when the year is after 1980, result expected successful message', function () {
            assert.equal(library.calcPriceOfBook('name', 1987), `Price of name is 20.00`);
            assert.equal(library.calcPriceOfBook('name', 1990), `Price of name is 20.00`);
        });

    });


    describe('validate findBook testing  ', function () {
        it('should check whether it is a function', function () {
            assert.equal(typeof library.findBook, 'function');
        });

        it('should validate when the input Array has no elements inside , result throw an Error', function () {
            assert.throw(() => library.findBook([], 'hero'), "No books currently available");
        });

        it('should validate  when the searched book is in the array of Books', function () {
            assert.equal(library.findBook(["Troy", "Life Style", "Torronto"], 'Troy'), "We found the book you want.");
            assert.equal(library.findBook(["Troy", "Life Style", "Torronto"], 'Torronto'), "We found the book you want.");
        });

        it('should validate  when the searched book is not in the array of Books', function () {
            assert.equal(library.findBook(["Troy", "Life Style", "Torronto"], 'Pesho'), "The book you are looking for is not here!");
            assert.equal(library.findBook(["Troy", "Torronto"], 'Gosho'), "The book you are looking for is not here!");
        });


    });


    describe('validate arrangeTheBooks testing  ', function () {
        it('should check whether it is a function', function () {
            assert.equal(typeof library.arrangeTheBooks, 'function');
        });

        it('should validate when the input is incorrect, result throw an Error', function () {
            assert.throw(() => library.arrangeTheBooks("5"), "Invalid input");
            assert.throw(() => library.arrangeTheBooks(-1), "Invalid input");
        });

        it('should evaluate when the input is correct and free space available, result expected message returned', function () {
            assert.equal(library.arrangeTheBooks(0), "Great job, the books are arranged.");
            assert.equal(library.arrangeTheBooks(40), "Great job, the books are arranged.");
        });
        it('should evaluate when the input is correct but no space left, result expected message returned', function () {
            assert.equal(library.arrangeTheBooks(41), "Insufficient space, more shelves need to be purchased.");
            assert.equal(library.arrangeTheBooks(101), "Insufficient space, more shelves need to be purchased.");

        });

    });

});