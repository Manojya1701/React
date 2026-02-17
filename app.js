import React from "react";
import ReactDOM from "react-dom/client";
 //React Element
 const heading = (
    <h1 className="head" tabIndex="5">
    Namsate
    </h1>
 );
 const Title = () => (
   <h1>Hello</h1>

 );
 //React functional Component
 //componentcomposition
 const HeadingComponent = () => (
  <div id="container">
    
    <Title/>
    <h1 className="heading">Namastey</h1>
  </div>
 );
 const root=ReactDOM.createRoot(document.getElementById("root"));
 root.render(heading);// rendering a react element
 root.render(<HeadingComponent/>); // rendering a react functional component