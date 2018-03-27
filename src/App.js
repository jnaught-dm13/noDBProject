import React, { Component } from "react";

import "./App.css";

import Header from "./Components/Header/Header";
// import Favorites from "./Components/Favorites/Favorites";
import Movies from "./Components/Movies/Movies";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: [],
      userInput: "",
      results: []
    };
  }

  render() {
    return (
      <div>
        <div className="fixed-header-postition">
          <Header />
        </div>

        <div className="main-container">
          <div className="movies-container">
            <Movies />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
