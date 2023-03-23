/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const myLibrary = [];
const bookTitle = document.querySelector('.title')
const bookAuthor = document.querySelector('.author')
const bookPages = document.querySelector('.pages')
const bookRead = document.querySelector('.read')
const addBook = document.querySelector('.submit')
const cards = document.querySelector('.cards')
// eslint-disable-next-line no-unused-vars
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}


function addBookToLibrary(e) {
  e.preventDefault()
  if (bookTitle.value === '' ||
      bookAuthor.value === '' ||
      bookPages.value === '' ||
      bookRead.value === '') {
        alert('insert data')
      } else {
        libraryBooks = new Book(bookTitle.value, bookAuthor.value, bookPages.value, bookRead.value);
        console.log(myLibrary);
        return myLibrary.push(libraryBooks);
      }
}

addBook.addEventListener('click', addBookToLibrary)
addBook.addEventListener('click', () => {
  const books = myLibrary.map((book) => {
    cards.textContent = book;
    return cards;
  })

  return books
})