var books = {}; //In-memory database
books[100] = { isbn: "100", title: "Jaws", price: 14.95 };
books[101] = { isbn: "101", title: "The Great Gatsby", price: 17.95 };
books[102] = { isbn: "102", title: "Huckleberry Finn", price: 8.95 };

module.exports.findBook = function(isbn) {
  return books[isbn];
};

module.exports.deleteBook = function(isbn) {
  delete books[isbn];
};

module.exports.getAllBooks = function() {
  return books;
};

module.exports.updateBook = function(isbn, book) {
  books[isbn] = book;
};
