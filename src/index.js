import React from "react";
import ReactDOM from "react-dom/client";



const isMorning = true
const morning ="GOOOD MORNING"
const afternoon = "GOOD AFTERNOON"
const div = <div>{isMorning ? morning : afternoon}</div>
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(div);

