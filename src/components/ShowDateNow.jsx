import React from "react";

const dateNow = new Date().toDateString();

const customStyle = {
    color: "blue",
    fontSize: "20px",
    width: "25%",
    border: "1px solid black"
};

customStyle.color = "green";

function ShowDateNow() {
  return (
    <p style={customStyle}>{dateNow}</p>
  );
};

export default ShowDateNow;