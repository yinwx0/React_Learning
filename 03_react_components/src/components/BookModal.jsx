import React from "react";

const BookModal = ({ book, isOpen, onClose }) => {
  if (!isOpen || !book) return null;

  return (
    <>
      {/* 背景遮罩 */}
      <div className="modal-backdrop" onClick={onClose}></div>
      {/* 弹窗内容 */}
      <div className="book-modal">
        <button className="close-button" onClick={onClose}>
          关闭
        </button>
        <img
          className="book-cover"
          src={`https://via.placeholder.com/150?text=${book.title}`}
          alt="Book Cover"
        />
        <div className="book-details">
          <div>书名: {book.title}</div>
          <div>作者: {book.author}</div>
          <div>出版年份: {book.year}</div>
          <div className="book-description">
            <h3>图书详情</h3>
            <p>这是一本非常精彩的书籍，内容丰富，引人入胜。</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookModal;
