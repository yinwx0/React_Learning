import React from "react";

const BookDetail = ({ book }) => {
  if (!book) return null;
  return (
    <div className="book-detail">
      <h2>图书详情</h2>
      <div>书名: {book.title}</div>
      <div>作者: {book.author}</div>
      <div>出版年份: {book.year}</div>
    </div>
  );
};

export default BookDetail;
