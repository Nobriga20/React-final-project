import React, { useEffect, useState } from "react";


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
            <input type="text" Title={setInput} />
          </div>
          <button onclick={getData}>
            search
          </button>
           
          <div className="pagination"></div>
        </div>
      </section>
    </section>
  );
}

export default Movies;
