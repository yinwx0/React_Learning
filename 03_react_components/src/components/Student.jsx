const Student = ({ name, age, avage, home }) => {
  return (
    <>
      <h2>学生姓名：{name}</h2>
      <h2>年龄：{age}</h2>
      <h2>
        头像：
        <img src={avage} width={200} />
      </h2>
      <h2>主页：{home}</h2>
    </>
  );
};

export default Student;
