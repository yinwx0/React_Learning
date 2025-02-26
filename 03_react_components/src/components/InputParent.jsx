import { useState } from "react";
import Input from "./Input";

const InputParent = () => {
  const [submittedData, setSubmittedData] = useState(null);

  const handleFormSubmit = (data) => {
    setSubmittedData(data);
  };

  return (
    <div>
      <h1>注册页面</h1>
      <Input onSubmit={handleFormSubmit} />
      {submittedData && (
        <div>
          <h2>提交的数据:</h2>
          <p>姓名: {submittedData.name}</p>
          <p>邮箱: {submittedData.email}</p>
        </div>
      )}
    </div>
  );
};

export default InputParent;
