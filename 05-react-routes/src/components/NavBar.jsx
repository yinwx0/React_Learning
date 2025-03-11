import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  // 从 localStorage 获取用户信息
  const user = JSON.parse(localStorage.getItem("user"));
  const [showUserInfo, setShowUserInfo] = useState(false); // 控制用户信息弹窗的显示和隐藏

  const handleAvatarClick = () => {
    setShowUserInfo(!showUserInfo); // 点击头像时切换用户信息弹窗的显示状态
  };

  return (
    <nav className="navbar">
      <div className="nav-links">
        <NavLink to="/" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/about?name=zhangsan&age=20" activeClassName="active">
          About
        </NavLink>
        <NavLink to="/dashboard" activeClassName="active">
          Dashboard
        </NavLink>
        <NavLink to="/book/123" activeClassName="active">
          Book
        </NavLink>
      </div>
      {user ? (
        <div className="user-info">
          <div className="user-avatar" onClick={handleAvatarClick}>
            <img src={user.image} alt={user.username} />
          </div>
          {showUserInfo && (
            <div className="user-info-popup">
              <div className="popup-content">
                <div className="popup-header">
                  <h3>用户信息</h3>
                  <span className="close-btn" onClick={handleAvatarClick}>
                    ×
                  </span>
                </div>
                <div className="popup-body">
                  <div className="popup-user-avatar">
                    <img src={user.image} alt={user.username} />
                  </div>
                  <div className="popup-user-details">
                    <p>
                      <strong>用户名：</strong> {user.username}
                    </p>
                    <p>
                      <strong>签名：</strong> {user.signature}
                    </p>
                    <p>
                      <strong>爱好：</strong> {user.hobbies.join("、")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="user-info">
          <span>请先登录</span>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
