import React, { Component } from "react";
import "./Header.css";

import EditTitle from "../EditTitle/EditTitle";

export default class Header extends Component {
  render() {
    return (
      <div className="main">
        <header className="headerBox">
          <h1>
            <EditTitle />{" "}
          </h1>
          <div />
        </header>
      </div>
    );
  }
}
