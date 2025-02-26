import "./style.css";

const Card = ({ home, avage, name, title }) => {
  return (
    <div className="card">
      <div className="home">
        <img
          src={home}
          alt="home"
          style={{ height: "200px", width: "100%", objectFit: "cover" }}
        />
      </div>
      <div className="content">
        <div className="avage">
          <img
            src={avage}
            alt="avage"
            style={{ height: "100px", width: "100px", borderRadius: "50%" }}
          />
        </div>
        <div className="info">
          <div className="name">{name}</div>
          <div className="title">{title}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
