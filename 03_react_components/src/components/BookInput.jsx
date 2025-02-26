import { useState } from "react";
import { Button, Form, Input } from "antd";

const BookInput = ({ onAddBook, editingBook, onUpdateBook }) => {
  const [form] = Form.useForm();
  const [book, setBook] = useState(
    editingBook || {
      title: "",
      author: "",
      year: "",
    }
  );

  const handleSubmit = () => {
    if (editingBook) {
      onUpdateBook({ ...book, id: editingBook.id });
    } else {
      onAddBook(book);
    }
    setBook({ title: "", author: "", year: "" });
    form.resetFields();
  };

  return (
    <div className="book-input">
      <h2>{editingBook ? "编辑图书" : "添加新书"}</h2>
      <Form form={form} onFinish={handleSubmit}>
        <Form.Item label="书名" name="title">
          <Input
            value={book.title}
            onChange={(e) => setBook({ ...book, title: e.target.value })}
          />
        </Form.Item>
        <Form.Item label="作者" name="author">
          <Input
            value={book.author}
            onChange={(e) => setBook({ ...book, author: e.target.value })}
          />
        </Form.Item>
        <Form.Item label="出版年" name="year">
          <Input
            value={book.year}
            onChange={(e) => setBook({ ...book, year: e.target.value })}
          />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          {editingBook ? "更新" : "添加"}
        </Button>
      </Form>
    </div>
  );
};

export default BookInput;
