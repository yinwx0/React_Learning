import { useState } from "react";

const Input = ({ onClick }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    onClick({ name, email });
  };

  return (
    <form onSubmit={handleClick}>
      <div>
        <label>姓名:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="请输入姓名"
        />
      </div>
      <div>
        <label>邮箱:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="请输入邮箱"
        />
      </div>
      <button type="submit">提交</button>
    </form>
  );
};

export default Input;
