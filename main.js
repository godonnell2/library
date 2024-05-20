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
myLibrary.push(new Book("This is not my Voice on TV", "JT", 51, true));

myLibrary.forEach((book) => console.log(book));
myLibrary.forEach((book) => console.log(book.info()));

function addBookToLibrary() {
  // do stuff here
}
