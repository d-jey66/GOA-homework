const BookCard = ({ book, onFavoriteToggle, isFavorite }) => {
  return (
    <div className="bg-gray-800 p-4 rounded shadow space-y-2 text-white">
      <h2 className="text-lg font-semibold">{book.title}</h2>
      <p className="text-sm text-gray-300">by {book.author}</p>
      <p className="text-sm italic text-gray-400">{book.genre}</p>
      <p className="text-gray-200">{book.description}</p>
      <button
        onClick={() => onFavoriteToggle(book._id)}
        className="text-blue-400 hover:underline"
      >
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </div>
  );
};

export default BookCard;
