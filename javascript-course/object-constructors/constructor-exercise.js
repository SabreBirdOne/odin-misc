// https://www.theodinproject.com/lessons/node-path-javascript-objects-and-object-constructors#exercise

/* 
Write a constructor for making “Book” objects. We will revisit this in the next project. 
Your book objects should have the book’s title, author, the number of pages, 
and whether or not you have read the book.

Put a function into the constructor that can report the book info like so:
theHobbit.info(); // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"
*/

function Book(title, author, numPages) {
    if (!new.target) {
        throw Error("missing new before constructor call");
    }
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.isRead = false;
    this.info = function (){
        const isReadStr = this.isRead ? "read" : "not read yet"; 
        return `${this.title} by ${this.author}, ${this.numPages} pages, ` + isReadStr;
    }
}

const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 295);
theHobbit.info();
console.log(theHobbit.info());
const brokenHobbit = Book("The Hobbit", "J.R.R Tolkien", 295);