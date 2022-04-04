import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ year, title, summary, poster, genres, rating }) {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title} />
      <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <ul className="movie__genres">
          {genres.map((genres, index) => {
            return (
              <li className="movie__genre" key={index}>
                {genres}
              </li>
            );
          })}
        </ul>
        <p className="movie__summary">{summary.slice(0, 180)}...</p>
        <h5 className="movie__rating">{rating}</h5>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default Movie;
