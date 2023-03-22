/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const myLibrary = [];
const bookTitle = document.querySelector('.title')
const bookAuthor = document.querySelector('.author')
const bookPages = document.querySelector('.pages')
const bookRead = document.querySelector('.read')
const addBook = document.querySelector('.submit')

// eslint-disable-next-line no-unused-vars
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}


function addBookToLibrary(e) {
    e.preventDefault()
    libraryBooks = new Book(bookTitle.value, bookAuthor.value, bookPages.value, bookRead.value);
    console.log(myLibrary);
  return myLibrary.push(libraryBooks);
}

addBook.addEventListener('click', addBookToLibrary)
