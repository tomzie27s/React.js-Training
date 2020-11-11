import React from "react";

const name = "Samuel P. de Leon";
const dateNow = new Date().toDateString();
const year = new Date().getFullYear();

const customStyle = {
    color: "blue",
    fontSize: "20px",
    width: "25%",
    border: "1px solid black"
};

customStyle.color = "green";

function ShowDateNow() {
  return (
      <footer>
        <p style={customStyle}>{dateNow}</p>
        <p>Created by: {name}</p>
        <p>Copyright &copy; {year}</p>
      </footer>
  );
};

export default ShowDateNow;