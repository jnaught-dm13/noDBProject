import React, { Component } from "react";
import axios from "axios";

import "./Movies.css";

export default class Movies extends Component {
  constructor() {
    super();
    this.state = {
      myList: [],
      searched: [],
      home: [],
      myFavorites: {}
    };
    this.removeFav = this.removeFav.bind(this);
    this.addFav = this.addFav.bind(this);
    this.findMovie = this.findMovie.bind(this);
  }
  updateFavList() {
    axios.post(`api/postFav/${this.state.myList}`).then(response => {
      console.log("myFavorites: ", this.state.myFavorites);
      this.setState({ myFavorites: response.data });
    });
  }
  removeFav(id) {
    axios.delete(`/api/removeFavorite/${id}`).then(res => {
      this.setState({ myList: res.data });
    });
  }
  addFav() {
    const { title, poster_path, id } = this.state.searched[0];
    axios.post(`/api/addFavorite/${title}/${poster_path}/${id}`).then(res => {
      this.setState({ myList: res.data });
    });
  }
  findMovie() {
    const search = this.state.userInput;
    axios
      .get(`/api/search/${search}`)
      .then(res => {
        console.log("search results", res.data);
        this.setState({ searched: res.data });
      })
      .catch(console.log);
    axios.get("/api/getFavorites").then(res2 => {
      this.setState({ myList: res2.data });
    });
  }
  componentDidMount() {
    axios
      .get("/api/discover")
      .then(res => {
        this.setState({ home: res.data });
      })
      .catch(console.log);
    axios.get("api/myFavorites").then(response => {
      console.log("myFavorite: ", this.state.myFavorites);
      this.setState({ myFavorites: response.data });
    });
  }
  render() {
    let seeker = this.state.searched.map((e, i) => {
      if (i >= 6) {
        return null;
      }

      return (
        <div className="search-movies" key={i}>
          <img src={`http://image.tmdb.org/t/p/w154/${e.poster_path}`} alt="" />
          <div className="add-fav"> </div>
          <div>
            <span className="search-title">{e.title}</span>
            <br />
            <span className="search-title">
              User Rating: {""} {e.vote_average}
              <br />
              <button onClick={this.addFav}>Favorite</button>
            </span>
          </div>
        </div>
      );
    });
    let favorite = this.state.myList.map((e, i) => {
      return (
        <div className="fav-container" key={e.id}>
          <div className="fav-list">
            <img
              src={`http://image.tmdb.org/t/p/w92/${e.poster_path}`}
              alt=""
            />
            {e.title}
          </div>
          <button onClick={() => this.removeFav(e.id)}>Remove</button>
        </div>
      );
    });
    let homeDisplay = this.state.home.map((e, i) => {
      if (i >= 12) {
        return null;
      }
      return (
        <div className="popular-movies" key={i}>
          <img src={`http://image.tmdb.org/t/p/w92/${e.poster_path}`} alt="" />
          <br />
          <div>
            <span className="movie-title">{e.title}</span>
          </div>
        </div>
      );
    });
    return (
      <div className="main-container">
        {/* ---------------------- SEARCH CONTAINER ------------------- */}
        <br />
        <div className="search-container">
          <div className="main-search">
            <div className="main">
              <div className="search-input">
                <input
                  placeholder="Seach Movie"
                  onChange={event => {
                    this.setState({ userInput: event.target.value });
                  }}
                />
                <button onClick={this.findMovie}>Submit</button>
              </div>
              {seeker}
            </div>
            {/* ---------------------- SEARCH CONTAINER ------------------- */}

            {/* ---------------------- WATCH LIST ------------------- */}
            <div className="watchlist-container">
              <div className="watch-list">Watch List:{favorite}</div>
            </div>
            {/* ---------------------- WATCH LIST ------------------- */}
            {/* ---------------------- PUPULAR MOVIES ------------------- */}

            <div className="movie-container">
              <h1 className="pop-movie"> Popular Movies </h1>
              <div className="popular-movie-list">{homeDisplay}</div>
            </div>
            {/* ---------------------- POPULAR MOVIES ------------------- */}
          </div>
        </div>
      </div>
    );
  }
}
