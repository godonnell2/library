const myLibrary = [];

// the constructor...

function Book(title, author, pageNumber, read) {
  this.title = title;
  this.author = author;
  this.pageNumber = pageNumber;
  this.read = read;
  this.info = function () {
    return [this.title, this.author, this.pageNumber, this.read].join(", ");
  };
}

const book1 = new Book("I am the Best", "Grace O Donnell", 42, true);
myLibrary.push(book1);
myLibrary.push(new Book("This is not my Voice on TV", "JT", 51, false));

myLibrary.forEach((book) => console.log(book));
myLibrary.forEach((book) => console.log(book.info()));

function addBookToLibrary() {
  // do stuff here
}

const tbody = document.querySelector("tbody");
const template = document.querySelector("#bookrow");

myLibrary.forEach((b) => {
  const clone = template.content.cloneNode(true);
  let td = clone.querySelectorAll("td");
  td[0].textContent = b.title;
  td[1].textContent = b.author;
  td[2].textContent = b.pageNumber;
  td[3].textContent = b.read ? "Read" : "Not read";
  tbody.appendChild(clone);
});
