const myLibrary = ["Test Title, Test Author, test no, read", "this is my book, grace o donnell, 753, read," "I am the best, Gracey bee, 673, read"];

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


myLibrary.forEach((book) => console.log(book));

function addBookToLibrary() {
  // do stuff here
}
