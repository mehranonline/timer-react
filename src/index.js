import React from "react";
import ReactDOM from "react-dom";

const tick = () => {
  const elem = (
    <div>
      <h2>This is now!</h2>
      <h2>{new Date().toLocaleString()}</h2>
    </div>
  );
  ReactDOM.render(elem, document.getElementById("myDiv"));
};

setInterval(() => {
    tick()
},1000)


