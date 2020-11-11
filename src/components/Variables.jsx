import React from "react";

function Variables() {
    const name = "Test";
    const date = new Date().getFullYear();
    const random = Math.floor(Math.random() * 10);
    return (
      <div className="App">
        <h1>Hello, React.js</h1>
        <h2>{name} - {date}</h2>
        <h3 style={{color: "red"}}>Random Number: {random}</h3>
      </div>
    );
  };

  export default Variables;