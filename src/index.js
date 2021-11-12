import React from "react";
import ReactDOM, { render } from "react-dom";

// Import data from main index file
import myData from "myData";
// Component import
import Content from "./components/content";

function App() {
  return (
    <>
      <Content myData={myData} />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
