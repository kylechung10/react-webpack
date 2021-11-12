import React, { useState } from "react";
import ComponentOne from "./ComponentOne";
import ComponentTwo from "./ComponentTwo";
import "./Content.scss";

function Content(props) {
  // Import the data as prop
  const myData = props.myData;
  const [firstComponent, setFirstComponent] = useState(true);
  return (
    <main>
      <section id="section-1">
        <h1>Hello this is the React Webpack build</h1>
        <p>This is importing data from an external source</p>
        <p className="name">{myData.phoneNumber}</p>
        <p>The URL of this page is {myData.staticURL}</p>
        <br />
        {firstComponent ? <ComponentOne /> : <ComponentTwo />}
        <button onClick={() => setFirstComponent(!firstComponent)}>
          Click to switch components
        </button>
      </section>
    </main>
  );
}

export default Content;
