import React from "react";
import "./Header.css";

import EditTitle from "../EditTitle/EditTitle";

export default function Header(props) {
  return (
    <div>
      <div className="headerBox">
        <h1> Welcome to {props.title}</h1>
      </div>
      <div className="nav">
        <EditTitle />
      </div>
    </div>
  );
}
