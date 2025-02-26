import Card from "./card/Card";

const MainProductList = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: "20px",
        padding: "20px",
      }}
    >
      <Card
        home="https://picx.zhimg.com/v2-01101c6cc9a24f3da3b7630ee1459941_r.jpg?source=1def8aca"
        avage="https://ywxbucket.oss-cn-beijing.aliyuncs.com/images/lanyangyang.png"
        name="懒羊羊"
        title="草莓蛋糕"
      />
      <Card
        home="https://pica.zhimg.com/v2-0400b4e390bf3152c5ab93d9aed15135_r.jpg?source=1def8aca"
        avage="https://ywxbucket.oss-cn-beijing.aliyuncs.com/images/manyangyang.png"
        name="慢羊羊"
        title="智慧树"
      />
      <Card
        home="https://picx.zhimg.com/v2-620c9ae7c76106ba9f91742d34158b6c_r.jpg?source=1def8aca"
        avage="https://ywxbucket.oss-cn-beijing.aliyuncs.com/images/meiyangyang.png"
        name="美羊羊"
        title="蝴蝶发夹"
      />
    </div>
  );
};

export default MainProductList;
