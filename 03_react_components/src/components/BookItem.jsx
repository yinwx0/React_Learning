import { Card, Button } from "antd";
import "./BookItem.css";

const BookItem = ({ book, onDelete, onSelect, onEdit, children }) => {
  return (
    <Card
      className="book-item"
      hoverable
      onClick={onSelect}
      actions={[
        <Button
          type="link"
          onClick={(e) => {
            e.stopPropagation();
            onEdit();
          }}
        >
          编辑
        </Button>,
        <Button
          type="link"
          danger
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
        >
          删除
        </Button>,
      ]}
    >
      {children}
    </Card>
  );
};

export default BookItem;
