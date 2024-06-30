import React, { useState, useEffect } from "react";

const colors = [
  "#6082B6",
  "rgb(221,160,221)",
  "rgb(230,230,250)",
  "rgb(128,128,255)",
  "#72A0C1",
];

export default function BlinkingText() {
  const [isBlinking, setIsBlinking] = useState(false);
  const [currentColorsIndex, setCurrentColorsIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsBlinking((prevState) => !prevState); // Toggle blinking state
      setCurrentColorsIndex((prevIndex) => (prevIndex + 1) % colors.length); // Change colors index
    }, 1000); // Interval every 1000ms (1 second)

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  const text = `function Welcome(props) {
return <h1>Hello, {props.name}</h1>;}const element
= <Welcome name="Sowmya" />;ReactDOM.render(element,
document.getElementById('root'))const element = <Welcome
name="Sowmya" />;ReactDOM.render(element,document.
getElementById('root'));const element = <Welcome 
name="Sowmya" />;ReactDOM.render(element,document.
getElementById('root'));`;

  const colorizeText = () => {
    const words = text.split(" ");
    return words.map((word, index) => (
      <span
        key={index}
        style={{ color: colors[(currentColorsIndex + index) % colors.length] }}
      >
        {word + " "}
      </span>
    ));
  };

  const textStyle = {
    animation: isBlinking ? "blink 1s linear infinite" : "none",
    whiteSpace: "pre-wrap", // Preserve spaces in pre-wrap
  };

  return (
    <div>
      <p style={textStyle} className="hero--para">
        {colorizeText()}
      </p>
    </div>
  );
}
