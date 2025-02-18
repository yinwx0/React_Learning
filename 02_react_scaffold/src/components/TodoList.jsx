import { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState([]); // 任务列表
  const [inputValue, setInputValue] = useState(""); // 输入框的值

  // 添加任务
  const addTask = () => {
    if (inputValue.trim()) {
      const newTask = {
        id: Date.now(), // 使用时间戳作为唯一ID
        text: inputValue,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setInputValue(""); // 清空输入框
    }
  };

  // 标记任务为完成/未完成
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // 删除任务
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // 计算已完成和未完成的任务数量
  const completedTasks = tasks.filter((task) => task.completed).length;
  const remainingTasks = tasks.length - completedTasks;

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#333" }}>任务清单</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="添加新任务"
          style={{
            flex: 1,
            padding: "10px",
            marginRight: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            fontSize: "16px",
          }}
        />
        <button
          onClick={addTask}
          style={{
            padding: "10px 20px",
            backgroundColor: "#4CAF50",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          添加任务
        </button>
      </div>
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
        }}
      >
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px 0",
              borderBottom: "1px solid #eee",
            }}
          >
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
                cursor: "pointer",
                color: task.completed ? "#ccc" : "#333",
                fontSize: "16px",
              }}
              onClick={() => toggleTask(task.id)}
            >
              {task.text}
            </span>
            <button
              onClick={() => deleteTask(task.id)}
              style={{
                padding: "5px 10px",
                backgroundColor: "#f44336",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                fontSize: "14px",
              }}
            >
              删除任务
            </button>
          </li>
        ))}
      </ul>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 0",
          marginTop: "20px",
          borderTop: "1px solid #eee",
        }}
      >
        <p style={{ margin: 0, color: "#555" }}>任务总数: {tasks.length}</p>
        <p style={{ margin: 0, color: "#555" }}>已完成: {completedTasks}</p>
        <p style={{ margin: 0, color: "#555" }}>待完成: {remainingTasks}</p>
      </div>
    </div>
  );
}

export default TodoList;
