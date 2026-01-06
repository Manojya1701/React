import React from "react";
import { createRoot } from "react-dom/client";
 //Recat Crete elemnt
const heading=React.createElement(
  "h1",
  {id:"heading"},
  "HI from REact element create"
);
//JSX
const jsxheading=<h1>Namastey react from jSX</h1>;
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);