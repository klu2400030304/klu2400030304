import React from "react";

const UserCard = ({ name, age, bio }) => {
  const cardStyle = {
    border: "1px solid #ccc",
    borderRadius: "12px",
    padding: "20px",
    width: "280px",
    margin: "20px auto",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#fdfdfd"
  };

  const nameStyle = {
    fontSize: "1.5em",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "10px"
  };

  const ageStyle = {
    fontSize: "1em",
    color: "#666",
    marginBottom: "15px"
  };

  const bioStyle = {
    fontSize: "0.95em",
    color: "#555"
  };

  return (
    <div style={cardStyle}>
      <div style={nameStyle}>{name}</div>
      <div style={ageStyle}>Age: {age}</div>
      <div style={bioStyle}>{bio}</div>
    </div>
  );
};

export default UserCard;
