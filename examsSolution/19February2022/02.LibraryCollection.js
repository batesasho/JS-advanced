class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
        this.bookNameArray = [];
    }

    addBook(bookName, bookAuthor) {
        if (this.books.length === this.capacity) {
            throw new Error('Not enough space in the collection.')
        }
        this.books.push(
            {bookName, bookAuthor, payed: false}
        );
        this.bookNameArray.push(bookName);
        return `The ${bookName}, with an author ${bookAuthor}, collect.`

    }

    payBook(bookName) {

        if (!this.bookNameArray.includes(bookName)) {
            throw new Error(`${bookName} is not in the collection.`)
        }
        if (this.getBookObjectByName(bookName).payed) {
            throw new Error(`${bookName} has already been paid.`)
        }
        this.getBookObjectByName(bookName).payed = true;
        return `${bookName} has been successfully paid.`;

    }

    removeBook(bookName) {
        if (!this.bookNameArray.includes(bookName)) {
            throw new Error(`The book, you're looking for, is not found.`)
        }
        if (!this.getBookObjectByName(bookName).payed) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`)
        }
        this.books.filter(element => element.bookName !== bookName);
        this.bookNameArray.filter(element => element !== bookName);
        return `${bookName} remove from the collection.`
    }

    getStatistics(bookAuthor) {


        this.books.sort((a, b) => a.bookName.localeCompare(b.bookName))
        let result = '';

        if (bookAuthor === undefined) {
            let emptySlots = this.capacity - this.books.length;
            result += `The book collection has ${ emptySlots } empty spots left.\n`
            this.books.forEach(bookObj => {
                result += `${bookObj.bookName} == ${bookObj.bookAuthor} - ${(bookObj.payed) ? "Has Paid" : "Not Paid"}.\n`
            })
        } else {
            let requiredBookObj = this.books.filter(book => book.bookAuthor === bookAuthor)[0];

            if (!requiredBookObj) {
                throw new Error(`${bookAuthor} is not in the collection.`);
            }

            result += `${requiredBookObj.bookName} == ${requiredBookObj.bookAuthor} - ${(requiredBookObj.payed) ? "Has Paid" : "Not Paid"}"`

        }
        return result.trim();
    }

    getBookObjectByName(bookName) {
        return this.books.filter(element => element.bookName === bookName)[0]
    }
}

const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());
