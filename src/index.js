import React from "react";
import ReactDOM from "react-dom";

const date = new Date();
const currentTime = date.getHours();
const customStyle = {
  color: ""
};
let greeting;

if (currentTime < 12) {
  greeting = "It is Morning!";
  customStyle.color = "green";
} else if (currentTime < 18) {
  greeting = "It is Afternoon";
  customStyle.color = "red";
} else {
  greeting = "It is Night";
  customStyle.color = "blue";
}

ReactDOM.render(
  <h1 className="heading" style={customStyle}>
    {greeting}
  </h1>,
  document.getElementById("root")
);
