import { Link } from "react-router-dom";


function Movies({ data }) {
  return (
    <section>
      <section id="card__section">
        <div className="container">
          {data && data.Search && (
            <div className="movies--card">
              {data.Search.map((movie, index) => (
                <div key={index}>
                  <Link to={`/movie/${movie.imdbID}`}>
                    <h3>{movie.Title}</h3>
                  </Link>
                  <img src={movie.Poster} alt={movie.Title} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </section>
  );
}

export default Movies;
