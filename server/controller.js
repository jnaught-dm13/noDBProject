const axios = require("axios");
const { apiKey } = require("./config");

const discoverURL = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc`;
const searchURL = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=`;
//--------------------------------------------------------
let searchResults = [];
let favorites = [];
let title = "";
let myFavorites = {};

module.exports = {
  getData: (req, res, next) => {
    console.log(req.body);
    axios.get(discoverURL).then(response => {
      res.status(200).send(response.data.results);
    });
  },
  search: (req, res, next) => {
    searchResults = [];
    console.log("hit Search API");
    const { search } = req.params;
    console.log("Issued params hit", search);
    axios
      .get(`${searchURL}${search}`)
      .then(response => {
        searchResults.push(response.data.results[0]);
        // console.log(searchResults);
        res.status(200).send(searchResults);
      })
      .catch(e => console.log(e.response.data));
  },

  getFavorites: (req, res, next) => {
    console.log(req.body);
    console.log("retrieved favorites");
    res.status(200).send(favorites);
  },
  addFavorite: (req, res, next) => {
    const { title, poster_path, id } = req.params;
    console.log(title, poster_path);
    console.log("add favorite hit", title);

    favorites.push({ title, poster_path, id });

    res.status(200).send(favorites);
  },
  deleteData: (req, res, next) => {
    const { id } = req.params;
    let ind = favorites.findIndex(e => e.id === parseInt(id));
    console.log("delete hit", id);
    favorites.splice(ind, 1);
    res.status(200).send(favorites);
  },
  editTitle: (req, res, next) => {
    console.log("hit edit ", req.params);
    const newTitle = req.params;
    title = newTitle;
    res.status(200).send(title);
  },
  myFavorites: (req, res, next) => {
    res.status(200).json(myFavorites);
  },
  favorites: (req, res, next) => {
    let movies = req.body;
    favorites.push(movies);
    res.status(200).send(favorites);
  }
};
