var express = require("express");
var bodyParser = require("body-parser");
var dao = require("./data_access");

var app = express();
app.use(bodyParser.json()); //Parse JSON body

app.get("/books/:isbn", function(req, res) {
  var book = dao.findBook(req.params.isbn);
  if (book === undefined) {
    res.statusCode = 404;
    res.end();
  } else {
    res.send(book);
  }
});

app.get("/books", function(req, res) {
  var books = dao.getAllBooks();

  if (books === undefined) {
    res.statusCode = 404;
    res.end();
  } else {
    res.send(books);
  }
});

app.delete("/books/:isbn", function(req, res) {
  var book = dao.findBook(req.params.isbn);
  if (book === undefined) {
    res.statusCode = 404;
    res.end();
  } else {
    dao.deleteBook(req.params.isbn);
    res.send("book has been deleted");
  }
});

app.put("/books/:isbn", function(req, res) {
  if (req.params.isbn === undefined || req.body === undefined) {
    res.statusCode = 500;
    res.end();
    return;
  }
  dao.updateBook(req.params.isbn, req.body);
  res.end();
});

var port = 3000;
console.log("server starting on port: " + port);
app.listen(port);
