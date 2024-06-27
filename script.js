// If you haven’t already, set up your project with skeleton HTML/CSS and JS files.

// All of your book objects are going to be stored in an array, so add a function to the script (not the constructor) that can take user’s input and store the new book objects into an array. Your code should look something like this:
// const myLibrary = [];
// function Book() {
//   // the constructor...
// }
// function addBookToLibrary() {
//   // do stuff here
// }

// Write a function that loops through the array and displays each book on the page. You can display them in some sort of table, or each on their own “card”. It might help for now to manually add a few books to your array so you can see the display.

// Add a “NEW BOOK” button that brings up a form allowing users to input the details for the new book: author, title, number of pages, whether it’s been read and anything else you might want. How you decide to display this form is up to you. For example, you may wish to have a form show in a sidebar or you may wish to explore dialogs and modals using the <dialog> tag. However you do this, you will most likely encounter an issue where submitting your form will not do what you expect it to do. That’s because the submit input tries to send the data to a server by default. This is where event.preventDefault(); will come in handy. Check out the documentation for event.preventDefault and see how you can solve this issue!

// Add a button on each book’s display to remove the book from the library.

// You will need to associate your DOM elements with the actual book objects in some way. One easy solution is giving them a data-attribute that corresponds to the index of the library array.

// Add a button on each book’s display to change its read status.

// To facilitate this you will want to create the function that toggles a book’s read status on your Book prototype instance.

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

// the constructor...
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  // do stuff here
}

// Show the books in Library

const cardContainer = document.getElementById("libraryContainer");
function showCards(array) {
  array.forEach((element, index) => {
    const card = document.createElement("div");
    card.classList.add("card"); // Add any necessary classes
    card.setAttribute("data-index", index); // Add data attribute
    card.id = `card-${index}`; // Optionally, set the id

    const cardContent = `
    <div class="book-title-container"><h3>${element.title}</h3></div>
    <div class="book-author-container"><p><strong>Author:</strong> ${element.author}</p></div>
    <div class="book-pages-container"><p><strong>Pages:</strong> ${element.pages}</p></div>
    <div class="book-read-container"><p><strong>Read:</strong> ${
      element.read ? "Book has been read" : "Not read yet"
    }</p></div>
  `;

    card.innerHTML = cardContent;
    cardContainer.appendChild(card);
  });
}

showCards(myLibrary);
