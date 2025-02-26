// import WelcomeClass from "./components/WelcomeClass";
// import WelcomeFunc from "./components/WelcomeFunc";
// import Student from "./components/Student";
// import RandomName from "./components/RandomName";
import { useState } from "react";
// import BookInput from "./components/BookInput";
// import BookList from "./components/BookList";
// import BookDetail from "./components/BookDetail";
import BookHeader from "./components/BookHeader";
import BookMain from "./components/BookMain";
import BookFooter from "./components/BookFooter";
import "./App.css";
// import Header from "./components/Header";
// import Main from "./components/Main";
// import Footer from "./components/Footer";
// import Button from "./components/Button";
// import { Button } from "antd";
// import UserPage from "./components/UserPage";
// import Button1 from "./components/Button1";
// import InputParent from "./components/InputParent";
// import NavBar from "./components/navbar/NavBar";

const App = () => {
  // const handleClick = () => {
  //   alert("点击了按钮");
  // };
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [editingBook, setEditingBook] = useState(null);

  const handleAddBook = (newBook) => {
    setBooks([...books, { ...newBook, id: Date.now() }]);
  };

  const handleDeleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const handleUpdateBook = (updatedBook) => {
    setBooks(
      books.map((book) => (book.id === updatedBook.id ? updatedBook : book))
    );
    setEditingBook(null);
  };

  return (
    <>
      {/* <WelcomeClass name="World" /> */}
      {/* <WelcomeFunc name="React 组件！！！" /> */}
      {/* <Student
        name="殷文喧"
        age="20"
        avage="https://ywxbucket.oss-cn-beijing.aliyuncs.com/images/lanyangyang.png"
        home="喜欢打羽毛球"
      /> */}
      {/* <RandomName /> */}
      {/* <Header />
      <Main />
      <Footer /> */}
      {/* <Button /> */}
      {/* <UserPage /> */}
      {/* <Button1 /> */}
      {/* <InputParent /> */}
      {/* <NavBar
        header={<h1>标题</h1>}
        body={<h2>主体</h2>}
        footer={<button>按钮</button>}
      /> */}
      <div className="app-container">
        <BookHeader />
        <BookMain
          books={books}
          selectedBook={selectedBook}
          onAddBook={handleAddBook}
          onDeleteBook={handleDeleteBook}
          onSelectBook={setSelectedBook}
          onUpdateBook={handleUpdateBook}
          editingBook={editingBook}
          setEditingBook={setEditingBook}
        />
        <BookFooter />
      </div>
    </>
  );
};

export default App;
