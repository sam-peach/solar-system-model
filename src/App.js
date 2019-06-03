import React from "react";
import logo from "./logo.svg";
import P5Wrapper from "react-p5-wrapper";
import sketch from "./p5/sketch";
import "./App.css";

function App() {
  return (
    <div>
      <P5Wrapper sketch={sketch} />
    </div>
  );
}

export default App;
