import BookItem from "./BookItem";

const BookList = ({ books, onDeleteBook, onSelectBook, setEditingBook }) => {
  return (
    <div className="book-list">
      {books.map((book) => (
        <BookItem
          key={book.id}
          book={book}
          onDelete={() => onDeleteBook(book.id)}
          onSelect={() => onSelectBook(book)}
          onEdit={() => setEditingBook(book)}
        >
          <h3 className="book-title">{book.title}</h3>
          <p className="book-author">作者：{book.author}</p>
          <p className="book-year">出版年：{book.year}</p>
        </BookItem>
      ))}
    </div>
  );
};

export default BookList;
