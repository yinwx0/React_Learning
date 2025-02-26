import { Carousel } from "antd";

const App = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <Carousel afterChange={onChange}>
      <div>
        <img
          src="https://picx.zhimg.com/v2-01101c6cc9a24f3da3b7630ee1459941_r.jpg?source=1def8aca"
          style={{ height: "350px", width: "3000px" }}
        />
        {/* <h3 style={contentStyle}>1</h3> */}
      </div>
      <div>
        <img
          src="https://pica.zhimg.com/v2-0400b4e390bf3152c5ab93d9aed15135_r.jpg?source=1def8aca"
          style={{ height: "350px", width: "3000px" }}
        />
        {/* <h3 style={contentStyle}>2</h3> */}
      </div>
      <div>
        <img
          src="https://picx.zhimg.com/v2-620c9ae7c76106ba9f91742d34158b6c_r.jpg?source=1def8aca"
          style={{ height: "350px", width: "3000px" }}
        />
        {/* <h3 style={contentStyle}>3</h3> */}
      </div>
      <div>
        <img
          src="https://pic1.zhimg.com/v2-57f247bc204555cf17b0d048603116bd_r.jpg?source=1def8aca"
          style={{ height: "350px", width: "3000px" }}
        />
        {/* <h3 style={contentStyle}>4</h3> */}
      </div>
    </Carousel>
  );
};
export default App;
