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
      bookPages.value === '' ) {
        alert('insert data')
      } else {
        libraryBooks = new Book(bookTitle.value, bookAuthor.value, bookPages.value, bookRead.checked);
        console.log(myLibrary);
        return myLibrary.push(libraryBooks);
      }
}

addBook.addEventListener('click', addBookToLibrary)
addBook.addEventListener('click', () => {
  const card = document.createElement('div');
  card.setAttribute('class', 'card');
  const cardTitle = document.createElement('p');
  cardTitle.setAttribute('class', 'card-title');
  const cardAuthor = document.createElement('p');
  cardAuthor.setAttribute('class', 'card-author');
  const cardPages = document.createElement('p');
 cardPages.setAttribute('class', 'card-pages');
  const cardRead = document.createElement('p');
 cardRead.setAttribute('class', 'card-read');
  const isRead = document.createElement('button');
  isRead.setAttribute('class', 'btn-read');
  card.appendChild(cardTitle)
  card.appendChild(cardAuthor)
  card.appendChild(cardPages)
  card.appendChild(cardRead)
  card.appendChild(isRead)
  const books = myLibrary.map(({title, author, pages, read}) => {
    cardTitle.textContent = `Book title: ${title}`
    cardAuthor.textContent = `Author: ${author}`
    cardPages.textContent = `Pages: ${pages}`
    cardRead.textContent = `I have ${read}`

    return cards.appendChild(card);
  })

  return books
})