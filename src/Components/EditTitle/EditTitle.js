import React, { Component } from "react";
import axios from "axios";

export default class EditTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      siteTitle: "The Movie Database",
      userInput: "",
      toggle: false
    };
    this.editTitle = this.editTitle.bind(this);
  }
  editTitle() {
    let title = this.state.userInput;
    axios.put(`/api/edit/${title}`).then(response => {
      console.log("response", response.data);
      this.setState({ siteTitle: response.data.title, toggle: false });
    });
  }
  render() {
    console.log(this.state.userInput);
    if (this.state.toggle === false) {
      return (
        <div>
          <div>{this.state.siteTitle}</div>
          <button onClick={() => this.setState({ toggle: true })}>
            Edit Title
          </button>
        </div>
      );
    } else if (this.state.toggle === true) {
      return (
        <div>
          <input
            placeholder="Enter Title Name"
            onChange={e => this.setState({ userInput: e.target.value })}
          />
          <button onClick={this.editTitle}>Submit</button>
        </div>
      );
    }
    return (
      <div>
        <div> {this.state.siteTitle}</div>
      </div>
    );
  }
}
