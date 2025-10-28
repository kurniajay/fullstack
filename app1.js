const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Our in-memory JSON data store
let books = [
  { id: 1, title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', price: 25.00, quantity: 10 },
  { id: 2, title: 'Pride and Prejudice', author: 'Jane Austen', price: 15.50, quantity: 5 },
  { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee', price: 10.00, quantity: 7 }
];

// READ all books
app.get('/books', (req, res) => {
  res.status(200).json(books);
});

// READ a specific book by ID
app.get('/books/:id', (req, res) => {
  const book = books.find((b) => b.id === parseInt(req.params.id));
  if (book) {
    res.status(200).json(book);
  } else {
    res.status(404).send("Book not found");
  }
});

// CREATE a new book
app.post('/books', (req, res) => {
  const newBook = {
    id: books.length + 1,
    title: req.body.title,
    author: req.body.author,
    price: req.body.price,
    quantity: req.body.quantity
  };
  books.push(newBook);
  res.status(201).json(newBook);
});

// UPDATE (replace entire book)
app.put('/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = books.findIndex(b => b.id === id);
  if (index !== -1) {
    books[index] = { id, ...req.body };
    res.status(200).json(books[index]);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

// PATCH (update specific fields)
app.patch('/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const book = books.find(b => b.id === id);
  if (book) {
    Object.assign(book, req.body);
    res.status(200).json(book);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

// DELETE a book
app.delete('/books/:id', (req, res) => {
  const initialLength = books.length;
  books = books.filter(book => book.id !== parseInt(req.params.id));
  if (books.length === initialLength) {
    return res.status(404).json({ message: 'Book not found' });
  }
  res.status(200).json({ message: 'Book deleted successfully' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
