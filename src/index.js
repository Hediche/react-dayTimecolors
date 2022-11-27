import React from "react";
import ReactDOM from "react-dom";
const date = new Date();
const currentTime = date.getHours();

let greeting;

const costomStyle = {
  color: ""
};

if (currentTime < 12) {
  greeting = "Good Morning";
  costomStyle.color = "red";
} else if (currentTime < 18) {
  greeting = "Good Afternoon";
  costomStyle.color = "green";
} else {
  greeting = "Good Night";
  costomStyle.color = "blue";
}
console.log(currentTime);

ReactDOM.render(
  <h1 className="heading" style={costomStyle}>
    {greeting}
  </h1>,
  document.getElementById("root")
);
