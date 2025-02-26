import BookInput from "./BookInput";
import BookList from "./BookList";
import BookDetail from "./BookDetail";

const BookMain = (props) => {
  return (
    <main className="main-content">
      <div className="content-section">
        <BookInput
          onAddBook={props.onAddBook}
          onUpdateBook={props.onUpdateBook}
          editingBook={props.editingBook}
        />
        <BookList
          books={props.books}
          onDeleteBook={props.onDeleteBook}
          onSelectBook={props.onSelectBook}
          setEditingBook={props.setEditingBook}
        />
      </div>
      <div className="detail-section">
        <BookDetail book={props.selectedBook} />
      </div>
    </main>
  );
};

export default BookMain;
