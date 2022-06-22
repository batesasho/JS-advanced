let {expect, assert} = require('chai');
let {bookSelection} = require('./bookSelection');


describe('test bookSelection object', function () {
    describe('test isGenreSuitable function', function () {
        it('should test whether is is a function type result OK', function () {
            assert.equal(typeof bookSelection.isGenreSuitable, 'function');
        });

        it('should input genre Thriller and age less 12 result correct message return nOK', function () {
            assert.equal(bookSelection.isGenreSuitable('Thriller', 12), "Books with Thriller genre are not suitable for kids at 12 age")
        });

        it('should input genre Horror and age  1 result correct message return nOK', function () {
            assert.equal(bookSelection.isGenreSuitable('Horror', 1), "Books with Horror genre are not suitable for kids at 1 age")
        });

        it('should input genre Horror and age  18 result correct message return OK', function () {
            assert.equal(bookSelection.isGenreSuitable('Comedy', 18), "Those books are suitable")
        });

        it('should input genre Horror and age is 18 result correct message return OK', function () {
            assert.equal(bookSelection.isGenreSuitable('Comedy', 18), "Those books are suitable")
        });

    });

    describe('test isItAffordable function', function () {

        it('should test whether is is a function type result OK', function () {
            assert.equal(typeof bookSelection.isItAffordable, 'function');
        });

        it('input budget is not a number', function () {
            assert.throw(() => bookSelection.isItAffordable(5, '5'), "Invalid input");
        });


        it('input budget and price are not a number  should throw error nOK', function () {
            assert.throw(() => bookSelection.isItAffordable('4', '1'), Error, "Invalid input");
        });

        it('input price is not a number  should throw error nOK', function () {
            assert.throw(() => bookSelection.isItAffordable('4', 1), Error, "Invalid input");
        });

        it('correct input , the price is bigger than budget return Not enough budget message', function () {
            assert.equal(bookSelection.isItAffordable(4, 1), "You don't have enough money");
        });

        it('correct input , the price is within the budget return Not enough budget message', function () {
            assert.equal(bookSelection.isItAffordable(1, 4), "Book bought. You have 3$ left");
        });
    });

    describe('test suitableTitles function', function () {
        it('should test whether is is a function type result OK', function () {
            assert.equal(typeof bookSelection.suitableTitles, 'function');
        });

        it('input array is incorrect, string instead result in throw error message', function () {
            assert.throw(() => bookSelection.suitableTitles('5', '5'), "Invalid input");
        });

        it('input array is incorrect, object instead result in throw error message', function () {
            assert.throw(() => bookSelection.suitableTitles({'book': '5'}, '5'), "Invalid input");
        });

        it('input array is incorrect, integer instead result in throw error message', function () {
            assert.throw(() => bookSelection.suitableTitles(5, '5'), "Invalid input");
        });

        it('input string is incorrect, integer instead result in throw error message', function () {
            assert.throw(() => bookSelection.suitableTitles([{
                title: "The Da Vinci Code",
                genre: "Thriller"
            },], Error, 4), "Invalid input");
        });

        it('correct input result to adding book and genre into array and return the changed array', function () {
            assert.equal(bookSelection.suitableTitles([{title: "Vinci Code", genre: "Thriller"},{title: "Horror", genre: "Thriller"}], 'Thriller'),
                [ 'Vinci Code', 'Horror' ]);
        });
    });

});