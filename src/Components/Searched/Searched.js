// import React, { Component } from "react";
// import "./Searched.css";
// import axios from "axios";

// export default class Searched extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       results: [],
//       favorites: []
//     };
//     // this.addFav = this.addFav.bind(this);
//   }

//   // addFav() {
//   //   const { title, poster_path, id } = this.props.searched[0];
//   //   axios.post(`/api/addFavorite/${title}/${poster_path}/${id}`).then(res => {
//   //     this.setState({ favorites: res.data });
//   //   });

//   render() {
//     console.log("favorites", this.state.favorites);
//     let results = this.props.searched;
//     let seeker = results.map((e, i) => {
//       if (i >= 1) {
//         return null;
//       }

//       return (
//         <div className="search-movies" key={i}>
//           <img src={`http://image.tmdb.org/t/p/w92/${e.poster_path}`} alt="" />
//           <div className="add-fav">
//             {" "}
//             <button onClick={this.addFav}>Favorite</button>
//           </div>
//           <div>
//             <span className="search-title">{e.title}</span>
//             <br />
//             <span className="search-title">
//               User Rating: {""} {e.vote_average}
//             </span>
//           </div>
//         </div>
//       );
//     });
//     return (
//       <div className="results-container">
//         <div className="search-movie-list">{seeker[0]}</div>
//       </div>
//     );
//   }
// }
