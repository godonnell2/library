const myLibrary = [];

const submitButton = document.querySelector("#submitButton");
const addBookForm = document.querySelector("#addBookForm");

submitButton.addEventListener("click", function () {
  console.log(addBookForm.elements);
  const title = addBookForm.elements["title"].value;
  const author = addBookForm.elements["authorName"].value;
  const pageNumber = addBookForm.elements["pageNumber"].value;
  const read = addBookForm.elements["read"].checked;
  const bookTest = new Book(title, author, pageNumber, read);
  console.log(bookTest);
  // if empty any field give error message
  // if not number give error message (called validate form)
  myLibrary.push(bookTest);
  renderBooks();
});

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

const tbody = document.querySelector("tbody");
const template = document.querySelector("#bookrow");

// create a function convert this function to a ma
// p and store that to a variable
// after the result of the map function should be
// passed to tbody.replacechildren(clones)
function renderBooks() {
  const myRenderedBooks = myLibrary.map((b, index) => {
    const clone = template.content.cloneNode(true);
    let td = clone.querySelectorAll("td");
    td[0].textContent = b.title;
    td[1].textContent = b.author;
    td[2].textContent = b.pageNumber;
    td[3].textContent = b.read ? "Read" : "Not read";
    const button = clone.querySelector("button");
    button.addEventListener("click", () => {
      console.log("Delete", index);
      myLibrary.splice(index, 1);
      renderBooks();
    });
    return clone;
  });
  tbody.replaceChildren(...myRenderedBooks);
}
renderBooks();
