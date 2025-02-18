import React from "react";

const students = [
  { id: 111, name: "张三疯", scope: 99 },
  { id: 112, name: "张三风", scope: 98 },
  { id: 113, name: "张三峰", scope: 91 },
  { id: 114, name: "张三凤", scope: 88 },
];

const element = (
  <div>
    <h2>学生列表数据</h2>
    <div>
      {students
        .filter((item) => item.scope > 90)
        .map((item) => {
          return (
            <div key={item.id}>
              <h2>学号：{item.id}</h2>
              <h2>姓名：{item.name}</h2>
              <h2>分数：{item.scope}</h2>
            </div>
          );
        })}
    </div>
  </div>
);

class TaskList extends React.Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h3>{element}</h3>
      </div>
    );
  }
}

export default TaskList;
