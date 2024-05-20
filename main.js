const myLibrary = [];

// the constructor...

function book(title, author, pageNumber, read) {
  this.title = title;
  this.author = author;
  this.pageNumber = pageNumber;
  this.read = read;
  this.info = function () {
    return [this.title, this.author, this.pageNumber, this.read].join(", ");
  };
}

function addBookToLibrary() {
  // do stuff here
}
