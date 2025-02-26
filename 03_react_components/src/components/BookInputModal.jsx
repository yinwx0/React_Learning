import React, { useState } from "react";

const BookInputModal = ({ isOpen, onClose }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author && year) {
      onClose({ title, author, year });
      setTitle("");
      setAuthor("");
      setYear("");
    }
  };

  return (
    isOpen && (
      <div className="modal-backdrop">
        <div className="modal-content">
          <form onSubmit={handleSubmit}>
            <h2>添加新图书</h2>
            <input
              type="text"
              placeholder="书名"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="text"
              placeholder="作者"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
            <input
              type="text"
              placeholder="出版年份"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
            <button type="submit">保存</button>
            <button type="button" onClick={onClose}>
              取消
            </button>
          </form>
        </div>
      </div>
    )
  );
};

BookInputModal.setOpen = () => {};

export default BookInputModal;
