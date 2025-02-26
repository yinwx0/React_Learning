import React from "react";

const Nav = ({ onAddBook }) => {
  return (
    <nav className="nav-bar">
      <div className="nav-title">图书管理系统</div>
      <button onClick={onAddBook} className="nav-btn">
        添加图书
      </button>
    </nav>
  );
};

export default Nav;
