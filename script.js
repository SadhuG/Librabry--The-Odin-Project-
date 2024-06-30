const myLibrary = [
  {
    title: "The Communist Manifesto",
    author: "Karl Marx & Fredrick Engels",
    pages: 100,
    read: true,
  },
  {
    title: "Sapiens",
    author: "Yuval Noah Harari",
    pages: 360,
    read: false,
  },
  {
    title: "Don't Shut Up",
    author: "Prakhar Gupta & Mudit Yadav",
    pages: 500,
    read: false,
  },
];

// the Book constructor...
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Book input
document.getElementById("addBook").addEventListener("submit", function (event) {
  event.preventDefault();
  const inputTitle = document.getElementById("title").value;
  const inputAuthor = document.getElementById("author").value;
  const inputPages = document.getElementById("pages").value;
  const inputRead = document.querySelector('input[name="read-status-update"]:checked').value;
  addBookToLibrary(inputTitle, inputAuthor, inputPages, inputRead, myLibrary);
});

// Adding input book to library
function addBookToLibrary(title, author, pages, read, myLibrary) {
  let readStatus = undefined;
  if (read == "true") {
    readStatus = true;
  }
  if (read == "false") {
    readStatus = false;
  }
  const newBook = new Book(title, author, pages, readStatus);
  myLibrary.unshift(newBook);
  showCards(myLibrary);
  resetForm();
}

// Reset the input form
function resetForm() {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("pages").value = "";
  document.getElementById("bookReadYes").checked = true;
  return;
}

// Show the books in Library
const cardContainer = document.getElementById("libraryContainer");
function showCards(myLibrary) {
  cardContainer.innerHTML = "";
  myLibrary.forEach((element, index) => {
    const card = document.createElement("div");
    card.classList.add("book-card"); // Add any necessary classes
    card.id = `${index}`; // Optionally, set the id

    const cardContent = `
  <div class="card-heading-wrapper">
    <div class="card-heading-container">
      <h3>${element.title}</h3>
    </div>
    <div class="author-page-wrapper">
      <div class="author-name-wrapper">
        <span>by</span>
        <p>${element.author}</p>
      </div>
      <div class="page-wrapper">
        <p>${element.pages} Pages</p>
      </div>
    </div>
  </div>
  <div class="book-read-and-remove-wrapper">
    <div class="book-read-wrapper">
      <p class="book-read-status"> ${element.read ? "Book has been read" : "Book not read yet"}</p>
      <button type="button" class="read-status-update" id="${index}" value="${element.read}">${
      element.read ? "Book not read yet" : "Book has been read"
    }</button>
          </div>
    <button type="button" class="remove-book-btn" id="${index}">Remove <br> Book</button>
  </div>
  `;

    card.innerHTML = cardContent;
    cardContainer.appendChild(card);
  });
}

// Removing Books from myLibrary
// Click handler for entire card container
cardContainer.addEventListener("click", function (btn) {
  // But only triggers for elements that have an remove-book-btn class
  if (btn.target.classList.contains("remove-book-btn")) {
    removeBook(btn.target.id, myLibrary);
  }
});
function removeBook(index, array) {
  array.splice(index, 1);
  showCards(myLibrary);
}

// Updating read status of books
cardContainer.addEventListener("click", function (e) {
  // But only triggers for elements that have an remove-book-btn class
  if (e.target.classList.contains("read-status-update")) {
    updateReadStatus(e.target.id, e.target.value, myLibrary);
  }
});

function updateReadStatus(index, value, array) {
  if (value == "true") {
    array[index].read = false;
    updateReadDisplay(index, array);
  }
  if (value == "false") {
    array[index].read = true;
    updateReadDisplay(index, array);
  }
}

// Updating read display of books
function updateReadDisplay(index, array) {
  const allCard = document.getElementsByClassName("book-card");
  const crrCard = allCard[index];
  const element = array[index];

  const cardContent = `
  <div class="card-heading-wrapper">
    <div class="card-heading-container">
      <h3>${element.title}</h3>
    </div>
    <div class="author-page-wrapper">
      <div class="author-name-wrapper">
        <span>by</span>
        <p>${element.author}</p>
      </div>
      <div class="page-wrapper">
        <p>${element.pages} Pages</p>
      </div>
    </div>
  </div>
  <div class="book-read-and-remove-wrapper">
    <div class="book-read-wrapper">
      <p class="book-read-status"> ${element.read ? "Book has been read" : "Book not read yet"}</p>
      <button type="button" class="read-status-update" id="${index}" value="${element.read}">${
    element.read ? "Book not read yet" : "Book has been read"
  }</button>
          </div>
    <button type="button" class="remove-book-btn" id="${index}">Remove <br> Book</button>
  </div>
  `;

  crrCard.innerHTML = cardContent;
}

showCards(myLibrary);
