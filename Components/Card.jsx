import React from "react";

const Card = ({ title, description }) => {
  const cardStyle = {
    position: "relative",
    width: "300px",
    height: "200px",
    borderRadius: "10px",
    color: "white",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginBottom: "20px",
    perspective: "1000px",
    transition: "transform 0.6s",
    transformStyle: "preserve-3d",
  };

  const frontStyle = {
    zIndex: 2,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backfaceVisibility: "hidden",
    borderRadius: "10px",
    padding: "20px",
    color: "white",
    fontFamily: "Arial, sans-serif",
    background: "rgba(255,255,255,0.05)",
    WebkitBackdropFilter: "blur(1px)",
    backdropFilter: "blur(1px)",
    border: "3px solid rgba(255, 255, 255, 0.02)",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  };

  const backStyle = {
    transform: "rotateY(180deg)",
    zIndex: 1,
    backgroundColor: "blue",
    borderRadius: "10px",
    padding: "20px",
    color: "black",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
  };

  return (
    <div className="card" style={cardStyle}>
      {/* Front side */}
      <div className="front" style={frontStyle}>
        <div className="container-card">
          <div className="card-title">{title}</div>
        </div>
      </div>
      {/* Back side */}
      <div className="back" style={backStyle}>
        <div className="container-card">
          <div className="card-description">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
