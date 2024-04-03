import React from "react";
import ReactDOM from 'react-dom'

export class ReactComponentSecond extends React.Component {
  render() {
    const reactVersion = require("./package.json").dependencies["react"];

    return [
      <div style={{ padding: '20px' }}>
        <div style={{ display: "flex", alignItems: "center", marginRight: '10px',  }}>
          <h1 style={{ margin: '0 10px 0 0' }}>React Component Second</h1>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            height="30"
          ></img>
        </div>
        <p>[ This is <b>react web component</b> from external react app ]</p>
        <p>React Version: {reactVersion}</p>
        <p>Project is running at <a href="http://localhost:4204/">http://localhost:4204</a></p>
      </div>
    ];
  }
}

class Mfe4Element extends HTMLElement {
  connectedCallback() {
    ReactDOM.render(<ReactComponentSecond/>, this);
  }
}

customElements.define('react-component-second', Mfe4Element);