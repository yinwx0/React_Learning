import "./BookDetail.css";

const BookDetail = ({ book }) => {
  if (!book) return <div className="book-detail">请选择一本书查看详情</div>;

  return (
    <div className="book-detail">
      <h2>图书详情</h2>
      <div className="detail-item">
        <label>书名：</label>
        <span>{book.title}</span>
      </div>
      <div className="detail-item">
        <label>作者：</label>
        <span>{book.author}</span>
      </div>
      <div className="detail-item">
        <label>出版年：</label>
        <span>{book.year}</span>
      </div>
    </div>
  );
};

export default BookDetail;
