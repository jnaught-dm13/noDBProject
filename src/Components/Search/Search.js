import React, { Component } from "react";
import axios from "axios";
import "./Search.css";

export default class Search extends Component {
  constructor(props) {
  //   super(props);
  //   this.state = {
  //     userInput: "",
  //     movie: []
  //   };
  //   this.findMovie = this.findMovie.bind(this);
  // }
  // findMovie() {
  //   const search = this.state.userInput;
  //   axios
  //     .get(`/api/search/${search}`)
  //     .then(res => {
  //       console.log("search results", res.data);
  //       this.setState({ movie: res.data.results[0] });
  //     })
  //     .catch(console.log);
  // }
  // handleChange(value) {
  //   this.setState({ userInput: value });
  // }

  // render() {
  //   console.log(this.state.userInput);
  //   return (
  //     <div className="main-search">
  //       <input placeholder="Seach Movie" onChange={this.handleChange} />
  //       <button onClick={this.findMovie}>Submit</button>
  //     </div>
  //   );
  // }
}
