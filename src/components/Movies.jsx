import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Movies() {
  const [data, setData] = useState(null);
  const [input, setInput] = useState("")
  
const getData = async () => {
    const response = await fetch(`http://www.omdbapi.com/?s=${input}&apikey=dd4916f0`);
    const result = await response.json();
    console.log (result)
    setData(result);
  };
  useEffect(() => {

  }, []);
  return (
    <section>
      <section id="card__section">
        <div className="container">
          <div className="wrapper"></div>
          <div>
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
          <button onClick={getData}>
            search
          </button>
           
           {data && data.Search && (
            <div>
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
