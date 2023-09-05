/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const myLibrary = [];

const bookTitle = document.querySelector('.title')
const bookAuthor = document.querySelector('.author')
const bookPages = document.querySelector('.pages')
const bookRead = document.querySelector('.read')
const bookIndex = document.querySelector('.hidden')

const bookForm = document.querySelector('.open-form')
const addBook = document.querySelector('.submit')
const formContainer = document.querySelector('.form-wrapper')
const cards = document.querySelector('.cards')
// eslint-disable-next-line no-unused-vars

class Book {
  constructor(title, author, pages, read, index) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.index = index;
  }

}


const addBookToLibrary = (e) => {

  e.preventDefault();

  if (

    bookTitle.value === "" ||
    bookAuthor.value === "" ||
    bookPages.value === ""

  ) {

    alert("insert data");

  } else {

    libraryBooks = new Book(
      bookTitle.value,
      bookAuthor.value,
      bookPages.value,
      bookRead.checked,
      Number(bookIndex.value++)
    );
  
    return myLibrary.push(libraryBooks);
  }
}

const addBookToDom = () => {

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
  const deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('class', 'btn-delete');
  const cardIndex = document.createElement('input');
  cardIndex.setAttribute('type', 'hidden');

  card.appendChild(cardTitle)
  card.appendChild(cardAuthor)
  card.appendChild(cardPages)
  card.appendChild(cardRead)
  card.appendChild(isRead)
  card.appendChild(deleteBtn)

  const books = myLibrary.map(({title, author, pages, read, index}) => {
    cardTitle.textContent = `Book title: ${title}`
    cardAuthor.textContent = `Author: ${author}`
    cardPages.textContent = `Pages: ${pages}`

    if (read === true) {

      cardRead.textContent = `I have read this book`;
      isRead.textContent = 'Read'

    } else {

      cardRead.textContent = `I haven't read this book`;
      isRead.textContent = 'Not read'

    }

    cardIndex.value = index

    isRead.addEventListener("click", () => {
      if (isRead.innerText === "Read") {

        isRead.innerText = "Not read";
        cardRead.innerText = `I haven't read this book`;

      } else {

        isRead.innerText = "Read";
        cardRead.innerText = `I have read this book`;
      
      }
    });

    deleteBtn.textContent = 'Remove Book'
    formContainer.classList.remove('show')
    
    return cards.appendChild(card);
  })

  deleteBtn.addEventListener("click", () => {
    const newIndex = Number(cardIndex.value);
    const myIndex = myLibrary.findIndex((obj) => obj.index === newIndex);
    myLibrary.splice(myIndex, 1);

    return deleteBtn.parentElement.remove();
  });

  return books
};

const openForm = () => {
  return formContainer.classList.add('show')
}

addBook.addEventListener('click', addBookToLibrary)
addBook.addEventListener('click', addBookToDom)
bookForm.addEventListener('click', openForm)