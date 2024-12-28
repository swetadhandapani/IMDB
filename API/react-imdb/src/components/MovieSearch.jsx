import { useState } from "react";
import axios from "axios";

export default function MovieSearch({ isDelete }) {
  const [search, setSearch] = useState("");
  const [movie, setMovie] = useState(null);

  const searchMovie = () => {
    axios
      .get(`http://localhost:3000/api/movie/${search}`)
      .then((response) => setMovie(response.data))
      .catch((error) => setMovie("error"));
  };

  const deleteMovie = () => {
    axios
      .delete(`http://localhost:3000/api/movie/${search}`)
      .then((response) => setMovie("Deleted Successfully"))
      .catch((error) => setMovie("error"));
  }

  return (
    <div>
      <div className="d-flex">
        <input
          className="form-control m-1"
          type="text"
          placeholder="Enter Movie id"
          onChange={(e) => setSearch(e.target.value)}
        />
        {!isDelete ? <button className="btn btn-primary m-1" onClick={searchMovie}>
          Search
        </button>:
        <button className="btn btn-danger m-1" onClick={deleteMovie}>Delete</button>}
      </div>
      {movie && movie !== "error" && (isDelete? "Deleted Successfully" : (
        <div className="movie-container">
          <h3 className="movie-title">{movie.title}</h3>
          <img
            src={movie.images[0]}
            alt={movie.title}
            className="movie-image"
          />
          <div className="movie-content">Run Time: {movie.runTime}</div>
          <div className="movie-content">Year: {movie.year}</div>
          <div className="movie-content">Genre: {movie.genre}</div>
          <div className="movie-content">Writer: {movie.writer}</div>
          <div className="movie-content">Actors: {movie.actors}</div>
          <div className="movie-content">Plot: {movie.plot}</div>
        </div>
      ))}
      {movie && movie === "error" && (isDelete ? "Unable to delete" : "No data")}
    </div>
  );
}
