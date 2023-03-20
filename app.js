/* eslint-disable no-unused-vars */
const myLibrary = [];

// eslint-disable-next-line no-unused-vars
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

Book.prototype.sayTitle = function () {
    return `The title of this book is ${this.title}.`
}


const money = new Book('Money', 'Bob Rick', '186', 'not yet read');
const theDignityOfManHood = new Book('The Dignity of Manhood', 'Gbile Akanni', '158', 'read')
console.log(money.sayTitle())
console.log(money)
myLibrary.push(money, theDignityOfManHood)
console.log(myLibrary)

// function addBookToLibrary() {

// }