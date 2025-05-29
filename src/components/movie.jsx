import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchMovie() {
      const { data } = await axios.get(
        `http://www.omdbapi.com/?i=${id}&apikey=dd4916f0`
      );
      setMovie(data);
    }
    fetchMovie();
  }, []);
  return (
    <>
      <div className="movie-card">
        <img src={movie.Poster} alt="Movie Poster" class="movie-poster" />

        <div className="movie-details">
          <h2 className="movie-title">{movie.Title}</h2>
          <p className="movie-body">{movie.body}</p>

          <p className="movie-description">Released: {movie.Year}</p>

          <button className="watch-button">Watch Now</button>
        </div>
      </div>
      ;
    </>
  );
};

export default Movie;
