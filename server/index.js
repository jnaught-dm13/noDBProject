const express = require("express");
const { json } = require("body-parser");

const controller = require("./controller.js");
const discoverAPI = "/api/discover";
const searchAPI = "/api/search";
const favoritesAPI = "/api/favorites";
const getFavoritesAPI = "/api/getFavorites";
const addFavoriteAPI = "/api/addFavorite";
const removeFavoriteAPI = "/api/removeFavorite";
const editTitleAPI = "/api/edit";
const app = express();

app.use(json());

const port = 3001;
//-----------------------------------------------------------//
app.get(`${discoverAPI}`, controller.getData);
app.get(`${searchAPI}/:search`, controller.search);
app.get(`${getFavoritesAPI}`, controller.getFavorites);
app.get("/api/myFavorites", controller.myFavorites);
//-----------------------------------------------------------//
app.post(`${addFavoriteAPI}/:title/:poster_path/:id`, controller.addFavorite);
app.post(`${favoritesAPI}`, controller.favorites);

//-----------------------------------------------------------//
app.delete(`${removeFavoriteAPI}/:id`, controller.deleteData);
//-----------------------------------------------------------//

app.put(`${editTitleAPI}/:title`, controller.editTitle);
//-----------------------------------------------------------//

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});
