import { useNavigate, useLocation } from "react-router-dom";
import "./Login.css";
import users from "../data/user"; // 假设用户数据文件路径为 ../data/user.js

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  const handleLogin = () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      // 登录成功，将用户信息存储到 localStorage
      localStorage.setItem("user", JSON.stringify(user));
      // 跳转到指定页面
      navigate(from, { replace: true });
    } else {
      alert("用户名或密码错误！");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">登录</h1>
        <div className="form-group">
          <label htmlFor="username">用户名：</label>
          <input
            type="text"
            id="username"
            placeholder="请输入用户名"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">密码：</label>
          <input
            type="password"
            id="password"
            placeholder="请输入密码"
            className="form-control"
          />
        </div>
        <button className="login-btn" onClick={handleLogin}>
          登录
        </button>
      </div>
    </div>
  );
};

export default Login;
