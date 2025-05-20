import Book from '../models/Book.js';

export const getBooks = async (req, res) => {
  const books = await Book.find({ user: req.user.id });
  res.json(books);
};

export const addBook = async (req, res) => {
  const newBook = new Book({ ...req.body, user: req.user.id });
  const saved = await newBook.save();
  res.status(201).json(saved);
};

export const deleteBook = async (req, res) => {
  await Book.findOneAndDelete({ _id: req.params.id, user: req.user.id });
  res.json("Book deleted");
};

export const toggleFavorite = async (req, res) => {
  const book = await Book.findOne({ _id: req.params.id, user: req.user.id });
  book.favorite = !book.favorite;
  await book.save();
  res.json(book);
};

export const searchBooks = async (req, res) => {
  const query = req.query.q || "";
  const books = await Book.find({
    user: req.user.id,
    $or: [
      { title: new RegExp(query, "i") },
      { author: new RegExp(query, "i") },
      { genre: new RegExp(query, "i") },
    ],
  });
  res.json(books);
};
